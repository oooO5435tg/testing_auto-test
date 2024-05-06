describe('Internship Test',() => {
    it ('Internship test',() => {
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

        cy.log('Переxод на Стажировки')
        cy.get(':nth-child(1) > .header__nav > [href="/internships"]').click()
        cy.wait(1500)
        
        cy.log('Отклик на стажировку')
        cy.get(':nth-child(2) > .vacancy-item__info-wrapper > .vacancy-item__footer-wrapper > .vacancy-footer > .vacancy-footer__button-wrapper > .button__background-color-green').click()
        })
    })
})