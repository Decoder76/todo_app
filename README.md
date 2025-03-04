# 📝 React To-Do Application

![GitHub repo size](https://img.shields.io/github/repo-size/Decoder76/todo_app?color=blue&label=Repo%20Size)
![GitHub last commit](https://img.shields.io/github/last-commit/Decoder76/todo_app?color=green&label=Last%20Commit)
![GitHub license](https://img.shields.io/github/license/Decoder76/todo_app?color=yellow&label=License)

## 📋 Overview

This React-based To-Do Application allows users to efficiently manage their tasks. It supports adding, deleting, toggling completion status, and filtering tasks. The application is thoroughly tested, ensuring high reliability, and includes an optional Node.js backend for persistent data storage.

## 🚀 Features

- **Add Tasks**: Easily add new tasks to your to-do list.
- **Mark as Completed**: Toggle tasks between completed and active states.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Filter Tasks**:
  - *All*: Displays all tasks.
  - *Completed*: Shows only completed tasks.
  - *Active*: Shows only active tasks.
- **Testing**:
  - *Unit and Integration Tests*: Implemented using Jest and React Testing Library.
  - *End-to-End Tests*: Conducted with Cypress.

## 🛠️ Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 14 or later)
- **npm** (version 6 or later)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Decoder76/todo_app.git
   cd todo_app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Application**:
   ```bash
   npm start
   ```
   The application will run at `http://localhost:3000`.

## 🧪 Running Tests

### Unit and Integration Tests

Execute the following command to run unit and integration tests:
```bash
npm test
```

### End-to-End Tests

To run end-to-end tests using Cypress:

1. **Open Cypress Test Runner**:
   ```bash
   npx cypress open
   ```

2. **Run Tests**:
   In the Cypress Test Runner, select the desired test to execute.

## 🗂️ Project Structure

```bash
todo_app/
├── backend/               # Optional Node.js backend
├── cypress/               # End-to-end tests
├── public/                # Static assets
├── src/                   # Source code
│   ├── components/        # React components
│   ├── App.js             # Main App component
│   ├── index.js           # Entry point
│   └── ...                # Other source files
├── .gitignore             # Git ignore file
├── cypress.config.js      # Cypress configuration
├── package.json           # Project dependencies and scripts
└── README.md              # Project documentation
```

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

*If you find this project helpful, please consider giving it a ⭐ on GitHub!*
