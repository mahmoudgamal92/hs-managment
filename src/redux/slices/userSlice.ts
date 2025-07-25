import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    user: ""
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.user = action.payload;
        },
    }
});
