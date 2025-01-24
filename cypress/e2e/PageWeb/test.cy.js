describe('test', () => {
    before(() => {
        cy.viewport(Cypress.env('viewportWidth'), Cypress.env('viewportHeight'));
    });
    it('Should visit google homepage homepage', () => {
        const url = Cypress.env('baseUrl')
        cy.visit(url)
    });
});