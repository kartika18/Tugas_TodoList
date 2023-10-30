import React from "react";
import { useSelector } from "react-redux";

const ActiveTodo = () => {
  const { todos } = useSelector((state) => state.todo);

  return (
    <div className="m-4">
      {todos.map((todo) => {
        if (todos.isCompleted === false)
          <div
            key={todo.id}
            className="font-alata flex justify-between items-center mx-5 mb-3 px-12 py-3 bg-white rounded-xl "
          >
            <div className="flex gap-3">
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => dispatch(completeTodo(todo.id))}
              />
              <span className={todo.isCompleted ? "line-through" : ""}>
                {todo.value}
              </span>
            </div>
            <div className="flex gap-5">
              <button
                className="bg-yellow px-6 py-2 rounded-lg"
                onClick={() => switchEditButton(todo.id)}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="bg-redish px-6 py-2 rounded-lg"
              >
                Hapus
              </button>
            </div>
          </div>;
        return <div>Tidak ada data</div>;
      })}
    </div>
  );
};

export default ActiveTodo;
