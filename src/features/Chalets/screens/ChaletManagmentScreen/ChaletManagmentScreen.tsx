import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
    TextInput
} from "react-native";
import { BaseLayout, DatePicker, Header } from '@components';
import { Offer } from "@components";
import Checkbox from 'expo-checkbox';
import { offerTypes } from "@constants";
import { colors } from "@theme";
import { useChalets } from "@features/Chalets/hooks/useChalets";

export const ChaletManagmentScreen = ({ route, navigation }) => {
    const [loading, setLoading] = useState(false);
    const { updateOffer } = useChalets({
        onSuccess: () => {
            alert('تم تحديث بيانات الحجز بنجاح');
        }
    });
    const [reservAvalible, setReservAvalible] = useState<boolean>(false);
    const [price, setPrice] = useState<string>('');

    const { data } = route.params;
    const chaletDetails = data.data[0];
    const offers = data.data[0].offerDetailsList;


    const handleToggleReserve = (value: boolean) => {
        setReservAvalible(value)
    };

    const handlePriceChange = (value: string) => {
        setPrice(value);
        // console.log('Price changed:', value);
    };



    return (
        <BaseLayout>
            <Header text="تفاصيل الحجز" goBack={() => navigation.goBack()} />
            <View style={{
                padding: 10
            }}>
                <View style={{
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontFamily: 'Bold'
                    }}>
                        {chaletDetails.chaletName}
                    </Text>
                    <Text style={{
                        fontFamily: 'Regular'
                    }}>
                        {chaletDetails.offerDate}
                    </Text>
                </View>
                {offers.map((offer) => (
                    <Offer
                        shifTitle={offer.offerTypeName}
                        reserveAvailable={offer.reserveAvailable}
                        offerID={offer.offerID}
                        price={offer.price.toString()}
                        onToggleReserve={handleToggleReserve}
                        onPriceChange={handlePriceChange}
                    />
                ))}

                <TouchableOpacity
                    onPress={() => updateOffer({ price, reservAvalible, offer: offers[0] })}
                    style={{
                        width: "100%",
                        backgroundColor: colors.BEIGE,
                        padding: 10,
                        borderRadius: 10,
                        marginVertical: 15
                    }}>
                    {loading == true ?

                        <ActivityIndicator size={40} color={colors.WHITE} />
                        :
                        <Text style={{
                            textAlign: "center",
                            fontFamily: "Bold",
                            color: colors.WHITE
                        }}>
                            حفظ
                        </Text>
                    }
                </TouchableOpacity>
            </View>
        </BaseLayout >
    );
}