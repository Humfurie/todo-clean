import ACTIONS from "./actions"

const Reducer = (state: any, action: any) => {
    console.log(state, 'state')
    // // console.log(action, 'action')
    switch (action.type) {

        //handle submit
        case ACTIONS.ADD_TODO: {
            // console.log(action.todoValue)
            return { ...state, todoList: [...state.todoList, { todoValue: action.todoValue, status: false }], todoClone: [...state.todoList, { todoValue: action.todoValue, status: false }] }
        }
        //checked
        case ACTIONS.CHECKED_TODO: {
            const newValue = state.todoList.find((_: { todoValue: string, status: boolean }, checkedTodoListIndex: number) => checkedTodoListIndex === action.index)
            const todoList = state.todoList
            newValue.status = action.checked
            todoList[action.index] = { todoValue: newValue.todoValue, status: newValue.status }

            return { ...state, todoList: todoList, todoClone: todoList }
        }
        // handle edit
        case ACTIONS.EDIT_TODO: {
            const newTodo = state.todoList.find((_: { todoValue: string, status: boolean }, newTodoIndex: number) => newTodoIndex === action.index)
            const todoList = state.todoList
            newTodo.todoValue = action.editValue
            todoList[action.index] = { todoValue: newTodo.todoValue, status: newTodo.status }

            return { ...state, todoList: todoList, todoClone: todoList }
        }
        //handle delete
        case ACTIONS.DELETE_TODO: {
            const newList = state.todoList
            const todoFilter = newList.filter((_: { todoValue: string, status: false }, idx: number) => idx !== action.index)
            return { ...state, todoList: todoFilter, todoClone: todoFilter }
        }

        //todo filters
        //handle all filter
        case ACTIONS.HANDLE_ALL:
            return { ...state, todoList: [...state.todoClone], todoClone: [...state.todoClone] }
        //handle done filter
        case ACTIONS.HANDLE_DONE:{
            const todoList = state.todoClone.filter((todoList: { todoValue: string, status: boolean }, index: number) => todoList.status)
            return { ...state, todoList: todoList, todoClone: [...state.todoClone] }
        }
            //handle todo filter
        case ACTIONS.HANDLE_TODO:{
            const todoList = state.todoClone.filter((todoList: { todoValue: string, status: boolean }) => !todoList.status)
            return { ...state, todoList: todoList, todoClone: [...state.todoClone] }
        }
        //handle delete done
        case ACTIONS.HANDLE_DELETE_DONE:{
            const todoList = state.todoClone.filter((todoList: { todoValue: string, status: boolean }, index: number) => !todoList.status)
            return { ...state, todoList: todoList, todoClone: todoList }
        }
        //handle delete all
        case ACTIONS.HANDLE_DELETE_ALL:
            return { ...state, todoList: [], todoClone: [] }

        //default state return
        default:
            return state
    }
}
export default Reducer