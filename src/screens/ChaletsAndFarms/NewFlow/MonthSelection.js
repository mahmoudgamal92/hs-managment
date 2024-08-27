import React from "react";
import moment from "moment";
import {
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    FlatList
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Constants from 'expo-constants';
import Entypo from '@expo/vector-icons/Entypo';
import { GetAvaliableOffersByDate } from "./../../../network/index";

export default function HotelConfirm({ route, navigation }) {
    const { chalet } = route.params;

    // Generate months starting from the current month
    const startMonth = moment().startOf('month');
    const months = Array.from({ length: 12 }, (_, i) => {
        const currentMonth = startMonth.clone().add(i, 'months');
        return {
            name: `الشهر ${currentMonth.month() + 1} - ${currentMonth.format("YYYY")}`, // Month name with year
            startDate: currentMonth.format("MM-DD-YYYY"),
            endDate: currentMonth.endOf('month').format("MM-DD-YYYY")
        };
    });

    const _GetAvaliableOffersByDate = async (item) => {
        const offers = await GetAvaliableOffersByDate(chalet.chaletID, item);
        console.log(offers);

        if (Array.isArray(offers)) {
            navigation.navigate('Offers', {
                chalet: chalet,
                offers: offers
            });
        }
        else {
            alert('لا توجد اي مواعيد متاحه للحجز في هذا الشهر')
        }
    }

    const renderMonth = ({ item }) => (
        <TouchableOpacity
            onPress={() => _GetAvaliableOffersByDate(item)}
            style={{
                width: '50%',
                padding: 10,

            }}>
            <View style={{
                backgroundColor: "#00AA76",
                height: 50,
                alignItems: 'center',
                flexDirection: 'row-reverse',
                justifyContent: 'center',
                borderRadius: 10
            }}>
                <Entypo name="calendar" size={24} color="#FFF" style={{ marginHorizontal: 5 }} />
                <Text style={{
                    color: '#FFF',
                    fontFamily: 'Bold',
                    textAlign: 'right', // Align text to the right
                    fontSize: 12
                }}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={{
            paddingTop: Constants.statusBarHeight,
            flex: 1,
        }}>

            <StatusBar translucent backgroundColor="#34ace0" />
            <View
                style={{
                    width: "100%",
                    flexDirection: "row-reverse",
                    justifyContent: "space-between",
                    height: 60,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#34ace0"
                }}>
                <Text style={{ fontFamily: "Bold", color: "#FFF", fontSize: 20 }}>
                    اختيار شهر
                </Text>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ position: "absolute", right: 20 }}
                >
                    <Feather name="arrow-right" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>

            <View style={{
                paddingHorizontal: 20,
                marginVertical: 20,
                width: '100%',
                flex: 1
            }}>

                <Text style={{
                    color: 'red',
                    fontFamily: 'Bold',
                    marginVertical: 20
                }}>
                    * لمعرفه الحجوزات المتوفره يجب عليك اختيار شهر اولا :
                </Text>

                <FlatList
                    data={months}
                    renderItem={renderMonth}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                />
            </View>
        </View>
    );
}
