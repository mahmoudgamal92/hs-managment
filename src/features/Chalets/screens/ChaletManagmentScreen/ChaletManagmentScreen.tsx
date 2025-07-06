import React from "react";
import { Text, View, ScrollView } from "react-native";
import { BaseLayout, Header, Offer } from "@components";
import { colors } from "@theme";

export const ChaletManagmentScreen = ({ route, navigation }) => {
    const { data } = route.params;
    const chaletDays = data.data;

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
                                price={offer.price.toString()} offerID={""}
                            />
                        ))}
                    </View>
                ))}
            </ScrollView>
        </BaseLayout>
    );
};
