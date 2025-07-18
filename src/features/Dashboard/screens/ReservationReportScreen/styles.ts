import { colors } from "@theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.WHITE
    },
    tabber: {
        flexDirection: "row-reverse",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 5,
        backgroundColor: "#FFF",
        borderRadius: 20,
        borderColor: "#DDDDDD",
        borderWidth: 1,
        overflow: "hidden",
        height: 50,
    },
    header: {
        paddingTop: 50,
        width: "100%",
        paddingHorizontal: 20,
        backgroundColor: colors.BEIGE,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 5
    },

    itemTitle: {
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingHorizontal: 10,
        borderRadius: 5,
        color: colors.WHITE,
        fontFamily: "Regular",
        fontSize: 16,
        zIndex: 10000
    },
    body: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 5
    },
    itemContent: {
        alignItems: "flex-end",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 150
    },
    featuredItem: {
        height: 150,
        alignItems: "flex-start",
        padding: 5,
        flexDirection: "row-reverse"
    },
    itemImg: {
        width: "100%",
        resizeMode: "cover",
        height: 300,
        borderRadius: 10,
        overflow: "hidden",
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },
    imgLayer: {
        position: "absolute",
        margin: 2.5,
        zIndex: 1000,
        width: "100%",
        height: 300,
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: 5
    },
    logo: {
        width: 50,
        height: 50,
        padding: 5,
        borderRadius: 26,
        borderWidth: 1,
        borderColor: "#000"
    },

    itemContainer: {
        borderRadius: 15,
        overflow: "hidden",
        width: "50%",
        height: 300,
        padding: 2.5,
        marginVertical: 5
    },
    item: {
        width: "100%"
    },

    cats: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
        flexWrap: "wrap",
        width: "100%"
    },

    cat: {
        backgroundColor: "#FFF",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        borderRadius: 15,
        paddingHorizontal: 5,
        paddingVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,

        elevation: 13
    },

    catItem: {
        borderRadius: 30,
        width: 60,
        height: 60,
        resizeMode: "contain"
    },

    catText: {
        marginVertical: 5,
        fontFamily: "Bold",
        color: "#143656",
        fontSize: 10,
        textAlign: "center"
    },
    dropdown: {
        backgroundColor: "#fff",
        height: 55,
        borderRadius: 20,
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
});
