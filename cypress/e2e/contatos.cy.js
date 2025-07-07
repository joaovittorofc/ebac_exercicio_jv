describe('Agenda de Contatos', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Inclui um contato', () => {
    cy.get('input[placeholder="Nome"]').type('João Teste')
    cy.get('input[placeholder="E-mail"]').type('joao@email.com')
    cy.get('input[placeholder="Telefone"]').type('99999-9999')
    cy.contains('Adicionar').click()

    cy.contains('João Teste').should('exist')
    cy.contains('joao@email.com').should('exist')
    cy.contains('99999-9999').should('exist')
  })

  it('Remove um contato', () => {
    // Primeiro, adiciona um contato
    cy.get('input[placeholder="Nome"]').type('Contato Remover')
    cy.get('input[placeholder="E-mail"]').type('remover@email.com')
    cy.get('input[placeholder="Telefone"]').type('88888-8888')
    cy.contains('Adicionar').click()

    // Verifica se foi adicionado
    cy.contains('Contato Remover').should('exist')

    // Clica no botão de remover (assumindo que seja um botão com texto "Remover")
    cy.contains('Contato Remover')
      .parent()
      .find('button')
      .contains('Remover')
      .click()

    // Verifica se foi removido
    cy.contains('Contato Remover').should('not.exist')
  })
})

