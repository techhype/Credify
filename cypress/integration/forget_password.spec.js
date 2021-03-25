describe('Forget password', function () {
    it('Changes new password and logs in with it ', function () {
        const new_password = 'vasi'
        cy.visit('http://35.232.17.192')
        cy.contains('credify')
        cy.contains('Forgot Password').click()
        cy.get('input[name="Email"]').type('vasanthl@virtusa.com')
        cy.get('input[name="Password"]').type(new_password)
        cy.get('input[name="ConfirmPassword"]').type(new_password)
        cy.contains('Submit').click()

        cy.wait(2000)

        //login check with new password
        cy.get('input:first').type('vasanthl@virtusa.com')
        cy.get('input:Password').type(new_password)
        cy.contains('Sign In').click()
    
        //cy.contains('Note app, Department of Computer Science, University of Helsinki 2021')
    })
})
