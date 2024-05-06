describe('Auth Test',() => {
    it('Login fail test',() => {
        cy.fixture('Authorization').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.login_url)
            cy.log('Ввод существующего логина')
            cy.get(".form-input--text").type(data.login_Student)
            cy.log('Ввод несуществующего пароля')
            cy.get(".form-input--password").type(data.none_existent_password_Student)
            cy.log('Клик по кнопке Войти')
            cy.get(":nth-child(3) > .button").click()
        })
    });
})