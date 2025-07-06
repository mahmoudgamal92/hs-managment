import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice';
import { tokenSlice } from './slices/tokenSlice';
import confirmationModalReducer from "./slices/confirmationModalSlice";

export const store = configureStore({
    reducer: {
        userReducer: userSlice.reducer,
        tokenReducer: tokenSlice.reducer,
        confirmationModal: confirmationModalReducer,

    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




