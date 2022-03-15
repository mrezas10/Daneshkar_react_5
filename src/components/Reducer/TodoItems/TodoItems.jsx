import { useContext } from 'react'
import { TodoListContext } from '../Context/Context'
import { types } from '../Context/reducer'
import "./TodoItems.styles.css"
const TodoItems = ({ todo }) => {
    const { dispatch , mode } = useContext(TodoListContext)
    const handleUpdateTodoItemStatus = (todoID, itemId, e) => {
        dispatch({
            type: types.updateTodoItemStatus,
            payload: { todoID, itemId }
        })
        dispatch({
            type: types.todoListStatus,
            payload: {todoID}
        })
    };
    const handleDeleteTodoItem = (todoId , itemId)=>{
        dispatch({
            type: types.deleteTodoItem,
            payload: { todoId, itemId }
        })
    }
    return (
        <div className={todo.showItems}>
            {todo.items.map((item) => (
                <div key={todo.id +"-"+item.id} className={"handle"+" "+ item.status +" "+ mode}>
                    <div onClick={() => handleUpdateTodoItemStatus(todo.id , item.id)} className={"todo-circle  todo-sub-items" +" "+ mode}>
                        <img className="todo-circle-checkmark" src="../img/icons8-done.svg" alt=""/>
                    </div>
                    <span>{item.title}</span>
                    <div className="todo-actions">
                        <span className="material-icons todo-delete" onClick={() => handleDeleteTodoItem(todo.id , item.id)}>close</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TodoItems
