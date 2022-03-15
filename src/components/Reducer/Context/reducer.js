import { makeRandomID } from "../TodoList/data";

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "addToDoListItem":
      return [
        ...state,
        {
          id: makeRandomID(),
          name: payload.name,
          showItems: "closed",
          items: [],
        },
      ];
    case "deleteTodoListItem":
      return state.filter((item) => item.id !== payload.id);
    case "addToDoItems":
      return state.map((item) =>
        item.id === payload.TodoId
          ? {
              ...item,
              isDone: "notDone",
              items: [
                ...item.items,
                { id: makeRandomID(), title: payload.title, status: "notDone" },
              ],
            }
          : item
      );
    case "updateTodoItemStatus":
      return state.map((todo) => {
            let newTodo = {...todo}
            if(todo.id === payload.todoID)
            {
              newTodo = {
              ...newTodo,
                  items: todo.items.map((item) =>
                  item.id === payload.itemId
                      ? { ...item, status: item.status === "notDone"? "Done":"notDone" }
                      : item
              ),
              }
              newTodo = {
                ...newTodo,
                isDone: newTodo.items.filter((item) => item.status === "notDone").length === 0 ? "Done":"notDone"
              }
            }
            return newTodo
      }
      );
    case "deleteTodoItem":
      return state.map((todo) =>
        todo.id === payload.todoId
          ? { ...todo, items: todo.items.filter(item=> item.id !== payload.itemId) }
          : todo
      );
    case "switchShowItems":
      return state.map((todo) =>
          todo.id === payload.todoId
              ? {...todo, showItems: todo.showItems === "closed" ? "opened" : "closed"}
              : todo
      );
    case "clearCompleted":
      return state.filter((todo) => todo.isDone === "notDone");
    case "todoListStatus":
      return state.map((todo) =>
        todo.id === payload.todoId
            ? {...todo, isDone: todo.items.filter((item) => item.status === "notDone").length === 0 ? "Done": "notDone"}
            : todo)
    default:
      return state;
  }
}

export const types = {
  addToDoListItem: "addToDoListItem",
  deleteTodoListItem: "deleteTodoListItem",
  addToDoItems: "addToDoItems",
  updateTodoItemStatus: "updateTodoItemStatus",
  deleteTodoItem: "deleteTodoItem",
  switchShowItems: "switchShowItems",
  clearCompleted: "clearCompleted",
  todoListStatus: "todoListStatus"
};

export default reducer;
