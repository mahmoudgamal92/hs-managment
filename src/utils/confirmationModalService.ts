let confirmCallback: (() => void) | null = null;

export const setConfirmCallback = (callback: (() => void) | null) => {
    confirmCallback = callback;
};

export const runConfirmCallback = () => {
    if (confirmCallback) {
        confirmCallback();
        confirmCallback = null;
    }
};
