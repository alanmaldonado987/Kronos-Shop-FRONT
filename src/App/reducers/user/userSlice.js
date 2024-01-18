import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: "",
    role: "",
    token: "",
    isOnline: false
}

export let userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        loginUser: (state, action) => {
            state.email = action.payload.email;
            state.role = action.payload.role;
            state.token = action.payload.token;
            state.isOnline = action.payload.isOnline;
        },

        logoutUser:(state) => {
            state.email = "";
            state.password = "";
            state.role = "";
            state.token = "";
        }
    }
})

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;