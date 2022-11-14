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
        <div className="flex flex-col w-full">
            <div className="flex justify-center p-2">
                <Input
                    type='text'
                    name='add_task'
                    placeholder='task...'
                    value={text}
                    action={(e: any) => {
                        setText(e.currentTarget.value)
                    }}
                    className='border border-green-900 rounded-md p-2'
                />
            </div>
            <div className="flex justify-center w-full p-4" >
                <Button 
                name='add_task_btn' 
                label='Add Task' 
                action={() => {
                    if (text) {
                        setText('')
                        handleSubmit(text)
                    }
                }} 
                className="text-md bg-green-400 rounded-md w-3/4"
                />
            </div>
        </div>
    )
}
export default AddTask