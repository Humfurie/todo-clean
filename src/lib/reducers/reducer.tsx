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
           
            console.log(action.todoValue)
            return {...state, todoList:[...state.todoList, {todoValue: action.todoValue, status: false}], todoClone: [...state.todoList, {todoValue: action.todoValue, status: false}]}

        }
        default:
            return state
    }
}
export default Reducer