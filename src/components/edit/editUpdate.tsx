import { useContext } from "react"
import { DispatchContext } from "../../lib/useContext/dispatchContext"
import ACTIONS from "../../lib/reducers/actions"
import Input from "../partials/input"
import Button from "../partials/button"
import { TodoMapContext } from "../../lib/useContext/todoMapContext"
import { IsEditing } from "../../lib/useContext/isEditingContext"

const EditUpdate = () => {
    const {  dispatch } = useContext(DispatchContext)
    const { todo, index,} = useContext(TodoMapContext)
    const { setIsEditing } = useContext(IsEditing)
    
    return (
        <div className="flex justify-center w-full p-3">
            <div>
                <Input
                    value={todo.todoValue}
                    action={(e: any) => {
                        dispatch({
                            type: ACTIONS.EDIT_TODO,
                            editValue: e.target.value,
                            index: index,
                        })
                    }} />
            </div>
            <div>
                <Button
                    label='save'
                    action={(e: any) => setIsEditing(false)}
                    className='text-md bg-green-400 rounded-md px-2 '
                />
            </div>
        </div>
    )
}
export default EditUpdate