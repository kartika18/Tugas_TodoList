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
      <form className="flex justify-evenly my-4 mx-6 gap-5">
        <input
          type="text"
          placeholder="Masukkan todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="pl-6 pr-80 py-4 rounded-full"
        />
        <button
          onClick={handleAddTodo}
          className="px-10 py-1 bg-brown text-white rounded-3xl"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default InputTodo;
