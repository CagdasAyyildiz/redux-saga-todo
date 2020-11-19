import actions from "./actions";

export const fetchTodos = () => {
  return {
    type: actions.FETCH_TODOS_START,
  };
};

export const addTodo = (todoContent,id) => ({
  type: actions.ADD_TODO_START,
  payload: todoContent,
  id: id+1
});

export const removeTodo = (id) => ({
  type: actions.REMOVE_TODO_START,
  payload: id,
});

export const completeTodo = (id) => ({
  type: actions.COMPLETE_TODO_Start,
  payload: id,
});