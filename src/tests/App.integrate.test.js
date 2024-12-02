import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

test('adds a new task and displays it in the list', async () => {
  render(<App />);

  // Add a task
  const input = screen.getByPlaceholderText('Enter a task');
  const addButton = screen.getByText('Add Task');

  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(addButton);

  // Verify the task is added and displayed
  const tasks = await screen.findAllByText('New Task');
  expect(tasks.length).toBeGreaterThan(0);
  expect(tasks[0]).toBeInTheDocument();

  // Verify the task is part of the list
  const list = screen.getByRole('list'); // Assuming <ul> or <ol> is used for tasks
  expect(list).toContainElement(tasks[0]);
});


test('deletes a task from the list', async () => {
  render(<App />);

  const input = screen.getByPlaceholderText('Enter a task');
  const addButton = screen.getByText('Add Task');

  // Add a task and retrieve its data-testid
  fireEvent.change(input, { target: { value: 'Task to Delete' } });
  fireEvent.click(addButton);

  const tasks = await screen.findAllByText('Task to Delete');
  expect(tasks.length).toBeGreaterThan(0);

  // Use the first task's `data-testid`
  const taskToDeleteTestId = tasks[0].parentElement.querySelector('span').getAttribute('data-testid');
  const deleteButtonTestId = `delete-btn-${taskToDeleteTestId.split('-')[1]}`;

  // Delete the task
  const deleteButton = screen.getByTestId(deleteButtonTestId);
  fireEvent.click(deleteButton);

  // Ensure the task is removed
  await waitFor(() => {
    expect(screen.queryByTestId(taskToDeleteTestId)).not.toBeInTheDocument();
  });
});

