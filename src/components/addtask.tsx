import Input from "./partials/input"
import Button from "./partials/button"
import { SetStateAction, useState } from "react"
const AddTask = (props: any) => {
    const {
        handleSubmit,
        // handleChange
    } = props

    const [text, setText] = useState('')

    return (
        <div>
            <Input type='text' name='add_task' value={text} action={(e: any) => {
                setText(e.currentTarget.value)
            }}            
            />
            <Button name='add_task_btn' label='Add Task' action={() => {
                if(text){
                    setText('')
                    handleSubmit(text)
                }
            }} />
        </div>
    )
}
export default AddTask