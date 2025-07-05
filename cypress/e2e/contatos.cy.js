describe('Agenda de Contatos', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Inclui um contato', () => {
    cy.get('input[name="name"]').type('Maria');
    cy.get('input[name="email"]').type('maria@teste.com');
    cy.contains('button', 'Salvar').click();
    cy.contains('Maria').should('exist');
    cy.contains('maria@teste.com').should('exist');
  });

  it('Altera um contato', () => {
    cy.contains('Maria').parent().contains('Editar').click();
    cy.get('input[name="name"]').clear().type('Maria Silva');
    cy.contains('Salvar').click();
    cy.contains('Maria Silva').should('exist');
  });

  it('Remove um contato', () => {
    cy.contains('Maria Silva').parent().contains('Excluir').click();
    cy.contains('Maria Silva').should('not.exist');
  });
});