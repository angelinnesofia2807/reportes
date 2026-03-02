describe("Prueba de formulario", () => {
    it("Debe diligenciar formulario", () => {
        cy.visit("https://example.cypress.io/commands/actions")

        cy.get("#email1").type("prueba@correo.com")
        cy.get("#password1").type("123456")
        cy.get(".action-form").submit()
    })
})