import { useState } from "react"
import Button from "./partials/button"
import Input from "./partials/input"
import ACTIONS from "../lib/reducers/actions"

const TodoView = (props: any) => {
    const {
        todo,
        index,
        handleDelete,
        dispatch
    } = props

    const [isEditing, setIsEditing] = useState(false)

    let todoContent

    if (isEditing) {
        todoContent = (
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
    } else {
        todoContent = (
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
    return (
        <>
            {todoContent}
        </>
    )
}
export default TodoView