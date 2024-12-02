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
  
    // Add a new task
    cy.get('[data-testid="task-input"]').type(taskText);
    cy.get('[data-testid="add-task-btn"]').click();
  
    // Verify the task appears in the list
    cy.get('[data-testid="task-list"]').should('contain', taskText);
    cy.get('[data-testid="task-list"]').then(($list) => {
        console.log('Current tasks:', $list.text());
    });
    cy.wait(500); // Wait for the task to be rendered
  
    // Delete the task
    cy.get('[data-testid^="delete-btn-"]').first().click();
  
    // Ensure the task is not in the DOM anymore
    cy.get(`[data-testid^="task-text-"]`).contains(taskText).should('not.exist');
    cy.wait(500); // Wait for the DOM to update
    cy.get('[data-testid="task-list"]').then(($list) => {
        console.log('Tasks after deletion:', $list.text());
    });
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
  
    // Ensure task input exists
    cy.get('[data-testid="task-input"]', { timeout: 10000 }).should('be.visible').type(completedTaskText);
    cy.get('[data-testid="add-task-btn"]').click();
  
    // Mark as completed
    cy.get('[data-testid^="checkbox-"]').first().click();
  
    // Add an active task
    cy.get('[data-testid="task-input"]').type(activeTaskText);
    cy.get('[data-testid="add-task-btn"]').click();
  
    // Filter by active tasks
    cy.get('[data-testid="filter-active"]').click();
  
    // Verify only the active task is displayed
    cy.get('[data-testid="task-list"]').should('contain', activeTaskText);
    cy.get('[data-testid="task-list"]').should('not.contain', completedTaskText);
  });  
});
