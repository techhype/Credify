describe('Note app', function () {
  it('front page can be opened', function () {
    cy.visit('https://credify.tk')
    cy.contains('credify')

    cy.get('input:first').type('credifyadmin@gmail.com')
    cy.get('input:Password').type('credifyadmin')
    cy.contains('Sign In').click()
    cy.contains('Non_field_errors : Unable to log in with provided credentials.')
    //cy.contains('Note app, Department of Computer Science, University of Helsinki 2021')
  })
})
