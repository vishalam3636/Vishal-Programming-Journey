import "./App.css";
import { useState, useEffect } from "react";

import { getAllTodos, addTodo, deleteTodo } from "./API/Api";

import AddTodoModal from "./API/models/AddTodoModal";

function App() {
  const [allTodos, setAllTodos] = useState(null);
  const [isAddTodo, setIsAddTodo] = useState(false);

  useEffect(function () {
    getTodos();
  }, []);

  // get allTodos
  const getTodos = () => {
    console.log(">>>> getTodos function ran");

    getAllTodos()
      .then((res) => {
        console.log(res, ">>> resss");
        setAllTodos(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // delete todo integration
  let delTodo = (id) => {
    deleteTodo(id)
      .then((res) => {
        console.log(res?.data);
        getTodos();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(allTodos, ">>>allTodossss");
  return (
    <div className="App">
      <h3>App Component</h3>
      <button onClick={() => setIsAddTodo(true)}>Add Todo</button>
      {!isAddTodo ? (
        <div>
          {allTodos &&
            allTodos.map((todo) => {
              return (
                <li>
                  {todo.first_name} <button>Edit</button>
                  <button onClick={() => delTodo(todo?.id)}>Delete</button>
                </li>
              );
            })}
        </div>
      ) : (
        <AddTodoModal setIsAddTodo={setIsAddTodo} getTodos={getTodos} />
      )}
    </div>
  );
}

export default App;
