describe('Forget password', function () {
    it('Changes new password and logs in with it ', function () {
        const new_password = 'kishore'
        cy.visit('http://34.82.144.123')
        cy.contains('credify')
        cy.contains('Forgot Password').click()
        cy.get('input[name="Email"]').type('akishore@virtusa.com')
        cy.get('input[name="Password"]').type(new_password)
        cy.get('input[name="ConfirmPassword"]').type(new_password)
        cy.contains('Submit').click()

        cy.wait(2000)

        //login check with new password
        cy.get('input:first').type('akishore@virtusa.com')
        cy.get('input:Password').type(new_password)
        cy.contains('Sign In').click()
    
        //cy.contains('Note app, Department of Computer Science, University of Helsinki 2021')
    })
})
