import React from 'react'
import TodoListContextProvider from '../Context/Context'
import TodoList from '../TodoList/TodoList'
const TodoListContainer = () => {
    return (
        <TodoListContextProvider>
            <TodoList />
        </TodoListContextProvider>
    )
}

export default TodoListContainer
