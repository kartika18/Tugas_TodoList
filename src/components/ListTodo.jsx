import React from "react";
import { useSelector } from "react-redux";

const ListTodo = () => {
  const { todos } = useSelector((state) => state.todo);

  return (
    <div style={{ display: "flex", marginTop: "24px" }}>
      {todos.map((todo) => (
        <p key={todo.id} style={{ marginRight: "24px" }}>
          {todo.value}
        </p>
      ))}
      <button>Edit</button>
      <button>X</button>
    </div>
  );
};

export default ListTodo;
