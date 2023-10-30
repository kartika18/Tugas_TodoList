import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  editTodo,
  completeTodo,
} from "../redux/reducer/todoList-reducer";

const ListTodo = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [temptValue, setTemptValue] = useState("");
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  const switchEditButton = (id) => {
    setIsEdit(!isEdit);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = (id, value) => {
    setTemptValue({ ...temptValue, [id]: value });
  };

  const saveEditedTodo = (id) => {
    dispatch(editTodo(id, temptValue[id]));
    switchEditButton(id);
  };

  return (
    <div className="m-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="font-alata flex justify-between items-center mx-5 mt-0 mb-3 px-12 py-3 bg-white rounded-xl "
        >
          {!isEdit ? (
            <>
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
            </>
          ) : (
            <>
              <input
                type="text"
                value={temptValue[todo.id] || todo.value}
                onChange={(e) => handleEdit(todo.id, e.target.value)}
              />
              <div className="flex gap-5">
                <button
                  className="bg-yellow px-6 py-2 rounded-lg"
                  onClick={() => saveEditedTodo(todo.id)}
                >
                  Simpan
                </button>
                <button
                  onClick={() => switchEditButton(todo.id)}
                  className="bg-redish px-6 py-2 rounded-lg"
                >
                  Batal
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
