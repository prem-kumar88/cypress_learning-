describe('find command', () => {
    it('find command', () => {
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('button')
        cy.get('#open-window-example-div').within( () => {
            cy.get('button')//click()
        }).should('have.id','open-window-example-div')
        cy.get('#open-window-example-div').find('button').should('contain','Open Window')//.click()
        cy.get('#open-window-example-div').find('button',{log :true}).click() //ues flase also but the result is undefind
        cy.get('#open-window-example-div').find('button',{timeout : 12000})
                      //we are ues click() all the line to find
    })
    
})