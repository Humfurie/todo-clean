import { useState } from "react"
import EditUpdate from "./edit/editUpdate"
import EditView from "./edit/editView"
import { IsEditing } from "../lib/useContext/isEditingContext"

const TodoView = () => {


    const [isEditing, setIsEditing] = useState(false)


    return (
        <>
            <IsEditing.Provider value={{ setIsEditing }}>
                {isEditing ?  <EditUpdate /> : <EditView />}
            </IsEditing.Provider>
        </>
    )
}
export default TodoView