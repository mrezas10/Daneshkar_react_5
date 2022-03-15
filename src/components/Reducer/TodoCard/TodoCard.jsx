import { useContext } from 'react'
import { TodoListContext } from '../Context/Context'
import { types } from '../Context/reducer'
import TodoItems from '../TodoItems/TodoItems'
import "./TodoCard.styles.css"
const TodoCard = ({ todo }) => {
    const { dispatch , mode} = useContext(TodoListContext)
    const handleDeleteTodoList = (id) => {
        dispatch({ type: types.deleteTodoListItem, payload: { id } })
    };
    const handleAddToDoItems = (id) => {
        const title = prompt("please enter the title");
        dispatch({ type: types.addToDoItems, payload: { TodoId: id, title } })
    };

    return (
        <div className="todo-item-container">
            <div className={"handle"+" "+ todo.isDone +" "+ mode} onClick={() => {
                let todoId = todo.id;
                dispatch({
                    type: types.switchShowItems,
                    payload: { todoId }
                })
            }
            }>
                <div className={"todo-circle" +" "+ mode}>
                    <img className="todo-circle-checkmark" src="../img/icons8-done.svg" alt=""/>
                </div>
                <span>{todo.name}</span>
                <div>

                </div>
                <div className="todo-actions">
                    <span className="material-icons todo-add" onClick={() => handleAddToDoItems(todo.id)}>add</span>
                    <span>  </span>
                    <span className="material-icons todo-delete" onClick={() => handleDeleteTodoList(todo.id)}>close</span>
                </div>
            </div>
            <TodoItems todo={todo}/>
        </div>

    )
}

export default TodoCard
