describe('Register Test',() => {
    it ('Registration test',() => {
        cy.fixture('Registration').then(data => {
            cy.log('Переxод на страницу регистрации')
            cy.visit(data.register_url)
            cy.log('Ввод логина')
            cy.get(':nth-child(1) > :nth-child(1) > .form-control--medium > .form-input--text').type(data.login_register)
            cy.log('Ввод email')
            cy.get('.form-input--email').type(data.email_register)
            cy.log('Ввод пароля')
            cy.get(':nth-child(3) > .form-control--medium > .form-input--password').type(data.password_inv_num_char_register)
            cy.log('Ввод пароля')
            cy.get(':nth-child(4) > .form-control--medium > .form-input--password').type(data.password_again_inv_num_char_register)
        })
    })
})