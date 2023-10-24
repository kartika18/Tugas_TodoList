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
    default:
      return state;
  }
};

export const addTodo = () => {
  return {
    type: "ADD_TODO",
  };
};

export default todoReducer;
