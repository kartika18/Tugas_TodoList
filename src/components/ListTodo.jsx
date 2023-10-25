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
    <div>
      {todos.map((todo) => (
        <div key={todo.id} style={{ display: "flex", marginTop: "24px" }}>
          <p style={{ margin: "0", marginRight: "14px" }}>{todo.value}</p>
          <button>Edit</button>
          <button onClick={() => handleDelete(todo.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
