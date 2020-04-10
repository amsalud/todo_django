import React from 'react';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import './App.css';

function App() {
  return (
    <div className="container">
        <div id="task-container">
          <TaskForm />
          <TaskList />
        </div>
    </div>
  );
}

export default App;
