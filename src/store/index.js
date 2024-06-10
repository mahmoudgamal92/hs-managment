import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice';
import { tokenSlice } from './slices/tokenSlice';

export const store = configureStore({
    reducer: {
        userReducer: userSlice.reducer,
        tokenReducer: tokenSlice.reducer
    }
})


