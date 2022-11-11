import { useReducer } from 'react'
import Reducer from '../lib/reducers/reducer'
import initialState from '../lib/reducers/initialState'
import AddTask from '../components/addtask'
import TodoList from '../components/todolist'
import ACTIONS from '../lib/reducers/actions'


export default function Home() {

  const [todoState, dispatch] = useReducer(Reducer, initialState)

  //add task submit function
  const handleSubmit = (data: any) => {
    dispatch({
      type: ACTIONS.ADD_TODO,
      todoValue: data
    })
  }

  //data button functions
  //data checkmark input function
  const checkMark = (checked: any, index: number) => {
    const newValue = todoState.todoList.find((_: { todoValue: string, status: boolean }, checkedTodoListIndex: number) => checkedTodoListIndex === index)
    const newList = todoState.todoList
    newValue.status = checked
    newList[index] = { todoValue: newValue.todoValue, status: newValue.status }
    console.log(newList)
    dispatch({
      type: ACTIONS.CHECKED_TODO,
      newTodoList: newList,
    })
  }

  //data edit button function
  const handleEdit = (newTodoList: { todoValue: string, status: boolean }, index: number) => {
    const newTodo = todoState.todoList.find((_: { todoValue: string, status: boolean }, newTodoIndex: number) => newTodoIndex === index)
    const newList = todoState.todoList
    newTodo.todoValue = newTodoList
    newList[index] = { todoValue: newTodo.todoValue, status: newTodo.status }
    console.log(index, 'this is new list')
    dispatch({
      type: ACTIONS.EDIT_TODO,
      newTodoList: newList,
    })
  }

  //data delete button function
  const handleDelete = (index: number) => {

    const newList = todoState.todoList
    const todoFilter = newList.filter((_: { todoValue: string, status: false }, idx: number) => idx !== index)

    dispatch({
      type: ACTIONS.DELETE_TODO,
      newTodoList: todoFilter
    })
  }

  //data filter functions
  //all filter
  const handleAll = () => {
    dispatch({
      type: ACTIONS.HANDLE_ALL,
    })
  }

  //done filter
  const handleDone = () => {
    const done = todoState.todoClone.filter((todoList: { todoValue: string, status: boolean }, index: number) => todoList.status)
    dispatch({
      type: ACTIONS.HANDLE_DONE,
      newTodoList: done,
    })
  }

  //todo filter
  const handleTodo = () => {
    const todo = todoState.todoClone.filter((todoList: { todoValue: string, status: boolean }, index: number) => !todoList.status)
    dispatch({
      type: ACTIONS.HANDLE_TODO,
      newTodoList: todo,
    })
  }

  //delete done filter
  const handleDeleteDone = () => {
    const deleteDone = todoState.todoClone.filter((todoList: { todoValue: string, status: boolean }, index: number) => !todoList.status)
    console.log(deleteDone)
    dispatch({
      type: ACTIONS.HANDLE_DELETE_DONE,
      newTodoList: deleteDone,
    })
  }

  //delete all filter
  const handleDeleteAll = () => {
    dispatch({
      type: ACTIONS.HANDLE_DELETE_ALL
    })
  }

  //place global console log here

  return (
    <div>
      <AddTask
        handleSubmit={handleSubmit}
      />

      <TodoList
        // state
        todoState={todoState}
        // data button
        checkMark={checkMark}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        //filter functions
        handleAll={handleAll}
        handleDone={handleDone}
        handleTodo={handleTodo}
        handleDeleteDone={handleDeleteDone}
        handleDeleteAll={handleDeleteAll}
      />
    </div>
  )
}
