describe('Agenda de Contatos', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Inclui um contato', () => {
    cy.get('input[placeholder="Nome"]').type('João Teste');
    cy.get('input[placeholder="E-mail"]').type('joao@email.com');
    cy.get('input[placeholder="Telefone"]').type('99999-9999');
    cy.contains('Adicionar').click();

    cy.contains('João Teste').should('exist');
    cy.contains('joao@email.com').should('exist');
    cy.contains('99999-9999').should('exist');
  });

  it('Remove um contato', () => {
    cy.get('input[placeholder="Nome"]').type('Contato Remover');
    cy.get('input[placeholder="E-mail"]').type('remover@email.com');
    cy.get('input[placeholder="Telefone"]').type('88888-8888');
    cy.contains('Adicionar').click();

    cy.contains('Contato Remover').should('exist');

    // localiza a linha ou item onde o nome está e, dentro dela, procura o botão Remover
    cy.contains('Contato Remover')
      .closest('li, tr')
      .within(() => {
        cy.contains('button', 'Remover').click();
      });

    cy.contains('Contato Remover').should('not.exist');
  });

  it('Edita um contato', () => {
    cy.get('input[placeholder="Nome"]').type('Contato Editar');
    cy.get('input[placeholder="E-mail"]').type('editar@email.com');
    cy.get('input[placeholder="Telefone"]').type('77777-7777');
    cy.contains('Adicionar').click();

    cy.contains('Contato Editar').should('exist');

    // localiza a linha do contato e clica em Editar
    cy.contains('Contato Editar')
      .closest('li, tr')
      .within(() => {
        cy.contains('button', 'Editar').click();
      });

    // altera os dados no formulário
    cy.get('input[placeholder="Nome"]').clear().type('Contato Atualizado');
    cy.get('input[placeholder="E-mail"]').clear().type('atualizado@email.com');
    cy.get('input[placeholder="Telefone"]').clear().type('11111-1111');

    // confirma a edição
    cy.contains('Salvar').click();

    cy.contains('Contato Atualizado').should('exist');
    cy.contains('atualizado@email.com').should('exist');
    cy.contains('11111-1111').should('exist');
  });
});


