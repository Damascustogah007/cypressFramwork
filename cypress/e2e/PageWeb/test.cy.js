describe('test', () => {
    before(() => {
        cy.viewport(Cypress.env('viewportWidth'), Cypress.env('viewportHeight'));
    });
    it('Should visit google homepage homepage', () => {
        cy.visit('https://www.google.com')
    });
});