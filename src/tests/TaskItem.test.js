import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../components/TaskItem';

test('renders a task and allows toggling completion', () => {
  const task = { id: 1, text: 'Task 1', completed: false };
  const toggleTask = jest.fn();

  render(<TaskItem task={task} onToggle={toggleTask} onDelete={jest.fn()} />);

  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox);

  expect(toggleTask).toHaveBeenCalledWith(1);
});

test('renders a task and allows deletion', () => {
  const task = { id: 1, text: 'Task 1', completed: false };
  const deleteTask = jest.fn();

  render(<TaskItem task={task} onToggle={jest.fn()} onDelete={deleteTask} />);

  fireEvent.click(screen.getByText('Delete'));

  expect(deleteTask).toHaveBeenCalledWith(1);
});
