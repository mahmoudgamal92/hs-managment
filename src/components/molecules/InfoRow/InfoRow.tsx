
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import { styles } from './styles';

interface Props {
    label: string;
    value: string
}

export const InfoRow: React.FC<Props> = (props) => {
    const { label, value } = props;
    return (
        <View style={styles.row}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value || '-'}</Text>
        </View>
    )
}