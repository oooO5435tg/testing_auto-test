describe('Response Test',() => {
    it ('Response test',() => {
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

        cy.log('Переxод на Вакансии')
        cy.get(':nth-child(1) > .header__nav > [href="/vacancies"]').click()

        cy.log('Ввод в поле поиска')
        cy.get('input[class="form-input--text form-input search-input__field"]').type(data.vacancy_search)
        cy.get('div.search-input__field > .button').click()

        cy.log('Клик по кнопке выбора(з/п)')
        cy.get(':nth-child(3) > .radio-component__label').click()

        cy.log('Клик по кнопке выбора(график работы)')
        cy.get(':nth-child(3) > :nth-child(2) > .form-select__selected').click()
        cy.get('.form-select__items > :nth-child(2)').click()

        cy.log('Клик по кнопке выбора(тип занятости)')
        cy.get(':nth-child(4) > :nth-child(2) > .form-select__selected').click()
        cy.get('.form-select__items > :nth-child(2)').click()
        })
    })
})