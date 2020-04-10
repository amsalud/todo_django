import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'

export const TaskForm = () => {
    const [task, setTask] = useState('');
    const { addTodoItem } = useContext(GlobalContext);

    const onSubmit = (e)=>{
        e.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: task, completed: false })
        };

        fetch('/api/task-create/', requestOptions)
        .then(response => response.json())
        .then(data=> addTodoItem(data))
        .catch(err=> console.log(err));

        setTask('');
    }

    return (
        <div id="form-wrapper">
            <form action="" id="form" onSubmit={onSubmit}>
                <div className="flex-wrapper">
                    <div style={{flex:6}}>
                        <input type="text" className="form-control" id="title" name="title" value={task} onChange={(e)=>setTask(e.target.value)} placeholder="Add a Task"/>
                    </div>
                    <div style={{flex:1}}>
                        <input type="submit" className="btn btn-warning" id="submit" name="title" placeholder="Add" />
                    </div>
                </div>
            </form>
        </div>
    )
}
