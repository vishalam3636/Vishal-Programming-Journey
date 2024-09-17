import axios from "axios";

const base_url = process.env.REACT_APP_BASE_URL;

// Get All Todos
export const getAllTodos = async () => {
  try {
    let todos = await axios.get(`http://localhost:8000/api/todos`);
    let data = await todos.data;
    return data;
  } catch (err) {
    console.log(err, ">>> error in gettting all todos");
    return err;
  }
};

// Add Todo
export const addTodo = async (newtodo) => {
  try {
    console.log(newtodo, ">>> newtodo to get add");
    const addTodo = await axios.post(
      `http://localhost:8000/api/todos`,
      newtodo
    );
    return addTodo.data;
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error; // rethrow the error for further handling if needed
  }
};

// Delete Todo
export const deleteTodo = async (id) => {
  let deleteTodo = await axios.delete(`http://localhost:8000/api/todos/${id}`);
  let data = await deleteTodo.data;
  return data;
};

// Update Todo
