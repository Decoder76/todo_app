describe('To-Do List E2E Tests', () => {
  it('should allow the user to add a new task and display it in the list', () => {
    cy.visit('http://localhost:3000'); // Visit the app
    cy.get('input[placeholder="Enter a task"]').type('New Task'); // Enter task text
    cy.contains('Add Task').click(); // Click add button
    cy.contains('New Task').should('exist'); // Verify task appears
  });

  it('should remove a task from the list', () => {
    cy.visit('http://localhost:3000');
    cy.get('input').type('Task to Delete');
    cy.contains('Add Task').click();
    cy.contains('Task to Delete').parent().find('button').contains('Delete').click();
    cy.contains('Task to Delete').should('not.exist');
  });

  it('should filter tasks based on their completion status', () => {
    cy.visit('http://localhost:3000');
    cy.get('input').type('Task 1{enter}');
    cy.get('input').type('Task 2{enter}');
    cy.get(':nth-child(1) input[type="checkbox"]').check(); // Mark Task 1 as complete
    cy.contains('Completed').click(); // Filter completed tasks
    cy.contains('Task 1').should('exist');
    cy.contains('Task 2').should('not.exist'); // Ensure Task 2 doesn't appear
  });
  
});
