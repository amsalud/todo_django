import React, {useEffect, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { TaskItem } from './TaskItem';

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
   }, []);


    return (
        <div id="list-wrapper">
            {todoList.map(function(task, index){
                    return(
                       <TaskItem task={task} key={index}/>
                    )
            })}
        </div>
    )
}
