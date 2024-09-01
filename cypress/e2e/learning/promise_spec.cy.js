describe('promise handling', () => {
    it('prmise handling', () => {
        cy.visit('https://www.letskodeit.com/practice')

        cy.get('button')


        cy.get('#open-window-example-div')

        cy.get('#name').then( () => {
            console.log(' hi chaitu')
        })

        cy.get('#opentab')

          //javsaScript command exect after  command, other wish the javaScript command exect first

    })
})