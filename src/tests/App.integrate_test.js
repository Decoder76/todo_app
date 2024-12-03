import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";

test("adds a new task and displays it in the list", async () => {
  render(<App />);

  // Add a task
  const input = screen.getByPlaceholderText("Enter a task");
  const addButton = screen.getByText("Add Task");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(addButton);

  // Verify the task is added and displayed
  const tasks = await screen.findAllByText("New Task");
  expect(tasks.length).toBeGreaterThan(0);
  expect(tasks[0]).toBeInTheDocument();

  // Verify the task is part of the list
  const list = screen.getByRole("list"); // Assuming <ul> or <ol> is used for tasks
  expect(list).toContainElement(tasks[0]);
});

test('deletes a task from the list', async () => {
  render(<App />);

  // Add a task
  const input = screen.getByPlaceholderText('Enter a task');
  const addButton = screen.getByTestId('add-task-btn');
  fireEvent.change(input, { target: { value: 'Task to Delete' } });
  fireEvent.click(addButton);

  // Retrieve the delete button's `data-testid`
  const task = await screen.findByText('Task to Delete');
  const taskItem = task.closest('li'); // Get the parent list item
  const deleteButton = taskItem.querySelector('button[data-testid^="delete-btn"]');

  // Click delete
  fireEvent.click(deleteButton);

  // Ensure task is removed
  await waitFor(() => {
    expect(screen.queryByText('Task to Delete')).not.toBeInTheDocument();
  });
});
