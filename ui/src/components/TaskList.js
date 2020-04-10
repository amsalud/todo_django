import React, {useEffect, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TaskList = () => {

    const { todoList, setTodoList } = useContext(GlobalContext);

    const fetchTasks = ()=>{
     fetch('/api/task-list/')
     .then(response => response.json())
     .then(data=> setTodoList(data))
     .catch(err=> console.log(err));
   }
   
   useEffect(()=>{
       fetchTasks();
   });


    return (
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
    )
}
