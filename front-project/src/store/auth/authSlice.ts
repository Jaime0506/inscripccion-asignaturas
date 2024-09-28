import { createSlice } from '@reduxjs/toolkit';

import type { AuthType } from '../../types/redux';

const initialState: AuthType = {
    status: "not-authenticated",
    user: null,
    errorMessage: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        checking: (state) => {
            state.status = "checking"
        }
    },
});

export const { checking } = authSlice.actions;