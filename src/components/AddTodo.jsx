import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {addTodo} from "../features/todo/todoSlice"
export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo({text:input}))
    setInput("")
  };
  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          className="input-text "
          placeholder="Enter Todo Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit" className="btn-primary">add todo</button>
      </form>
    </div>
  );
}
