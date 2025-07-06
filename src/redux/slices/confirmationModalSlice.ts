import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ConfirmationModalState = {
    visible: boolean;
    title: string;
    message: string;
    confirmText: string;
    cancelText: string;
};

const initialState: ConfirmationModalState = {
    visible: false,
    title: "",
    message: "",
    confirmText: "Confirm",
    cancelText: "Cancel",
};

const confirmationModalSlice = createSlice({
    name: "confirmationModal",
    initialState,
    reducers: {
        showModal: (
            state,
            action: PayloadAction<{
                title: string;
                message: string;
                confirmText?: string;
                cancelText?: string;
            }>
        ) => {
            state.visible = true;
            state.title = action.payload.title;
            state.message = action.payload.message;
            state.confirmText = action.payload.confirmText || "Confirm";
            state.cancelText = action.payload.cancelText || "Cancel";
        },
        hideModal: (state) => {
            state.visible = false;
            state.title = "";
            state.message = "";
            state.confirmText = "Confirm";
            state.cancelText = "Cancel";
        },
    },
});

export const { showModal, hideModal } = confirmationModalSlice.actions;

export default confirmationModalSlice.reducer;
