import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TaskForm from '../components/TaskForm';

test('renders input and allows submitting a new task', async () => {
  const mockSubmit = jest.fn();
  render(<TaskForm onSubmit={mockSubmit} />);

  const input = await screen.findByPlaceholderText('Enter a task');
  const button = screen.getByText('Add Task');

  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(button);

  // Assuming task is passed to the onSubmit function
  await waitFor(() => expect(mockSubmit).toHaveBeenCalledWith('New Task'));
});
