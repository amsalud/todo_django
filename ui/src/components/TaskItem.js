import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const TaskItem = ({task}) => {
    const {deleteTodoItem, editTodoItem, setTodoItemEditing} = useContext(GlobalContext);

    const onDelete = ()=>{
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };

        fetch(`/api/task-delete/${task.id}`, requestOptions)
        .then(response => response.json())
        .then(data=> deleteTodoItem(task.id))
        .catch(err=> console.log(err));
    };

    const markComplete = () => {
        if(task.completed){
            return;
        }

        const payload = {
            id: task.id,
            title: task.title,
            completed: true
        }

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        };

        fetch(`/api/task-update/${task.id}`, requestOptions)
        .then(response => response.json())
        .then(data=> editTodoItem(data))
        .catch(err=> console.log(err));
    }
    return (
        <div className="task-wrapper flex-wrapper">

        <div onClick={markComplete} style={{flex:7}}>

            {task.completed === false ? (
                <span>{task.title}</span>

              ) : (

                <strike>{task.title}</strike>
              )}

        </div>

        <div style={{flex:1}}>
            <button onClick={() => { setTodoItemEditing(task)}} className="btn btn-sm btn-outline-info">Edit</button>
        </div>

        <div style={{flex:1}}>
            <button onClick={onDelete} className="btn btn-sm btn-outline-dark delete">-</button>
        </div>

      </div>
    )
}
