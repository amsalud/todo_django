import React from 'react';
import './App.css';

function App() {
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

          </div>
        </div>
    </div>
  );
}

export default App;
