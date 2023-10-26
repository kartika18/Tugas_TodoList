const initialState = {
  todos: [
    {
      id: 1,
      value: "belajar react",
    },
    {
      id: 2,
      value: "belajar redux",
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        id: Date.now(),
        value: action.payload,
      };
      console.log(newTodo.id);
      const addedTodos = [...state.todos, newTodo];
      return {
        todos: addedTodos,
      };
    case "DELETE_TODO":
      const deletedTodo = state.todos.filter(
        (item) => item.id != action.payload
      );
      return {
        todos: deletedTodo,
      };

    default:
      return state;
  }
};

export const addTodo = (input) => {
  return {
    type: "ADD_TODO",
    payload: input,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};

export const editTodo = (input) => {
  return {
    type: "EDIT_TODO",
    payload: input,
  };
};

export default todoReducer;
