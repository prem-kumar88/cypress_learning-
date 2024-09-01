
/*describe('template spec', () => {
    it('passes', () => {
      cy.visit('www.amazon.in')
      // assertions
      // expect(true).to.equal(true)
      cy.get('#twotabsearchtextbox').type('macbooks')
      cy.get('#nav-search-submit-button').click()
    })
  })
  */

    describe('LinkedIn Premium Login Test', () => {
      it('should login to LinkedIn Premium with valid credentials', () => {
        // Visit LinkedIn login page
        cy.visit('https://www.linkedin.com/login');
    
        // Enter email/username
        cy.get('#username').type(Cypress.env('maddalapremkumar'));
    
        // Enter password
        cy.get('#password').type(Cypress.env('LINKEDIN_PASSWORD'));
    
        // Click the Sign-In button
        cy.get('.btn__primary--large').click();
    
        // Verify successful login by checking for the presence of the Premium badge or redirect to the Premium page
        cy.url().should('include', '/feed');
        cy.get('.global-nav__me-photo').should('be.visible'); // Avatar should be visible after login
    
        // Optionally navigate to the LinkedIn Premium page
        cy.visit('https://www.linkedin.com/premium/');
        cy.url().should('include', '/premium');
      
    
   })
 })