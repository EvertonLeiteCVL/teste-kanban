describe('Fluxo principal do Kanban', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Cria uma nova tarefa', () => {
    cy.contains('+ Add task').click();
    cy.get('input[name="title"]').type('Teste de tarefa');
    cy.get('textarea[name="description"]').type('Descrição da tarefa');
    cy.contains('Save').click();
    cy.contains('Teste de tarefa').should('exist');
  });

  it('Edita a tarefa', () => {
    cy.contains('Teste de tarefa').click();
    cy.get('input[name="title"]').clear().type('Tarefa editada');
    cy.contains('Save').click();
    cy.contains('Tarefa editada').should('exist');
  });

  it('Exclui a tarefa', () => {
    cy.contains('Tarefa editada').click();
    cy.contains('Delete').click();
    cy.contains('Tarefa editada').should('not.exist');
  });
});
