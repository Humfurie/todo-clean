import { useContext } from "react"
import { DispatchContext } from "../../lib/useContext/dispatchContext"
import ACTIONS from "../../lib/reducers/actions"
import Input from "../partials/input"
import Button from "../partials/button"
import { TodoMapContext } from "../../lib/useContext/todoMapContext"
import { IsEditing } from "../../lib/useContext/isEditingContext"

const EditView = () => {
    const {  dispatch } = useContext(DispatchContext)
    const { todo, index,} = useContext(TodoMapContext)
    const { setIsEditing } = useContext(IsEditing)

    return (

            <div className="flex justify-center w-full p-3">
               
                <div className="flex justify-center w-full">
                    <div className="flex justify-start">                        
                    <p className={todo.status ? 'line-through' : ''} >
                        {todo.todoValue}
                    </p>
                    </div>
                </div>
                <div className="flex justify-evenly w-full">
                    <Input
                        type='checkbox'
                        checked={todo.status}
                        action={(e: any) => {
                            dispatch({
                                type: ACTIONS.CHECKED_TODO,
                                checked: e.target.checked,
                                index: index

                            })

                        }}
                    />
                    <Button
                        name='edit'
                        label='edit'
                        action={(e: any) => setIsEditing(true)}
                        className='text-md bg-yellow-400 rounded-md px-2 '
                    />
                    <Button
                        name='delete'
                        label='delete'
                        action={() => {
                            dispatch({
                                type: ACTIONS.DELETE_TODO,
                                index: index
                              })
                        }}
                        className='text-md bg-red-400 rounded-md px-2 '
                    />
                </div>
            </div>
        )
}
export default EditView