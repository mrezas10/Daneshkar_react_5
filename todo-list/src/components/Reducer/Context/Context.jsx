import {useReducer, createContext, useState} from 'react'
import data from '../TodoList/data'
import reducer from './reducer'

export const TodoListContext = createContext({ todoList: [], dispatch: () => { } })

const TodoListContextProvider = ({ children }) => {
    const [mode , setMode] = useState("light")
    const [todoList, dispatch] = useReducer(reducer, data)
    return (
        <TodoListContext.Provider value={{ todoList, dispatch, mode , setMode }}>
            {children}
        </TodoListContext.Provider>
    )
}

export default TodoListContextProvider
