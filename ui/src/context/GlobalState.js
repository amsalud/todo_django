import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// InitalContext
export const initialState = {
    todoList : [],
    todoItemEditing: null
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

    const deleteTodoItem = (id) => {
        dispatch({
            type: 'DELETE_TODO_ITEM',
            payload: id
        });
    };

    const editTodoItem = (item) => {
        dispatch({
            type: 'EDIT_TODO_ITEM',
            payload: item
        });
    };

    const setTodoItemEditing = (item) => {
        dispatch({
            type: 'SET_TODO_ITEM_EDITING',
            payload: item
        });
    };

    return (
    <GlobalContext.Provider value={
        {
            todoList: state.todoList,
            todoItemEditing: state.todoItemEditing,
            setTodoList,
            addTodoItem,
            deleteTodoItem,
            editTodoItem,
            setTodoItemEditing
        }
    }>
        {children}
    </GlobalContext.Provider>);
}
