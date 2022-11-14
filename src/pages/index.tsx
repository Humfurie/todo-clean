import { createContext, useReducer } from 'react'
import Reducer from '../lib/reducers/reducer'
import initialState from '../lib/reducers/initialState'
import AddTask from '../components/addtask'
import TodoList from '../components/todolist'
import { DispatchContext } from '../lib/useContext/dispatchContext'

export default function Home() {


  const [todoState, dispatch] = useReducer(Reducer, initialState)

  //place global console log here

  return (
    <div className='bg-gray-400 h-screen w-full '>
      <div className='flex justify-center w-full p-10 '>
        <div className='bg-white w-1/3 p-5 rounded-md'>

          <DispatchContext.Provider value={{ todoState, dispatch }}>
            <AddTask />
            <TodoList />
          </DispatchContext.Provider>

        </div>
      </div>
    </div>
  )
}
