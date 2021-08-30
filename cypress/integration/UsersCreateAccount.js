/// <reference types="cypress" />


describe('Users create an account', () => {
  it('creates successfully', () => {
    cy.visit('/')
    cy.get('[data-testid=cadastrar]').click()

    cy.get('[data-testid=email]')
      .should('be.visible')
      .type('test@example.com')

    cy.get('[data-testid=senha]')
      .should('be.visible')
      .type('pass123456')

    cy.get('[data-testid=cadastrar-confirmar]')
      .click()

    cy.contains('Usuário criado com sucesso')
      .should('be.visible')
  })

  it('does not creates when email is taken', () => {
    cy.visit('/')
    cy.get('[data-testid=cadastrar]').click()

    cy.get('[data-testid=email]')
      .should('be.visible')
      .type('test@example.com')

    cy.get('[data-testid=senha]')
      .should('be.visible')
      .type('pass123456')

    cy.get('[data-testid=cadastrar-confirmar]')
      .click()

    cy.contains('E-mail já está em uso')
      .should('be.visible')
  })
})
