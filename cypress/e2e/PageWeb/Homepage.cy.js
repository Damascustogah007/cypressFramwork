import Homepage from "../../pageObjects/HomepageObjects";

const homepage = new Homepage();

describe('Homepage', () => {
    before(() => {
        cy.viewport(Cypress.env('viewportWidth'), Cypress.env('viewportHeight'));
        const url = Cypress.env('baseUrl')
        cy.visit(url)
    });
    it('Should navigate and verify homepage', () => {
        homepage.navigateAndVerifyHomepage()
        homepage.verifyTestFoundationPage()
    });
});