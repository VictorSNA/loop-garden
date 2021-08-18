/// <reference types="cypress" />


describe('Users create an account', () => {
  it('creates successfully', () => {
    cy.visit('/')
    cy.get('[data-testid=cadastrar]').click()

    cy.get('[data-testid=name]')
      .should('be.visible')
      .type('Joao')

    cy.get('[data-testid=email]')
      .should('be.visible')
      .type('joao@fatec.gov.br')

    cy.get('[data-testid=senha]')
      .should('be.visible')
      .type('senha123456')

    cy.get('[data-testid=cadastrar-confirmar]')
      .click()

    cy.contains('Usuário criado com sucesso')
      .should('be.visible')
  })
})
