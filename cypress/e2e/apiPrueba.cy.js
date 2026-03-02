describe("Prueba de API", () => {
    it("Debe responder con status 200", () => {
        cy.request("https://jsonplaceholder.typicode.com/posts/1").its("status").should("equal", 200)
    })

    it("Validar el GET de la lista de usuarios", () => {
        cy.request("https://jsonplaceholder.typicode.com/users").then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.length(10)
            expect(response.body[0]).to.have.property("name", "Leanne Graham")
        })
    })
})