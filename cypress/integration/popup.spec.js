/// <reference types="cypress" />

const { should } = require("chai")


describe('work whith POP UP', () => {
    it('Deve testar frame diretamente ', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
    })
    it('Deve verificar se o popup foi invocado', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.window().then(win => {
            cy.stub(win, 'open').as('winOpen')
        })
        cy.get('#buttonPopUp').click()
        cy.get('@winOpen').should('be.called')
    })

    describe.only('With Links...', () => {
        beforeEach(() => {
            cy.visit('https://wcaquino.me/cypress/componentes.html')
        })

        it('Check popUp url', () => {
            cy.contains('Popup2')
                .should('have.prop', 'href')
                .and('equal', 'https://wcaquino.me/cypress/frame.html')
        })
        it('Should access popup dinamically', () => {
            cy.contains('Popup2').then($a => {
                const href = $a.prop('href')
                cy.visit(href)
                cy.get('#tfield').type('funciona')
            })
        })
        it('Should force link on some page', () => {
            cy.contains('Popup2')
                .invoke('removeAttr', 'target')
                .click()
                cy.get('#tfield').type('funciona')
        })
    })
})
     // cy.wrap(body).find('#otherButton').click()