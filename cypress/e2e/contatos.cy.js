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
    cy.get('input[placeholder="Nome"]').type('Contato Remover')
    cy.get('input[placeholder="E-mail"]').type('remover@email.com')
    cy.get('input[placeholder="Telefone"]').type('88888-8888')
    cy.contains('Adicionar').click()

    cy.contains('Contato Remover').should('exist')

    cy.contains('Contato Remover')
      .parent()
      .find('button')
      .contains('Remover')
      .click()

    cy.contains('Contato Remover').should('not.exist')
  })

  it('Edita um contato', () => {
    cy.get('input[placeholder="Nome"]').type('Contato Editar')
    cy.get('input[placeholder="E-mail"]').type('editar@email.com')
    cy.get('input[placeholder="Telefone"]').type('77777-7777')
    cy.contains('Adicionar').click()

    cy.contains('Contato Editar').should('exist')

    // Clica no botão de editar (assumindo que seja um botão com texto "Editar")
    cy.contains('Contato Editar')
      .parent()
      .find('button')
      .contains('Editar')
      .click()

    // Altera os dados no formulário
    cy.get('input[placeholder="Nome"]').clear().type('Contato Atualizado')
    cy.get('input[placeholder="E-mail"]').clear().type('atualizado@email.com')
    cy.get('input[placeholder="Telefone"]').clear().type('11111-1111')

    // Confirma a edição (o botão muda de texto para "Salvar")
    cy.contains('Salvar').click()

    // Verifica se os dados atualizados aparecem
    cy.contains('Contato Atualizado').should('exist')
    cy.contains('atualizado@email.com').should('exist')
    cy.contains('11111-1111').should('exist')
  })
})

