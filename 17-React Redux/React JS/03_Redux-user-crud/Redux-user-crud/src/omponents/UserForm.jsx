import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/usersSlice.js";

export default function UserForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    const handleAddUser = () => {
        if (name && email) {
            dispatch(addUser({ id: Date.now(), name, email }));
            setName("");
            setEmail("");
        }
    };

    return (
        <div>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleAddUser}>Add User</button>
        </div>
    )
}
