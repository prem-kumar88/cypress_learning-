describe('chain command demo', () =>{
    it('learn chain command', () =>{
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('button').eq(1).should('contain','Open Window')
        cy.get('#openwindow').should('be.visible').and('contains','Open Wondow')

    })
})