import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';
import { colors } from '@theme';
import ToggleSwitch from 'toggle-switch-react-native';
import { styles } from './styles';


type OfferProps = {
    shifTitle: string;
    reserveAvailable?: boolean;
    offerID: string;
    price: string;
    onToggleReserve: (value: boolean) => void;
    onPriceChange: (value: string) => void;
};

export const Offer = (props: OfferProps) => {
    const { shifTitle, reserveAvailable, offerID, price, onToggleReserve, onPriceChange } = props;

    const [resrv, setReserv] = React.useState(reserveAvailable ?? false);
    const [localPrice, setLocalPrice] = React.useState(price);

    const handleToggle = (isOn: boolean) => {
        setReserv(isOn);
        onToggleReserve(isOn);
    };

    const handlePriceChange = (value: string) => {
        setLocalPrice(value);
        onPriceChange(value);
    };

    return (
        <View style={{ padding: 20 }}>
            <View style={styles.offerContainer}>
                <View style={{ flexDirection: 'row-reverse' }}>
                    <View style={{
                        backgroundColor: colors.BEIGE,
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        borderRadius: 10
                    }}>
                        <Text style={{
                            fontFamily: 'Bold',
                            color: colors.WHITE,
                            fontSize: 16
                        }}>
                            {shifTitle}
                        </Text>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        width: '50%'
                    }}>
                        <ToggleSwitch
                            isOn={resrv}
                            onColor="green"
                            offColor="red"
                            label={resrv ? 'متاح للحجز' : 'غير متاح للحجز'}
                            size="large"
                            labelStyle={{ fontFamily: 'Bold' }}
                            onToggle={handleToggle}
                        />
                    </View>

                    <View style={{
                        width: '50%',
                        alignItems: 'flex-end'
                    }}>
                        <Text style={{ fontFamily: 'Bold', fontSize: 16 }}>
                            السعر :
                        </Text>
                        <TextInput
                            placeholder="أدخل السعر"
                            keyboardType="number-pad"
                            value={localPrice}
                            onChangeText={handlePriceChange}
                            style={styles.textInput}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};
