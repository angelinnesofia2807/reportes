describe('Cypress Ejercicios', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io')
    })

    it('Ejercicio 1 – Nivel básico', () => {
        cy.contains('Kitchen Sink').should('be.visible')
        cy.contains('type').should('exist')
    })

    it('Ejercicio 2 – Nivel medio', () => {
        cy.contains('type').click()
        cy.get('.action-email')
            .type('Kevin')
            .should('have.value', 'Kevin')
    })

    it('Ejercicio 3 – Nivel medio', () => {
        cy.get('.home-list').contains('Actions').click()
        cy.get('.well [type="checkbox"]')
            .check({ force: true })
            .should('be.checked')
    })

    it('Ejercicio 4 – Nivel avanzado', () => {
        cy.get('.home-list').contains('Actions').click()
        cy.get('#email1').type('prueba@ejemplo.com')
        cy.get('.action-form').within(() => {
            cy.get('[type="text"]').type('CUPON123')
            cy.root().submit()
        })

        cy.contains('Your form has been submitted!').should('be.visible')
    })

    it('Ejercicio 5 – Nivel avanzado', () => {
        cy.visit('https://example.cypress.io/commands/actions')
        cy.get('#email1').type('admin@test.com')
        cy.get('#password1').type('password123')
        cy.get('.action-form').submit()
        cy.contains('Your form has been submitted!').should('be.visible')

        cy.contains('Querying').click({ force: true })
        cy.url().should('include', '/commands/querying')

        cy.get('.navbar-brand').click()

        cy.url().should('eq', 'https://example.cypress.io/')
        cy.contains('Kitchen Sink').should('be.visible')
    })



})