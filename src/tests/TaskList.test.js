import { render, screen } from '@testing-library/react';
import TaskList from '../components/TaskList';

test('renders tasks correctly', () => {
  const tasks = [
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
  ];

  render(<TaskList tasks={tasks} onToggle={jest.fn()} onDelete={jest.fn()} />);

  expect(screen.getByText('Task 1')).toBeInTheDocument();
  expect(screen.getByText('Task 2')).toBeInTheDocument();
});
