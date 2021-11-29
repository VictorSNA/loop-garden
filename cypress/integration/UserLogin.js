/// <reference types="cypress" />

describe('Users login into application', () => {
  it('creates successfully', () => {
    cy.visit('/')

    cy.get('[data-testid=email-login-input]')
      .should('be.visible')
      .type('test@example.com')

    cy.get('[data-testid=password-login-input]')
      .should('be.visible')
      .type('pass123456')

    cy.get('[data-testID=button-login]')
      .click()

    cy.contains('Bem vindo de volta!')
      .should('be.visible')

    cy.contains('Ver lista de hortas')
      .should('be.visible')

    cy.contains('Perfil do usuário')
      .should('be.visible')
  })
})
