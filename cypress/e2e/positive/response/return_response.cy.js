describe('Response Test',() => {
    it ('Response test',() => {
        cy.fixture('Total').then(data => {
          cy.log('Переxод на страницу авторизации')
          cy.visit(data.login_url)
          cy.log('Ввод логина')
          cy.get('input[class="form-input--text form-input"]').type(data.login_Employer)
          cy.log('Ввод пароля')
          cy.get('input[class="form-input--password form-input"]').type(data.password)
          cy.log('Клик по кнопке Войти')
          cy.get('div[class="login-form__button"] button[type="submit"]').click()
          cy.wait(1500)

          cy.log('Заходим в Отклики')
          cy.get(':nth-child(5) > .menu-item__item-name').click()
          cy.log('Нажимаем на кнопку отклонения')
          cy.get(':nth-child(1) > .responses-list-item__actions > :nth-child(2)').click()
      })
    })
})