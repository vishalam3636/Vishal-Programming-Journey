import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com"
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane.smith@example.com"
        },
    ]
}


export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        removeUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        }
    }
});

export const { addUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;