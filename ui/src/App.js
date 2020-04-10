import React from 'react';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import './App.css';

function App() {
  // const [activeItem, setActiveItem] = useState({id: null, title: '', completed:false});
  // const [editing, setEditing] = useState(false);

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
