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

        cy.log('Ввод в поле поиска')
        cy.get('input[class="form-input--text form-input search-input__field"]').type(data.internship_search)
        cy.get('div.search-input__field > .button').click()

        cy.log('Клик по кнопке выбора(з/п)')
        cy.get(':nth-child(2) > .radio-component__label').click()

        cy.log('Клик по кнопке выбора(тип занятости)')
        cy.get('.form-select__selected').click()
        cy.get('.form-select__items > :nth-child(1)').click()
        })
    })
})