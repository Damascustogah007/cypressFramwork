import Foundation from "../../pageObjects/FoundationObjects";

const foundation = new Foundation();

describe('Testing Foundation', () => {
    before(() => {
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'))
        const url = Cypress.env('baseUrl')
        cy.visit(url + '/testing-foundations')
    });
    it('Should verify testing foundation page', () => {
        foundation.verifyCoursesHeader()
        foundation.verifyTestingFoundationBody()
    });
});