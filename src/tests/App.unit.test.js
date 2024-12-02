import { addTask, deleteTask, toggleTask } from '../App.js'; // Mock functions

describe('Task Management Functions', () => {
  test('adds a new task', () => {
    const tasks = [];
    const newTask = { id: 1, text: 'Task 1', completed: false };
    const updatedTasks = addTask(tasks, newTask);

    expect(updatedTasks).toContainEqual(newTask);
  });

  test('deletes a task', () => {
    const tasks = [{ id: 1, text: 'Task 1', completed: false }];
    const updatedTasks = deleteTask(tasks, 1);

    expect(updatedTasks).toHaveLength(0);
  });

  test('toggles task completion', () => {
    const tasks = [{ id: 1, text: 'Task 1', completed: false }];
    const updatedTasks = toggleTask(tasks, 1);

    expect(updatedTasks[0].completed).toBe(true);
  });
});
