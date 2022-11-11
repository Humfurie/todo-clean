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
            <div>
                <div>
                    <Input value={todo.todoValue} action={(e: any) => {
                        handleEdit(e.target.value, index)
                    }} />
                </div>
                <div>
                    <Button label='save' action={(e: any) => setIsEditing(false)} />
                </div>
            </div>
        )
    } else {
        todoContent = (
            <div>
                <div className={todo.status ? 'line-through' : ''}>
                    {todo.todoValue}
                </div>
                <div>
                    <Input type='checkbox' checked={todo.status} action={(e: any) => {
                        checkMark(e.target.checked, index)
                    }} />
                    <Button name='edit' label='edit' action={(e: any) => setIsEditing(true)} />
                    <Button name='delete' label='delete' action={() => {
                        handleDelete(index)
                    }} />
                </div>
            </div>
        )
    }
    return (
        <div>
            {todoContent}
        </div>
    )
}
export default TodoView