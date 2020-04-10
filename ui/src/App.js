import React, { useContext, useEffect } from 'react';
import { GlobalProvider, GlobalContext } from './context/GlobalState';
import './App.css';

function App() {
  // const [activeItem, setActiveItem] = useState({id: null, title: '', completed:false});
  // const [editing, setEditing] = useState(false);

  const { todoList, setTodoList } = useContext(GlobalContext);

  const fetchTasks = ()=>{
    fetch('/api/task-list/')
    .then(response => response.json())
    .then(data=> setTodoList(data))
    .catch(err=> console.log(err));
  };
  
  useEffect(()=>{
    fetchTasks();
  }, []);

  return (
    <div className="container">
        <div id="task-container">
          <div id="form-wrapper">
              <form action="" id="form">
                <div className="flex-wrapper">
                    <div style={{flex:6}}>
                      <input type="text" className="form-control" id="title" name="title" placeholder="Add a Task"/>
                    </div>
                    <div style={{flex:1}}>
                      <input type="submit" className="btn btn-warning" id="submit" name="title" placeholder="Add" />
                    </div>
                </div>
              </form>
          </div>
          <div id="list-wrapper">
          {todoList.map(function(task, index){
                      return(
                          <div key={index} className="task-wrapper flex-wrapper">

                            <div onClick={() =>{}} style={{flex:7}}>

                                {task.completed === false ? (
                                    <span>{task.title}</span>

                                  ) : (

                                    <strike>{task.title}</strike>
                                  )}
  
                            </div>

                            <div style={{flex:1}}>
                                <button onClick={() => {}} className="btn btn-sm btn-outline-info">Edit</button>
                            </div>

                            <div style={{flex:1}}>
                                <button onClick={() => {}} className="btn btn-sm btn-outline-dark delete">-</button>
                            </div>

                          </div>
                        )
                    })}
          </div>
        </div>
    </div>
  );
}

export default App;
