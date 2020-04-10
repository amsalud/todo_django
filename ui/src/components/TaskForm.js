import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState'

export const TaskForm = () => {
    const { addTodoItem, todoItemEditing, setTodoItemEditing, editTodoItem } = useContext(GlobalContext);
    const [task, setTask] = useState('');
    const [editing, setEditing] = useState(false);


    const createTask = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: task, completed: false })
        };

        fetch('/api/task-create/', requestOptions)
        .then(response => response.json())
        .then(data=> addTodoItem(data))
        .catch(err=> console.log(err));
    };

    const editTask = () => {
        const payload = {
            id: todoItemEditing.id,
            title: task,
            completed: todoItemEditing.completed
        }

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        };

        fetch(`/api/task-update/${payload.id}`, requestOptions)
        .then(response => response.json())
        .then(data=>{ 
            editTodoItem(data);
            setTodoItemEditing(null);
            setEditing(false);
        })
        .catch(err=> console.log(err));
    };

    const onSubmit = (e)=>{
        e.preventDefault();

        if(todoItemEditing){
            editTask();
        }
        else{
            createTask();
        }

        setTask('');
    }

    useEffect(()=>{
        if(todoItemEditing && task === '' && !editing){
            setTask(todoItemEditing.title);
            setEditing(true);
        }   
    });

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
