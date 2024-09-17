const express = require("express");
const fs = require("fs");
const cors = require("cors"); // Import cors
const app = express();
const PORT = 8000;
const todos = require("./MOCK_TODO.json");

// MIDDLEWARE - plugin
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Enable CORS for all routes
app.use(cors()); // This will allow requests from all origins

//========== ROUTES =============//
// Get All Todos
app.get("/api/todos", (req, res) => {
  return res.json(todos);
});

// Get Single Todo
app.get("/api/todos/:id", (req, res) => {
  let id = Number(req.params.id);
  let findTodo = todos.find((todo) => todo.id === id);
  return res.json(findTodo);
});

// Add Todos
app.post("/api/todos", (req, res) => {
  const body = req.body;
  console.log(body);

  let lastTodo = todos[todos.length - 1];

  todos.push({ ...body, id: Number(lastTodo.id) + 1 });

  fs.writeFile("./MOCK_TODO.json", JSON.stringify(todos), (err, data) => {
    return res.json({ status: "Success", id: Number(lastTodo.id) + 1 });
  });
});

// Delete Todos
app.delete("/api/todos/:id", (req, res) => {
  let id = Number(req.params.id);
  console.log(id, ">>> delete todo id");

  let findTodo = todos.find((todo) => todo.id === id);
  let todoIndex = todos.indexOf(findTodo);

  todos.splice(todoIndex, 1);

  fs.writeFile("./MOCK_TODO.json", JSON.stringify(todos), (err, data) => {
    return res.json({ msg: "Successfully delted" });
  });
});

// Update A Todo
app.patch("/api/todos/:id", (req, res) => {
  let id = Number(req.params.id);
  const body = req.body;

  let findTodo = todos.find((todo) => todo.id === id);
  let todoIndex = todos.indexOf(findTodo);

  let updateTodo = { ...findTodo, ...body };

  todos[todoIndex] = updateTodo;

  fs.writeFile("./MOCK_TODO.json", JSON.stringify(todos), (err, result) => {
    return res.json({ msg: "Successfully updated", todo: { ...updateTodo } });
  });
});

app.listen(PORT, () => {
  console.log("Server started at port 8000");
});
