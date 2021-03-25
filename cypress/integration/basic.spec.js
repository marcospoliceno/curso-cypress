/// <reference types="cypress"/>


describe('Cypress basics', () => {
    it.only('Visitando primeira pagina e criando assert titulo', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        
        cy.pause()
        // const title = cy.title()
        // console.log(title)

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')


    }),

        it('Primeiro interação com  um elemento botão', () => {
            cy.visit('https://www.wcaquino.me/cypress/componentes.html')
            cy.get('#buttonSimple')
                .click()
                .should('have.value', 'Obrigado!')

        })

})