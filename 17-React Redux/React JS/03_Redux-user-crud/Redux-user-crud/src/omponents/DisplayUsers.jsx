import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../redux/usersSlice";


export default function DisplayUsers() {
    const users = useSelector((state) => state.users);
    console.log(users, ">>>>users list")

    const dispatch = useDispatch();

    const handleRemoveUser = (user) => {
        if(user){
            dispatch(removeUser(user))
        }
    }
    return (
        <div>
            <h2>Display Users</h2>
            <div>
                {users.users.map((user) => (
                    <div key={user.id} style={{border:"2px solid black", margin:"5px", padding:"10px", width:"300px"}}>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>

                        <button onClick={()=>handleRemoveUser(user.id)}>Remove User</button>
                    </div>
                ))}
            </div>
        </div>
    )
}