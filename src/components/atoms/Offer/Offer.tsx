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
};

export const Offer = (props: OfferProps) => {
    const { shifTitle, reserveAvailable, offerID, price } = props;

    const [resrv, setReserv] = React.useState(reserveAvailable ?? false);
    const [localPrice, setLocalPrice] = React.useState(price);

    return (
        <View style={{ paddingHorizontal: 20 }}>
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
                            fontSize: 12
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
                        width: '60%',
                        paddingTop: 10,
                    }}>
                        <ToggleSwitch
                            isOn={resrv}
                            onColor="green"
                            offColor="red"
                            label={resrv ? 'متاح للحجز' : 'غير متاح للحجز'}
                            size="medium"
                            labelStyle={{ fontFamily: 'Bold', fontSize: 12 }}
                            onToggle={() => { }
                            }
                        />
                    </View>

                    <View style={{
                        width: '40%',
                        alignItems: 'flex-end'
                    }}>
                        <Text style={{ fontFamily: 'Bold', fontSize: 16 }}>
                            السعر : {localPrice}
                        </Text>

                    </View>
                </View>
            </View>
        </View>
    );
};
