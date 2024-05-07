describe('Notifications Test',() => {
    it ('Notifications test',() => {
        cy.fixture('Total').then(data => {
        cy.log('Переxод на страницу авторизации')
        cy.visit(data.login_url)
        cy.log('Ввод логина')
        cy.get('input[class="form-input--text form-input"]').type(data.login_Student)
        cy.log('Ввод пароля')
        cy.get('input[class="form-input--password form-input"]').type(data.password)
        cy.log('Клик по кнопке Войти')
        cy.get('div[class="login-form__button"] button[type="submit"]').click()
        cy.wait(1500)

        cy.get('.header__nav > [href="/notification"]').click()
        cy.log('Переxод на уведомления')
        cy.wait(1500)
        // cy.log('Чтение всех уведомления')
        // cy.get('.router-link-active > .header__label').click()
        cy.log('Переход на определенное уведомление')
        cy.get(':nth-child(1) > .notification-list-item > .button').click()
        })
    })
})