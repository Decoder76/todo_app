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

test("deletes a task from the list", async () => {
  render(<App />);

  const input = screen.getByPlaceholderText("Enter a task");
  const addButton = screen.getByText("Add Task");

  // Add a task
  fireEvent.change(input, { target: { value: "Task to Delete" } });
  fireEvent.click(addButton);

  // Verify the task is added
  const tasks = await screen.findAllByText("Task to Delete");
  expect(tasks.length).toBeGreaterThan(0);

  // Get the task's unique data-testid (based on timestamp)
  const taskDataTestId = tasks[0].parentElement.getAttribute("data-testid");

  // Check if taskDataTestId exists before accessing it
  if (taskDataTestId) {
    // Get the task's delete button using its unique data-testid
    const deleteButton = screen.getByTestId(
      `delete-btn-${taskDataTestId.split("-")[1]}`,
    );

    // Delete the task
    fireEvent.click(deleteButton);

    // Ensure the task is removed
    await waitFor(() => {
      expect(screen.queryByText("Task to Delete")).not.toBeInTheDocument();
    });
  } else {
    throw new Error("Task data-testid is not found.");
  }
});
