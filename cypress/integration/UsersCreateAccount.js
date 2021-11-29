/// <reference types="cypress" />

describe('Users create an account', () => {
  it('creates successfully', () => {
    cy.visit('/')
    cy.get('[data-testID=cadastrar]').click()

    cy.get('[data-testid=email]')
      .should('be.visible')
      .type('test@example.com')

    cy.get('[data-testid=senha]')
      .should('be.visible')
      .type('pass123456')

    cy.get('[data-testID=cadastrar-confirmar]')
      .click()

    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Usuário criado com sucesso`)
    })
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

    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Email já está em uso`)
    })
  })
})
