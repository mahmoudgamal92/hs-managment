import { StyleSheet, Dimensions } from "react-native";


const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: width * 0.8,
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    message: {
        fontSize: 15,
        marginBottom: 20,
        textAlign: "center",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 6,
        alignItems: "center",
        marginHorizontal: 5,
    },
    cancelButton: {
        backgroundColor: "#ddd",
    },
    confirmButton: {
        backgroundColor: "#d7bfa6",
    },
    buttonText: {
        fontSize: 15,
        fontWeight: "600",
    },
    cancelButtonText: {
        color: "#333",
    },
    confirmButtonText: {
        color: "#fff",
    },
});
