import React from 'react'

export const TaskForm = () => {
    return (
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
    )
}
