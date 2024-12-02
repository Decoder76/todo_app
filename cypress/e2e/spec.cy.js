/* eslint-disable no-undef */
describe('To-Do List App', () => {
  beforeEach(() => {
    // Visit the app before each test
    cy.visit('http://localhost:3000'); // Replace with the actual app URL
  });

  it('should add a new task', () => {
    const taskText = 'Learn Cypress';

    // Add a new task
    cy.get('input[type="text"]').type(taskText);
    cy.get('button[type="submit"]').click();

    // Verify the task appears in the task list
    // cy.get('[data-testid="task-list"]').should('contain', taskText);
    cy.get('[data-testid="task-list"]').should('exist').and('contain', taskText);

  });

  it('should delete a task', () => {
    const taskText = 'Learn Cypress';

    // Add a new task first
    cy.get('input[type="text"]').type(taskText);
    cy.get('button[type="submit"]').click();

    // Delete the task
    cy.get('[data-testid^="delete-btn-"]').first().click();

    // Verify the task is removed from the list
    cy.get('[data-testid="task-list"]').should('not.contain', taskText);
  });

  it('should toggle task completion', () => {
    const taskText = 'Learn Cypress';

    // Add a new task
    cy.get('input[type="text"]').type(taskText);
    cy.get('button[type="submit"]').click();

    // Mark the task as completed
    cy.get('[data-testid^="checkbox-"]').first().click();

    // Verify the task is marked as completed (strikethrough)
    cy.get('[data-testid^="task-text-"]').first().should('have.css', 'text-decoration-line', 'line-through');

    // Un-mark the task as completed
    cy.get('[data-testid^="checkbox-"]').first().click();

    // Verify the task is no longer completed
    cy.get('[data-testid^="task-text-"]').first().should('not.have.css', 'text-decoration-line', 'line-through');
  });

  it('should filter tasks by "All"', () => {
    const taskText = 'Learn Cypress';

    // Add a new task
    cy.get('input[type="text"]').type(taskText);
    cy.get('button[type="submit"]').click();

    // Ensure the task is displayed in the "All" filter
    cy.get('button').contains('All').click();
    cy.get('[data-testid="task-list"]').should('contain', taskText);
  });

  it('should filter tasks by "Completed"', () => {
    const taskText = 'Learn Cypress';

    // Add a new task and mark it as completed
    cy.get('input[type="text"]').type(taskText);
    cy.get('button[type="submit"]').click();
    cy.get('[data-testid^="checkbox-"]').first().click();

    // Filter by completed tasks
    cy.get('button').contains('Completed').click();

    // Verify the task is displayed in the "Completed" filter
    cy.get('[data-testid="task-list"]').should('contain', taskText);

    // Verify no uncompleted tasks are displayed
    cy.get('[data-testid^="checkbox-"]').each(($checkbox) => {
      cy.wrap($checkbox).should('be.checked');
    });
  });

  it('should filter tasks by "Active"', () => {
    const completedTaskText = 'Completed Task';
    const activeTaskText = 'Active Task';

    // Add a completed task
    cy.get('input[type="text"]').type(completedTaskText);
    cy.get('button[type="submit"]').click();
    cy.get('[data-testid^="checkbox-"]').first().click(); // Mark as completed

    // Add an active task
    // eslint-disable-next-line no-undef
    cy.get('input[type="text"]').type(activeTaskText);
    // eslint-disable-next-line no-undef
    cy.get('button[type="submit"]').click();

    // Filter by active tasks
    cy.get('button').contains('Active').click();

    // Verify only the active task is displayed
    cy.get('[data-testid="task-list"]').should('contain', activeTaskText);
    cy.get('[data-testid="task-list"]').should('not.contain', completedTaskText);
  });
});
