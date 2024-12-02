## To-Do List Application 

A simple React-based To-Do List app designed to manage tasks efficiently. This application supports adding, deleting, toggling, and filtering tasks. It includes unit, integration, and end-to-end testing to ensure high reliability. An optional Node.js backend can be added for persistent data storage.

---

## Features

- Add tasks to the list.
- Mark tasks as completed/uncompleted.
- Delete tasks from the list.
- Filter tasks by:
  - **All**: Shows all tasks.
  - **Completed**: Shows only completed tasks.
  - **Active**: Shows only active tasks.
- Fully tested:
  - **Unit and Integration Tests**: Using Jest and React Testing Library.
  - **End-to-End Tests**: Using Cypress.

---

## **Getting Started**

### **Prerequisites**

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or later)
- **npm** (v6 or later)

### **Installation**

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. Install dependencies for the frontend:

   ```bash
   npm install
   ```

3. Run the React Application:

   ```bash
   npm start
   ```

   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### **Testing**

1. **Unit and Integration Tests**:

   Run the unit and integration tests using Jest and React Testing Library:

   ```bash
   npm test
   ```

2. **End-to-End Tests**:

   Start the React development server (if not already running):

   ```bash
   npm start

   
   
   ```

   Open Cypress for testing:

   ```bash
   npx cypress open
   ```

   This will launch the Cypress test runner, where you can select and run the tests.

---

## **Optional Backend Setup**

If you want to use a backend for persistent storage, you can run the provided Node.js server.

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Start the backend server:

   ```bash
   node server.js
   ```

   The backend will run on [http://localhost:5000](http://localhost:5000).

---

## **Technology Stack**

- **Frontend**: React
- **Testing**: Jest, React Testing Library, Cypress
- **Backend (optional)**: Node.js, Express

---

## **License**

This project is open-source and available under the MIT License.

---

## **Key Highlights**

1. **Clean Formatting**: The document is organized into clear sections for setup, usage, and testing.
2. **Developer-Focused**: Prioritizes ease of installation and understanding.
3. **Optional Backend**: Provides instructions for an optional backend setup.
4. **Technologies Listed**: Highlights the tools and frameworks used.

```
