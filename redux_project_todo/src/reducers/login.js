import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducer: {
        toggle_login: (state) => !state
    }

})

export const { toggle_login } = loginSlice.actions;

export default loginSlice.reducer;