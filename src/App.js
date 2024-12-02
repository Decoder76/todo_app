import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export const addTask = (tasks, newTask) => [...tasks, newTask];
export const deleteTask = (tasks, taskId) => tasks.filter(task => task.id !== taskId);
export const toggleTask = (tasks, taskId) => tasks.map(task => 
  task.id === taskId ? { ...task, completed: !task.completed } : task
);


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  // Fetch tasks from the backend API
  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  // Add new task via POST request
  const addTask = (taskText) => {
    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: taskText })
    })
    .then(res => res.json())
    .then(newTask => setTasks(prevTasks => [...prevTasks, newTask]));
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task via DELETE request
  const deleteTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
      .then(() => setTasks(tasks.filter(task => task.id !== id)));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true; // 'all'
  });

  return (
    <div className="container">
      <h1>To-Do List App</h1>
      <TaskForm onSubmit={addTask} />
      <div className="filters">
        <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>All</button>
        <button onClick={() => setFilter("completed")} className={filter === "completed" ? "active" : ""}>Completed</button>
        <button onClick={() => setFilter("active")} className={filter === "active" ? "active" : ""}>Active</button>
      </div>
      <TaskList tasks={filteredTasks} onDelete={deleteTask} onToggle={toggleTask} />
    </div>
  );
};

export default App;
