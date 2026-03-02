describe("Prueba de de titulo", () => {
    it("Verificar titulo", () => {
        cy.visit("https://example.cypress.io")
        cy.title().should("include", "Cypress")
    })
})