import Button from "./partials/button"
import TodoView from "./todoView"

const TodoList = (props: any) => {
    const {
        todo,
        checkMark,
        handleEdit,
        handleDelete,
        handleAll,
        handleDone,
        handleTodo,
        handleDeleteDone,
        handleDeleteAll,
    } = props
    const currentTodo = todo.todoList
    const rows = (
        <>
        {/* map, buttons,  */}
        <Button />
        <Button />
        <Button />
        <div>
        {currentTodo.map((todo: {todoValue: string, status:boolean}, index: any) => (
            <div key={index}>
                <TodoView 
                todo={todo}
                index={index}

                checkMark={checkMark}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                />
            </div>
            ))}
        </div>
        <Button />
        <Button />
        
        </>
    )
    return (
        <>
        {rows}
        </>
    )
}
export default TodoList