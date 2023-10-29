const initialState = {
  todos: [
    {
      id: 1,
      value: "belajar react",
      isEdit: false,
      isCompleted: false,
    },
    {
      id: 2,
      value: "belajar redux",
      isEdit: false,
      isCompleted: false,
    },
    {
      id: 3,
      value: "makan",
      isEdit: false,
      isCompleted: false,
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        ...state,
        id: Date.now(),
        value: action.payload,
      };
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
    case "EDIT_TODO":
      const { id, input } = action.payload;
      const editedTodo = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, value: input };
        } else {
          return todo;
        }
      });
      return {
        ...state,
        todos: editedTodo,
      };
    case "COMPLETE_TODO":
      const completedTodo = state.todos.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: completedTodo,
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

export const editTodo = (id, input) => {
  return {
    type: "EDIT_TODO",
    payload: { id, input },
  };
};

export const completeTodo = (id) => {
  return {
    type: "COMPLETE_TODO",
    payload: id,
  };
};

export default todoReducer;
