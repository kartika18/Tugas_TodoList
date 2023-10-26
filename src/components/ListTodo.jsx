import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/reducer/todoList-reducer";

const ListTodo = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="font-alata flex justify-between items-center mx-5 mt-0 mb-3 px-12 py-3 bg-white rounded-xl "
        >
          <p>{todo.value}</p>
          <div className="flex gap-5">
            <button className="bg-yellow px-6 py-2 rounded-lg">Edit</button>
            <button
              onClick={() => handleDelete(todo.id)}
              className="bg-redish px-6 py-2 rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListTodo;
