import { useState } from "react"
import Button from "./partials/button"
import Input from "antd/lib/input/Input"

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
    if(isEditing) {
        todoContent = (
            <div>
                <div>
                    <Input value={todo.todoValue} />
                </div>
                <div>
                    <Button action={setIsEditing(true)} />
                </div>
            </div>
        )
    }else{
        todoContent = (
            <div>
                <div>
                    <Input 
                    type="checkbox" 
                    checked={todo.status} 
                    />
                </div>
                <div>
                    <Button action={handleDelete(index)} />
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