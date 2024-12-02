import React from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <li className="task-item">
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => onToggle(task.id)} 
      />
      
      <span 
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }} 
        data-testid={`task-${task.id}`}
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

