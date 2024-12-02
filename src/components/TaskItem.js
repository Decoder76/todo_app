import React from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <li className="task-item" data-testid={`task-item-${task.id}`}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => onToggle(task.id)} 
        data-testid={`checkbox-${task.id}`} // Added data-testid for checkbox
      />
      
      <span 
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }} 
        data-testid={`task-text-${task.id}`} // Updated for clarity
      >
        {task.text}
      </span>
      
      <button 
        onClick={() => onDelete(task.id)} 
        data-testid={`delete-btn-${task.id}`}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
