describe('Note app', function() {
  it('front page can be opened', function() {
      cy.visit('http://34.122.145.124')
    cy.contains('credify')
    
    cy.get('input:first').type('credifyadmin@virtusa.com')
    cy.get('input:Password').type('credifyadmin')
    cy.contains('Sign In').click()
    //cy.contains('Note app, Department of Computer Science, University of Helsinki 2021')
  })
})
