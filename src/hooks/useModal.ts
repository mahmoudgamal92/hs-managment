import { useDispatch } from "react-redux";
import { showModal } from '@redux/slices/confirmationModalSlice';
import { setConfirmCallback } from "@utils/confirmationModalService";

type ModalOptions = {
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
};

export const useModal = () => {
    const dispatch = useDispatch();

    const confirm = (options: ModalOptions) => {
        // Store the callback outside Redux
        setConfirmCallback(options.onConfirm ?? null);

        // Dispatch only serializable data
        dispatch(
            showModal({
                title: options.title,
                message: options.message,
                confirmText: options.confirmText,
                cancelText: options.cancelText,
            })
        );
    };

    return { confirm };
};
