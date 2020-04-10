import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// InitalContext
export const initialState = {
    todoList : []
};

// Create context
export const GlobalContext = createContext(initialState);


// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState); 

    const setTodoList = (todoList) => {
        dispatch({
            type: 'SET_TODO_LIST',
            payload: todoList
        });
    };

    const addTodoItem = (item) => {
        dispatch({
            type: 'ADD_TODO_ITEM',
            payload: item
        });
    };

    return (
    <GlobalContext.Provider value={
        {
            todoList: state.todoList,
            setTodoList,
            addTodoItem
        }
    }>
        {children}
    </GlobalContext.Provider>);
}
