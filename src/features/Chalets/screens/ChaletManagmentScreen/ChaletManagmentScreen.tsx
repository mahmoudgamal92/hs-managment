import React, { useState } from "react";
import { Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { BaseLayout, Header, Offer } from "@components";
import { colors } from "@theme";
import { useChalets } from "@features/Chalets/hooks/useChalets";

export const ChaletManagmentScreen = ({ route, navigation }) => {
    const { data } = route.params;
    const chaletDays = data.data;


    const [loading, setLoading] = useState(false);
    const { updateOffer } = useChalets({
        onSuccess: () => {
            alert('تم تحديث بيانات الحجز بنجاح');
        }
    });
    const offers = data.data[0].offerDetailsList;

    const [reservAvalible, setReservAvalible] = useState<boolean>(offers[0].reserveAvailable);
    const [price, setPrice] = useState<string>(offers[0].price.toString());

    const handlePriceChange = (value: string) => {
        setPrice(value);
    };


    const handleToggleReserve = (value: boolean) => {
        setReservAvalible(value)
    };



    return (
        <BaseLayout>
            <Header text="تفاصيل الحجز" goBack={() => navigation.goBack()} />
            <ScrollView contentContainerStyle={{ padding: 20 }}>
                {chaletDays.map((day) => (
                    <View
                        key={day.offerDate}
                        style={{
                            borderWidth: 1,
                            borderColor: colors.BEIGE,
                            padding: 10,
                            borderRadius: 10,
                            marginBottom: 20,
                            alignItems: 'flex-end',
                        }}
                    >
                        <View style={{
                            backgroundColor: colors.BEIGE,
                            marginBottom: 10,
                            borderRadius: 5,
                            padding: 5

                        }}>
                            <Text style={{ fontFamily: "Bold", marginBottom: 5, textAlign: 'right', color: '#FFF' }}>
                                {day.offerDate.split("T")[0]}
                            </Text>
                        </View>

                        {day.offerDetailsList.map((offer) => (
                            <Offer
                                key={offer.offerID}
                                shifTitle={offer.offerTypeName}
                                reserveAvailable={offer.reserveAvailable}
                                price={offer.price.toString()}
                                offerID={""}
                                onPriceChange={handlePriceChange}
                                onToggleReserve={handleToggleReserve}
                                editibile={chaletDays.length === 1 ? true : false}
                            />
                        ))}

                        {chaletDays.length === 1 && (
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
                            </TouchableOpacity>)}
                    </View>
                ))}
            </ScrollView>
        </BaseLayout>
    );
};
