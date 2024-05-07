describe('Edit user info Test',() => {
    it ('Edit user info test',() => {
        cy.fixture('Total').then(data => {
          cy.log('Переxод на страницу автозации')
          cy.visit(data.login_url)
          cy.log('Ввод логина')
          cy.get('input[class="form-input--text form-input"]').type(data.login_Student)
          cy.log('Ввод пароля')
          cy.get('input[class="form-input--password form-input"]').type(data.password)
          cy.log('Клик по кнопке "Войти')
          cy.get('div[class="login-form__button"] button[type="submit"]').click()
          cy.wait(1500)

          cy.log('Заходим в раздел Профиль')
          cy.get(':nth-child(2) > .menu-item__item-name').click()
          cy.log('Меняем фамилию пользователю')
          cy.get(':nth-child(1) > :nth-child(1) > .form-control--max > .form-input--text').clear()
          cy.get(':nth-child(1) > :nth-child(1) > .form-control--max > .form-input--text').type(data.surname_edit)
          cy.log('Клик по кнопке Сохранить')
          cy.get('.form__buttons > .button').click()
      })
    })
})