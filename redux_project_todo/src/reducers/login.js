import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id: '',
    password: '',
    login: false
}

const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        save_id: (state, action) => {
            state.id = action.payload.id;
        },
        save_password: (state, action) => {
            state.password = action.payload.password;
        },
        toggle_login: state => {
            state.login = !state.login;
        }
    }

})

export const { save_id, save_password, toggle_login } = loginSlice.actions;

export default loginSlice.reducer;