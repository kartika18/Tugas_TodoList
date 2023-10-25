import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducer/todoList-reducer";

const InputTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Masukkan todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTodo} style={{ marginLeft: "12px" }}>
          Add
        </button>
      </form>
    </div>
  );
};

export default InputTodo;
