import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux";
import { hideModal } from '@redux/slices/confirmationModalSlice';
import { styles } from "./styles";
import { runConfirmCallback } from "@utils/confirmationModalService";

export const ConfirmationModal = () => {
    const dispatch = useDispatch();
    const {
        visible,
        title,
        message,
        confirmText,
        cancelText,
    } = useSelector((state: RootState) => state.confirmationModal);

    const handleConfirm = () => {
        runConfirmCallback();
        dispatch(hideModal());
    };

    const handleCancel = () => {
        dispatch(hideModal());
    };

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={handleCancel}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={[styles.button, styles.cancelButton]}
                            onPress={handleCancel}
                        >
                            <Text style={[styles.buttonText, styles.cancelButtonText]}>
                                {cancelText}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.confirmButton]}
                            onPress={handleConfirm}
                        >
                            <Text style={[styles.buttonText, styles.confirmButtonText]}>
                                {confirmText}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};
