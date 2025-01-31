import Page from "../PageFactory/page";
import data from "../testData/foundation.Data.json";

const {
  courses_test,
  dropdown_menu_length,
  course_menu_first,
  course_menu_second,
  course_menu_third,
  get_started_link,
  testing_foundation,
  foundation_base_test,
  what_will_you_learn,
  start_course,
  place_holder,
  subscribe_button,
  hostname,
} = data;

const dropdown_menu = [
  course_menu_first,
  course_menu_second,
  course_menu_third,
];
let next = Cypress.env("nextUrl");
let cypress = Cypress.env("cypressUrl");
let github = Cypress.env("githubUrl");
const interceptLinks = [next, cypress, github];

export default class Foundation extends Page {
  constructor() {
    super();
    (this.course = '[data-test="courses-dropdown"]'),
      (this.course_menu = '[data-test="courses-dropdown-menu"]'),
      (this.course_menu_tile = 'div[class="flex md:h-full lg:flex-col"]');
    (this.dropdown_menu_header =
      'p[class="text-base font-medium text-gray-900"]'),
      (this.getStarted = 'p[class*="mt-2"]');
    (this.foundation_header = 'span[class="block text-gray-900"]'),
      (this.foundation_subHeader = 'p[class*="mt-3"]'),
      (this.learn_header = 'h2[class*="text-3xl"]'),
      (this.start_course_btn = '[data-test="next-lesson-button"]'),
      (this.input_field = 'input[type="email"]'),
      (this.subscribe_btn = 'button[type="submit"]');
    this.footer_links = 'a[href*="https:"]';
  }

  verifyCoursesHeader() {
    this.elementIsVisible(this.course).and("contain.text", courses_test);
    this.forceClickOnElement(this.course);
    this.elementIsVisible(this.course_menu);
    this.getLocator(this.course_menu_tile).should(
      "have.length",
      dropdown_menu_length
    );
    this.getLocator(this.dropdown_menu_header).then((element) => {
      const dropdown_header = [];
      dropdown_header.push(element.text().trim());
      let header = dropdown_header.join("");
      let menu = dropdown_menu.join("");
      expect(header).to.equal(menu);
    });
  }
  verifyTestingFoundationBody() {
    this.getLocator(this.foundation_header).should(
      "contain.text",
      testing_foundation
    );
    this.getLocator(this.foundation_subHeader).should(
      "contain.text",
      foundation_base_test
    );
    this.getLocator(this.learn_header).should(
      "contain.text",
      what_will_you_learn
    );
    this.scrollToElement(this.start_course_btn);
    this.elementIsVisible(this.start_course_btn)
      .and("contain.text", start_course)
      .and("have.css", "background-color", "rgb(59, 130, 246)")
      .and("not.be.focused");
    this.getLocator(this.input_field)
      .should("not.be.disabled")
      .and("have.attr", "Placeholder", place_holder);

    this.getLocator(this.input_field).click().should("be.focused");
    this.elementIsVisible(this.subscribe_btn)
      .and("be.enabled")
      .and("contain.text", subscribe_button);
  }
}
