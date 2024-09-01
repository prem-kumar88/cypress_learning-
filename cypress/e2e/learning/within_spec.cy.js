describe('within command', () =>{
    it('within command', ()=> { 
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('button')
        cy.get('#open-window-example-div').within( () => {
            cy.get('button')
        }).should('have.id','open-window-example-div')
    })
})