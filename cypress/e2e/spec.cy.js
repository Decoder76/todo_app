describe('To-Do List App', () => {
  beforeEach(() => {
    // Visit the app before each test
    cy.visit('http://localhost:3000'); // Replace with the URL where your app is hosted
  });

  it('should add a new task', () => {
    const taskText = 'Learn Cypress';

    // Enter a new task into the input field and submit the form
    cy.get('input[type="text"]').type(taskText);
    cy.get('button[type="submit"]').click();

    // Check if the task appears in the task list
    cy.get('ul.task-list').should('contain', taskText);
  });

  it('should delete a task', () => {
    const taskText = 'Learn Cypress';
    
    // Add a new task first
    cy.get('input[type="text"]').type(taskText);
    cy.get('button[type="submit"]').click();

    // Delete the task
    cy.get('button[data-testid^="delete-btn-"]').first().click();

    // Check if the task is removed from the list
    cy.get('ul.task-list').should('not.contain', taskText);
  });

  it('should toggle task completion', () => {
    const taskText = 'Learn Cypress';
    
    // Add a new task first
    cy.get('input[type="text"]').type(taskText);
    cy.get('button[type="submit"]').click();

    // Mark the task as completed
    cy.get('input[type="checkbox"]').click();

    // Check if the task is marked as completed (strikethrough)
    cy.get('span').should('have.css', 'text-decoration-line', 'line-through');

    // Mark the task as uncompleted
    cy.get('input[type="checkbox"]').click();

    // Check if the task is not completed anymore (no strikethrough)
    cy.get('span').should('not.have.css', 'text-decoration-line', 'line-through');
  });

  it('should filter tasks by "All"', () => {
    const taskText = 'Learn Cypress';
    
    // Add a new task first
    cy.get('input[type="text"]').type(taskText);
    cy.get('button[type="submit"]').click();

    // Ensure the task is in the "All" filter by default
    cy.get('button').contains('All').click();
    cy.get('ul.task-list').should('contain', taskText);
  });

  it('should filter tasks by "Completed"', () => {
    const taskText = 'Learn Cypress';
    
    // Add a new task first
    cy.get('input[type="text"]').type(taskText);
    cy.get('button[type="submit"]').click();

    // Mark the task as completed
    cy.get('input[type="checkbox"]').click();

    // Filter by completed tasks
    cy.get('button').contains('Completed').click();
    cy.get('ul.task-list').should('contain', taskText);
  });

  it('should filter tasks by "Active"', () => {
    const taskText = 'Learn Cypress';
    
    // Add a new task first
    cy.get('input[type="text"]').type(taskText);
    cy.get('button[type="submit"]').click();

    // Filter by active tasks
    cy.get('button').contains('Active').click();
    cy.get('ul.task-list').should('contain', taskText);
  });
});
