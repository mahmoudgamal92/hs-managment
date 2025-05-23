
import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: "#fff",
        height: 55,
        borderRadius: 100,
        paddingHorizontal: 8,
        fontFamily: "Regular",
        width: "100%",
        borderColor: "#DDDDDD",
        borderWidth: 1,
        textAlign: "right"
    },
    icon: {
        marginRight: 5
    },
    label: {
        position: "absolute",
        backgroundColor: "white",
        fontFamily: "Regular",
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14
    },
    placeholderStyle: {
        fontSize: 12,
        fontFamily: "Bold",
        paddingHorizontal: 10,
        color: "#000",
        textAlign: "right",

    },
    selectedTextStyle: {
        fontSize: 13,
        textAlign: "right",
        fontFamily: "Regular",
        marginHorizontal: 10,
    },
    iconStyle: {
        width: 20,
        height: 20
    },

    btnText: {
        fontSize: 20,
        color: "#FFF",
        fontFamily: "Bold"
    },
    headline: {
        fontSize: 20,
        marginTop: 10,
        textAlign: "center",
        fontFamily: "Bold"
    }
});