import { colors } from '@theme';
import Checkbox from 'expo-checkbox';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    offerContainer: {
        borderWidth: 1,
        borderColor: colors.BEIGE,
        width: '100%',
        borderRadius: 10,
        padding: 10,
        backgroundColor: colors.WHITE
    },
    textInput: {
        height: 40,
        backgroundColor: "#FFF",
        width: "100%",
        borderRadius: 5,
        fontFamily: "Regular",
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#DDDDDD",
        textAlign: "right"
    },
    checkbox: {
        margin: 8,
    }
});
