describe('get method', () =>{
    it('Tag name', () =>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        //cy.get('button') //Tag name 
        cy.get('#leftPanel') //Id
        cy.get('.input') //class name
        cy.get('[name="username"]') //attribute value //every thing in a css is attribute ex: id,name,placeholder,class and some more 
      //  ct.get('[class="login"]') // class value
        cy.get('input[class="input"]') //tag name and attribute value
        cy.get('input[type="password"][name="password"]') //tag name and multible attributes
 
    })
})