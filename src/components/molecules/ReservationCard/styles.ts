

import { colors } from '@theme';
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3
    },
    title: {
        fontFamily: 'Bold',
        textAlign: 'right',
        fontSize: 15,
        color: '#333'
    },
    subtitle: {
        fontFamily: 'Regular',
        textAlign: 'right',
        fontSize: 12,
        color: '#666',
    },
    section: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 12
    },
    sectionTitle: {
        textAlign: 'right',
        fontFamily: "Regular",
        fontSize: 16,
        color: colors.BEIGE,
        marginBottom: 8
    },
    row: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        paddingVertical: 6
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    button: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginHorizontal: 5
    },
    acceptButton: {
        backgroundColor: '#4CAF50'
    },
    rejectButton: {
        backgroundColor: '#F44336'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    }
});
