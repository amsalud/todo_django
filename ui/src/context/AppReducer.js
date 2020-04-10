export default (state, action) => {
    switch(action.type){

        case 'SET_TODO_LIST':
            return {
                ...state,
                todoList: action.payload
            }
        case 'ADD_TODO_ITEM':
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        case 'DELETE_TODO_ITEM':
            return {
                state,
                todoList : state.todoList.filter((item)=> item.id !== action.payload)
            }
        case 'EDIT_TODO_ITEM':
            const index = state.todoList.findIndex(item=> item.id === action.payload.id);
            const updatedTodoList = [...state.todoList];
            updatedTodoList[index] = action.payload;
            return{
                state,
                todoList: [...updatedTodoList]
            }
        default:
            return state;
    }
}