describe('Credify app', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('credify')
    cy.contains('Sign in to your account')
  })
})