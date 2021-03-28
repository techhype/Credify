describe('user Registration', function() {
  it('New User can be registered', function() {
    cy.visit('http://34.82.144.123')
    cy.contains('credify')
    cy.contains('Create Account').click()
    //change emp id while testing
    cy.get('input:first').type(8092221)
    cy.get('input[name="Name"]').type('vasanth J')
    cy.get('input[name="Email"]').type('ee@virtusa.com')
    cy.get('input[name="Password"]').type('vasanth')
    cy.contains('Register').click()
  })
})
