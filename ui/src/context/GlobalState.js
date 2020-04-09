import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// InitalContext
const initialState = {
    todoList : []
};

// Create context
export const GlobalContext = createContext(initialState);


// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState); 

    return (
    <GlobalContext.Provider value={
        {
            todoList: state.todoList
        }
    }>
        {children}
    </GlobalContext.Provider>);
}
