import Button from "./partials/button"
import TodoView from "./todoView"

const TodoList = (props: any) => {
    const {
        todoState,
        checkMark,
        handleEdit,
        handleDelete,
        handleAll,
        handleDone,
        handleTodo,
        handleDeleteDone,
        handleDeleteAll,
    } = props

    const currentTodo = todoState.todoList

    const rows = (
        <>
        {/* map, buttons,  */}
        <Button label='All' name='handle_all' action={(e:any) => {
            handleAll()
        }}  />
        <Button label='Done' name='handle_done' action={(e:any) => {
            handleDone()
        }} />
        <Button label='Todo' name='handle_todo' action={(e: any) => {
            handleTodo()
        }} />
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
        <Button label='Delete Done Task' name='delete_done_task' action={(e:any) => {
            handleDeleteDone()
        }} />
        <Button label='Delete All Task' name='delete_all_task' action={(e: any) => {
            handleDeleteAll()
        }} />
        
        </>
    )
    return (
        <>
        {rows}
        </>
    )
}
export default TodoList