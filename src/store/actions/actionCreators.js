import actions from "./actions";

export const fetchTodos = () => {
  return {
    type: actions.FETCH_TODOS,
  };
};

export const addTodo = (todo) => ({
  type: actions.ADD_TODO,
  todo,
});

export const removeTodo = (id) => ({
  type: actions.REMOVE_TODO,
  payload: id,
});

export const completeTodo = (id) => ({
  type: actions.COMPLETE_TODO,
  payload: id,
})

export const editTodo = (id, updates) => ({
  type: actions.EDIT_TODO,
  id,
  updates,
});
