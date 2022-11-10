import Input from "./partials/input"
import Button from "./partials/button"
import { useState } from "react"
const AddTask = (props: any) => {
    const {
        handleSubmit,
        // handleChange
    } = props

    const [input, setInput] = useState('')

    return (
        <div>
            <Input type='text' name='add_task' action={setInput} />
            <Button name='add_task_btn' value={input} label='Add Task' action={handleSubmit} />
        </div>
    )
}
export default AddTask