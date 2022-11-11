import ACTIONS from "./actions"

const Reducer = (state: any, action: any) => {
    console.log(state, 'state')
    // // console.log(action, 'action')
    switch (action.type) {
        //handle change
        // case ACTIONS.HANDLE_CHANGE:
        //     return state = {
        //         input: action.todoValue
        //     }
        //handle submit
        case ACTIONS.ADD_TODO: {
            // console.log(action.todoValue)
            return { ...state, todoList: [...state.todoList, { todoValue: action.todoValue, status: false }], todoClone: [...state.todoList, { todoValue: action.todoValue, status: false }] }
        }
        //checked
        case ACTIONS.CHECKED_TODO: {
            return { ...state, todoList: action.newTodoList, todoClone: action.newTodoList }
        }
        // handle edit
        case ACTIONS.EDIT_TODO: {
            return { ...state, todoList: action.newTodoList, todoClone: action.newTodoList }
        }
        //handle delete
        case ACTIONS.DELETE_TODO: {
            return { ...state, todoList: action.newTodoList, todoClone: action.newTodoList }
        }

        //todo filters
        //handle all filter
        case ACTIONS.HANDLE_ALL:
            return { ...state, todoList: [...state.todoClone], todoClone: [...state.todoClone] }
        //handle done filter
        case ACTIONS.HANDLE_DONE:
            return { ...state, todoList: action.newTodoList, todoClone: [...state.todoClone] }
        //handle todo filter
        case ACTIONS.HANDLE_TODO:
            return { ...state, todoList: action.newTodoList, todoClone: [...state.todoClone] }
        //handle delete done
        case ACTIONS.HANDLE_DELETE_DONE:
            return { ...state, todoList: action.newTodoList, todoClone: action.newTodoList }
        //handle delete all
        case ACTIONS.HANDLE_DELETE_ALL:
            return { ...state, todoList: [], todoClone: [] }

        //default state return
        default:
            return state
    }
}
export default Reducer