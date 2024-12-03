import React, { useState } from "react";

const TaskForm = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="task-form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a task"
          data-testid="task-input" // Added data-testid here
        />
        <button type="submit" data-testid="add-task-btn">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
