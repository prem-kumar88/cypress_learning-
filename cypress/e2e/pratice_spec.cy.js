describe('OrangeHRM', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.url().should('contain', 'orangehrmlive');
      cy.get("input[placeholder='Username']").type(Cypress.env('uname'));
      cy.get("input[placeholder='Password']").type(Cypress.env('pass'));
      cy.get("button[type='submit']").click();
    });
  
    it('test case 1: Verify Dashboard and Checkbox', () => {
      cy.get('[alt="client brand banner"]').should('be.visible');
      cy.title().should('eq', 'OrangeHRM');
      cy.title().should('contain', 'HRM');
      cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard');
  
      // Use more specific selector if possible
      cy.get('#dashboard-checkbox-id') // Replace with actual ID
        .scrollIntoView()
        .check({ force: true }); // Ensure the checkbox is in view and check it
    });
  
    it('Test Case 2: Verify Visibility of Pie Chart and Checkbox', () => {
      cy.get('[class="oxd-pie-chart"]').scrollIntoView({ duration: 2000 });
      cy.get('[class="oxd-pie-chart"]').should('be.visible');
  
      // Use more specific selector if possible
      cy.get('#pie-chart-checkbox-id') // Replace with actual ID
        .scrollIntoView()
        .check({ force: true });
    });
  
    it('Test Case 3: Navigate to Admin and Verify Checkbox', () => {
      cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
      cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should('have.text', 'Admin');
  
      // Use more specific selector if possible
      cy.get('#admin-checkbox-id') // Replace with actual ID
        .scrollIntoView()
        .check({ force: true });
    });
  
    it('Test Case 4: Apply Leave and Verify Checkbox', () => {
      cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click();
      cy.get("header[class='oxd-topbar'] li:nth-child(1) a:nth-child(1)").click();
      cy.get("header[class='oxd-topbar'] li:nth-child(1) a:nth-child(1)").should('have.text', 'Apply');
  
      // Use more specific selector if possible
      cy.get('#apply-leave-checkbox-id') // Replace with actual ID
        .scrollIntoView()
        .check({ force: true });
    });
  
    it('Test Case 5: Verify Leave Menu Item and Checkbox', () => {
      cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click();
      cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').should('have.text', 'Leave');
  
      // Use more specific selector if possible
      cy.get('#leave-checkbox-id') // Replace with actual ID
        .scrollIntoView()
        .check({ force: true });
    });
  });