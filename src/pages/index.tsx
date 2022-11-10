import { useReducer } from 'react'
import Reducer from '../lib/reducers/reducer'
import initialState from '../lib/reducers/initialState'
import AddTask from '../components/addtask'
import TodoList from '../components/todolist'
import ACTIONS from '../lib/reducers/actions'


export default function Home() {

  const [todo, dispatch] = useReducer(Reducer, initialState)

  //input change function
  // const handleChange = (e: string) => {
  //   dispatch({
  //     type: ACTIONS.HANDLE_CHANGE,
  //     todoValue: e
  //   })
  // }
  
  //add task submit function
  const handleSubmit = (e: any) => {
    dispatch({
      type: ACTIONS.ADD_TODO,
      todoValue: e
    })
  }

  //data button functions
  //data checkmark input function
  const checkMark = () => {
    dispatch({
      type: ACTIONS.CHECKED_TODO,
    })
  }
  //data edit button function
  const handleEdit = () => {
    dispatch({
      type: ACTIONS.EDIT_TODO,
    })
  }
  //data delete button function
  const handleDelete = () => {
    dispatch({
      type: ACTIONS.DELETE_TODO,
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
    dispatch({
      type: ACTIONS.HANDLE_DONE,
    })
  }
  //todo filter
  const handleTodo = () => {
    dispatch({
      type: ACTIONS.HANDLE_TODO,
    })
  }
  //delete done filter
  const handleDeleteDone = () => {
    dispatch({
      type: ACTIONS.HANDLE_DELETE_DONE,
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
        // handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TodoList
        // state
        todo={todo}
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
