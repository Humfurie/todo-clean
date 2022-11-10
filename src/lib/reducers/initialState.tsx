import { initScriptLoader } from "next/script"

const initialState = {
    todoList: [
        { todoValue: 'Fresh Start', status: false }
    ],
    todoClone: [],
}
export default initialState