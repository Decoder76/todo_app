const express = require('express');
const app = express();
const port = 5000;

const cors = require('cors');
app.use(cors());  // This will allow your frontend to communicate with the backend
// app.use(express.json());  // This will allow your backend to parse JSON data
// app.use(express.urlencoded({ extended: true }));  // This will allow your backend to parse URL
// app.use(express.static('public'));  // This will serve static files from the public folder
// app.use('/api', require('./routes'));  // This will serve API routes from the routes folder

app.use(express.json());

let tasks = []; // In-memory storage for simplicity

app.get('/', (req, res) => {
  res.send('Welcome to the To-Do List API');
});

// GET: Fetch all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST: Add a new task
app.post('/tasks', (req, res) => {
  const task = { id: Date.now(), text: req.body.text, completed: false };
  tasks.push(task);
  res.status(201).json(task);
});

// DELETE: Delete a task
app.delete('/tasks/:id', (req, res) => {
  tasks = tasks.filter(task => task.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
