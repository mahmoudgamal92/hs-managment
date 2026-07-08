import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Text } from '@components';
import { PRIVACY_URL } from '@constants';
import { colors } from '@theme';

export const DashboardHeader = () => (
    <View style={styles.header}>
        <TouchableOpacity onPress={() => Linking.openURL(PRIVACY_URL)}>
            <Text style={styles.privacyText}>سياسة الخصوصية</Text>
        </TouchableOpacity>

        <View style={styles.contact}>
            <Text style={styles.contactText}>للإستفسار + واتساب</Text>
            <Text style={styles.contactText}>07824846025</Text>
        </View>

        <Image
            resizeMode="contain"
            source={require('@assets/logo.png')}
            style={styles.logo}
        />
    </View>
);

const styles = StyleSheet.create({
    header: {
        paddingTop: 50,
        paddingBottom: 12,
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.BEIGE,
    },
    logo: {
        width: 50,
        height: 50,
    },
    contact: {
        alignItems: 'center',
        gap: 2,
    },
    contactText: {
        fontFamily: 'Regular',
        color: colors.WHITE,
        fontSize: 12,
    },
    privacyText: {
        fontFamily: 'Bold',
        fontSize: 10,
        color: colors.WHITE,
        textDecorationLine: 'underline',
    },
});
