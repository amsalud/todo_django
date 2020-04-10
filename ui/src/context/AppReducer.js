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
        default:
            return state;
    }
}