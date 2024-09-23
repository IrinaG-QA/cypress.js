 describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');

         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();

         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('Проверка востановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('irina@yandex.ru')
        cy.get('#restoreEmailButton').click()

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio117');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        
        cy.get('#mail').type('german11@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/');
        
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
 
    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();

        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
 })
 
 
// Напиши проверку на позитивный кейс авторизации:
// а) найти поле пароль и Ввести правильный логин
//  б) Найти кнопку пароль и Ввести правильный пароль
// в) найти кнопку войти и нажать на нее
// г) Проверить, что авторизация успешная
//  Найти кнопку крестик 
// german@dolnikov.ru / iLoveqastudio1