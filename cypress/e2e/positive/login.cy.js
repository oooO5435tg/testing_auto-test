describe('Auth Test',() => {
    it('Login test',() => {
        cy.fixture('Total').then(data => {
            cy.log('Переход на страницу авторизации')
            cy.visit(data.login_url)
            cy.log('Ввод существующего логина')
            cy.get(".form-input--text").type(data.login_Student)
            cy.log('Ввод существующего пароля')
            cy.get(".form-input--password").type(data.password)
            cy.log('Клик по кнопке Войти')
            cy.get(":nth-child(3) > .button").click()
        })
    });
})