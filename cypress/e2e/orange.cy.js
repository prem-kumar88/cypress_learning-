describe('oranghrm',()=>{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
    })
  
    it('test case 1',()=>{
        cy.get('[alt="client brand banner"]').should('be.visible')
        cy.title().should('eq','OrangeHRM')
        cy.title().should('contain','HRM') 
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard') 
    })
    it('test case 2',()=>{
        cy.get('[class="oxd-pie-chart"]').scrollIntoView({duration:2000})
        cy.get('[class="oxd-pie-chart"]').should('be.visible')   
        
    })
    it('test case 3',()=>{
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should('have.text','Admin') 
         
    })
    it('test case 4',()=>{
        cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click()
        cy.get("header[class='oxd-topbar'] li:nth-child(1) a:nth-child(1)").click()
        cy.get("header[class='oxd-topbar'] li:nth-child(1) a:nth-child(1)").should('have.text','Apply')
    
    })
    it('test case 5',()=>{
        cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click()
        cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').should('have.text','Leave')
           
    })
    
})