/// <reference types="cypress" />
describe('Estudo', () => {  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});
    it('Pagina de cadastro', ()=> {
        cy.visit('https://cliente.submarino.com.br/minha-conta/cadastro?next=https%3A%2F%2Fwww.submarino.com.br%2F%3Futm_medium%3Dafiliados%26utm_source%3Dafilio%26utm_campaign%3Dmarca%3Ashop%3Bmidia%3Aafiliados%3Bformato%3A00%3Bsubformato%3A00%3Bidcampanha%3Aafilio%3Bfranq%3A64088%26utm_content%3D30699124%26epar%3Dafilio%26opn%3DAFLNOVOSUB%26franq%3D64088%26affid%3D76746%26siteid%3D64088%26banid%3D4495267')
        cy.get('[data-cy="formField__name"]').type('Digital innovacion') //Nome completo
        cy.get('[data-cy="labelFor__F"] > .sc-hjGYWY > .sc-gUQueJ').click()//genero
        cy.get('[data-cy="formField__birthDate"]').type('30091998')//data de nascimento
        cy.get('[data-cy="formField__cpf"]').type('38026799038')//cpf
        cy.get('[data-cy="formField__phone"]').type('61992461523')//telefone
        cy.get('[data-cy="formField__whatsappNotifications"]').click()//Receber notificacao no whatsapp
        cy.get('[data-cy="formField__cellphone"]').type('61998513612')//celular
        cy.get('[data-cy="formField__email"]').type('teste3214@gmail.com')//email
        cy.get('[data-cy="formField__promotionalEmails"]').click()//Receber emails 
        cy.get('[data-cy="formField__password"]').type('testando321')//senha 
        cy.get('[data-cy="signup-submit"]').click()//criar cadastro

    })
});

