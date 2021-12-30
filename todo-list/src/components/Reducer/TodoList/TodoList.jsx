import {useContext, useState} from "react";
import './TodoList.style.css'
import { types } from "../Context/reducer";
import { TodoListContext } from '../Context/Context'
import TodoCard from '../TodoCard/TodoCard'
import sun from "../img/sun-solid.svg"
import moon from "../img/moon-solid.svg"
function TodoList() {
  const { todoList, dispatch , mode , setMode } = useContext(TodoListContext);
  const [filter , setFilter] = useState("all")
  const handleAddTodoList = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      let input = document.getElementById("todo-input")
      const name = input.value
      dispatch({ type: types.addToDoListItem, payload: { name } })
    }
  };

  return (
      <div>
        <div id="main-container" className={mode}>
          <div id="todo-title">
            <span>TODO</span>
            <div id="todo-mode" className={mode}>
              <img id="todo-mode-img" onClick={() => setMode(mode === "light" ? "dark" : "light")} style={{width: "1.5rem"}} src={mode === "light" ? sun : moon} alt=""/>
            </div>
          </div>
          <div id="todo-container" className={mode}>
            <div id="todo-add" className={mode}>
              <label htmlFor="todo-input"> </label>
              <div id="todo-click" onClick={handleAddTodoList} className="todo-circle light"> </div>
              <input id="todo-input" onKeyPress={handleAddTodoList} className={mode} type="text" placeholder="Create a new todo..."/>
            </div>
            <div id="todo-list" className={mode}>
              <div id="items-list" className={mode}>
                {todoList.filter((todo) => {
                  if(filter === "active") {
                    return todo.isDone === "notDone"
                  }
                  else if(filter === "completed") {
                    return todo.isDone === "Done"
                  }
                  else
                    return true
                }).map((todo) => (
                    <TodoCard todo={todo} key={todo.id} />
                ))}
              </div>
              <div id="todo-stats" className={mode}>
                <div id="todo-items-left">
                  <span id="items-count">{todoList.filter((todo) => todo.isDone === "notDone").length}</span>
                  <span> items left</span>
                </div>
                <div id="todo-filter" className={mode}>
                  <span id="todo-show-all" onClick={() => setFilter("all")} className={filter === "all"? "clicked":""}>All</span>
                  <span id="todo-show-active" onClick={() => setFilter("active")} className={filter === "active"? "clicked":""}>Active</span>
                  <span id="todo-show-completed" onClick={() => setFilter("completed")} className={filter === "completed"? "clicked":""}>Completed</span>
                </div>
                <div id="todo-clear" onClick={() => {
                  dispatch({type: types.clearCompleted})
                }}>Clear Completed</div>
              </div>

            </div>
            <div id="todo-filter-alt" className={mode}>

            </div>
            <div id="todo-instructions" className={mode}>Click to reveal the items in a list</div>
          </div>
        </div>
        <div id="page-background" className={mode}> </div>
      </div>

  );
}

export default TodoList;
