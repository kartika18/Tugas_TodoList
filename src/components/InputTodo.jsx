import React from "react";
import { useState } from "react";

const InputTodo = () => {
  const [input, setInput] = useState("");

  const handleAddTodo = (e) => {
    e.prevent.default();
    console.log(input);
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
