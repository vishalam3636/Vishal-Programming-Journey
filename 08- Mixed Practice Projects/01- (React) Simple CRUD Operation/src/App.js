import "./App.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setUsers(res);
      });
  }, []);

  const handleAdd = () => {
    let newUser = {
      id: users.length + 1,
      name: user,
    };
    setUsers([...users, newUser]);
    setUser("");
  };

  const handleDelete = (user) => {
    const copyUsers = [...users];
    let indexOfUser = copyUsers.indexOf(user);
    copyUsers.splice(indexOfUser, 1);
    setUsers(copyUsers);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);

    setUser(user.name);
  };

  const handleUpdate = () => {
    const copyUsers = [...users];

    const indexOfUpdatingUser = copyUsers.indexOf(selectedUser);

    let updatedUser = { ...selectedUser, name: user };
    copyUsers[indexOfUpdatingUser] = updatedUser;

    setUsers(copyUsers);
    setSelectedUser(null);
    setUser("");
  };

  // console.log(users, ">>>>>>>users");
  // console.log(user, ">>>>>>>>user");
  return (
    <div className="App">
      <h2>Simple CRUD App</h2>

      <div className="fieldContainer">
        <input
          onChange={(e) => setUser(e.target.value)}
          value={user}
          placeholder="User Name"
        />
        {!selectedUser ? (
          <button onClick={handleAdd}>Add User</button>
        ) : (
          <button onClick={handleUpdate}>Update User</button>
        )}
      </div>

      <div className="userContainer">
        <ul>
          {users.map((user, index) => {
            return (
              <li>
                <p>{user.id}.</p>
                <p>{user.name}</p>

                <div className="buttonContainer">
                  <button onClick={() => handleEdit(user)}>Edit</button>
                  <button onClick={() => handleDelete(user)}>Delete</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
