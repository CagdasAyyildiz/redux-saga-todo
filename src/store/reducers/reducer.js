import actions from "../actions/actions";

let initialState = {
  todos: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_TODOS:
      return {
        ...state,
        todos: [
          {
            id: 1,
            content: "Study",
            completed: false,
          },
          {
            id: 2,
            content: "Read",
            completed: true,
          },
        ],
      };
    case actions.ADD_TODO:
      console.log(action.id)
      return {
        ...state,
        todos: [{
          id: action.id,
          content: action.payload,
          completed: false,
        },...state.todos]
      };
    case actions.COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          } else {
            return todo;
          }
        }),
      };
    case actions.REMOVE_TODO:
      console.log(action.payload);
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
}
