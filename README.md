# curso-cypress
https://www.udemy.com/share/102gwkAkofcFdQRHQ=/

- npm install cypress

- npm run open



   it('Should force link on some page', () => {
            cy.contains('Popup2')
                .invoke('removeAttr', 'target')
                .click()
                cy.get('#tfield').type('funciona')
        })