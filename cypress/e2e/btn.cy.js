describe("Prueba de botones", () => {
    it("Debe hacer clic en el boton", () => {
        cy.visit("https://example.cypress.io")
        cy.contains("type").click()
    })
})