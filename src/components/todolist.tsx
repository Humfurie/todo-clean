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
            <div className="flex justify-evenly">
                <Button
                    label='All'
                    name='handle_all'
                    action={(e: any) => {
                        handleAll()
                    }}
                    className='text-md bg-green-400 rounded-md px-4 '
                />
                <Button
                    label='Done'
                    name='handle_done'
                    action={(e: any) => {
                        handleDone()
                    }}
                    className='text-md bg-green-400 rounded-md px-4 '
                />
                <Button
                    label='Todo'
                    name='handle_todo'
                    action={(e: any) => {
                        handleTodo()
                    }}
                    className='text-md bg-green-400 rounded-md px-4'
                />
            </div>
            <div className="flex flex-col">
                {currentTodo.length >= 1 ? currentTodo.map((todo: { todoValue: string, status: boolean }, index: any) => (
                    <div key={index}>
                        <TodoView
                            todo={todo}
                            index={index}

                            checkMark={checkMark}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    </div>
                )) : <div className="flex justify-center">
                    <p className="text-md bg-gray-500 "> No Content... </p>
                </div>}
            </div>
            <div className="flex justify-evenly">
                <Button 
                label='Delete Done Task' 
                name='delete_done_task' 
                action={(e: any) => {
                    handleDeleteDone()
                }} 
                className='text-md bg-red-400 rounded-md px-2 '
                />
                <Button 
                label='Delete All Task' 
                name='delete_all_task' 
                action={(e: any) => {
                    handleDeleteAll()
                }}
                className='text-md bg-red-400 rounded-md px-2 '
                />
            </div>

        </>
    )
    return (
        <div className="flex flex-col justify-center w-full">
            {rows}
        </div>
    )
}
export default TodoList