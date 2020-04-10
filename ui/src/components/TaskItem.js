import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const TaskItem = ({task}) => {
    const {deleteTodoItem} = useContext(GlobalContext);

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
    return (
        <div className="task-wrapper flex-wrapper">

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
            <button onClick={onDelete} className="btn btn-sm btn-outline-dark delete">-</button>
        </div>

      </div>
    )
}
