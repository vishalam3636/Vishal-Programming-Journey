import React, { useState, useEffect } from "react";

import { addTodo } from "../Api";

export default function AddTodoModal({ setIsAddTodo, getTodos }) {
  const [newTodo, setNewTodo] = useState({
    first_name: "",
    last_name: "",
    date: "",
    to_do: "",
  });

  function submitNewTodo() {
    addTodo(newTodo)
      .then((res) => {
        console.log(res);
        setIsAddTodo(false);
        getTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  console.log(newTodo, ">>> newTodo");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <input
        onChange={(e) => {
          setNewTodo({ ...newTodo, first_name: e.target.value });
        }}
        placeholder="first name"
      />
      <input
        onChange={(e) => {
          setNewTodo({ ...newTodo, last_name: e.target.value });
        }}
        placeholder="last name"
      />
      <input
        onChange={(e) => {
          setNewTodo({ ...newTodo, date: e.target.value });
        }}
        placeholder="date"
      />
      <input
        onChange={(e) => {
          setNewTodo({ ...newTodo, to_do: e.target.value });
        }}
        placeholder="todo"
      />
      <button onClick={submitNewTodo}>Submit Todo</button>
    </div>
  );
}
