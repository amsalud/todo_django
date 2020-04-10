import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { TaskItem } from './TaskItem';

export const TaskList = () => {

    const { todoList, setTodoList, todoItemEditing } = useContext(GlobalContext);
   
    const fetchTasks = () =>{
        fetch('/api/task-list/')
        .then(response => response.json())
        .then(data=> setTodoList(data))
        .catch(err=> console.log(err));
    };

    if(!todoList.length){
        fetchTasks();
    }

    return (
        <div id="list-wrapper" className={todoItemEditing ? 'editMode' : ''}>
            {todoList.map(function(task, index){
                    return(
                       <TaskItem task={task} key={index}/>
                    )
            })}
        </div>
    )
}
