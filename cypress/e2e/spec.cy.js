describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')

    expect(true).to.equal(true)
    cy.contains("type").click()
  })
})