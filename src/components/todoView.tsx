import { useState } from "react"
import Button from "./partials/button"
import Input from "./partials/input"

const TodoView = (props: any) => {
    const {
        todo,
        index,
        checkMark,
        handleEdit,
        handleDelete
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
                        handleEdit(e.target.value, index)
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
                            checkMark(e.target.checked, index)
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
                            handleDelete(index)
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