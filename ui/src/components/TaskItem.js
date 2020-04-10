import React from 'react'

export const TaskItem = ({task}) => {
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
            <button onClick={() => {}} className="btn btn-sm btn-outline-dark delete">-</button>
        </div>

      </div>
    )
}
