import React, { useState } from "react";

import {
    Text,
    View,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import {
    Feather,
    MaterialIcons,
    FontAwesome5
} from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import styles from "../../theme/style";
import { TextInput } from "react-native-gesture-handler";
import { ArrivalTypes } from "../../const/api";
import Constants from 'expo-constants';

export default function HotelPreOrder({ route, navigation }) {
    const { hotel, room, filters, reservation } = route.params;

    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [arrivals, setArrivals] = useState(0);


    const reservation_info = {
        room_count: reservation?.room_count,
        total: reservation?.total,
        ApplicantName: fullName,
        ApplicantMobileNumber: phoneNumber,
        Arrivals: arrivals,
    }

    function toEnglishNumber(strNum) {
        const arabicNumbers = "٠١٢٣٤٥٦٧٨٩".split("");
        const englishNumbers = "0123456789".split("");
        strNum = strNum.replace(
            /[٠١٢٣٤٥٦٧٨٩]/g,
            x => englishNumbers[arabicNumbers.indexOf(x)]
        );
        strNum = strNum.replace(/[^\d]/g, "");
        return strNum;
    }

    const _proceedToCheckout = () => {

        if (fullName == "" || phoneNumber == "" || arrivals == 0) {
            alert("جميع الحقول مطلوبه");
        }

        else {
            navigation.navigate("HotelConfirm", {
                hotel: hotel,
                room: room,
                filters: filters,
                reservation: reservation_info
            })
        }

    }
    return (
        <View style={{
            paddingTop: Constants.statusBarHeight,

        }}>
            <StatusBar barStyle="default" backgroundColor="#34ace0" />

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
                    تأكيد الحجز
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
                marginVertical: 20
            }}>
                <View
                    style={{
                        paddingHorizontal: 5,
                        paddingVertical: 10,
                        marginTop: 10,
                        width: "100%",
                        paddingHorizontal: 10
                    }}>

                    <Text
                        style={{
                            fontFamily: "Bold",
                            textAlign: "right",
                            marginBottom: 5,
                            color: "#000",
                            zIndex: 10,
                            marginBottom: 20
                        }}>
                        أدخل المعلومات التالية
                    </Text>



                    <View style={{
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontFamily: "Bold",
                            color: "#000",
                            textAlign: "right",
                            width: "100%",
                            marginVertical: 5
                        }}>
                            الأسم ثلاثي
                        </Text>
                        <TextInput
                            placeholder="أدخل الأسم ثلاثي"
                            onChangeText={(text) => setFullName(text)}
                            style={{
                                height: 50,
                                backgroundColor: "#FFF",
                                width: "100%",
                                borderRadius: 25,
                                fontFamily: "Regular",
                                paddingHorizontal: 10,
                                borderWidth: 1,
                                borderColor: "#DDDDDD",
                                textAlign: "right"
                            }} />
                    </View>

                    <View style={{
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>

                        <Text style={{
                            fontFamily: "Bold",
                            color: "#000",
                            textAlign: "right",
                            width: "100%",
                            marginVertical: 5
                        }}>
                            رقم الهاتف
                        </Text>
                        <TextInput
                            placeholder="أدخل رقم الهاتف"
                            keyboardType="numeric"
                            onChangeText={(text) => setPhoneNumber(toEnglishNumber(text))}
                            style={{
                                height: 50,
                                backgroundColor: "#FFF",
                                width: "100%",
                                borderRadius: 25,
                                fontFamily: "Regular",
                                paddingHorizontal: 10,
                                borderWidth: 1,
                                borderColor: "#DDDDDD",
                                textAlign: "right"
                            }} />
                    </View>

                    <Text style={{
                        fontFamily: "Bold",
                        color: "#000",
                        textAlign: "right",
                        width: "100%",
                        marginVertical: 5
                    }}>
                        الأشخاص القادمون
                    </Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={{ fontFamily: "Regular", fontSize: 12 }}
                        data={ArrivalTypes}
                        //search
                        maxHeight={300}
                        labelField="title"
                        valueField="id"
                        placeholder="الأشخاص القادمون"
                        onChange={(item) => {
                            setArrivals(item.id);
                        }}

                        renderLeftIcon={() =>
                            <MaterialIcons
                                style={styles.icon}
                                name="keyboard-arrow-down"
                                size={24}
                                color={"grey"}
                            />}
                        renderRightIcon={() =>
                            <Feather
                                style={styles.icon}
                                color={"grey"}
                                name="user"
                                size={20}
                            />}
                    />

                </View>


                <TouchableOpacity
                    onPress={() => _proceedToCheckout()}
                    style={{
                        width: "100%",
                        backgroundColor: "#34ace0",
                        padding: 10,
                        borderRadius: 25,
                        marginVertical: 20
                    }}>
                    <Text style={{
                        textAlign: "center",
                        fontFamily: "Bold",
                        color: "#FFF"
                    }}>
                        متابعة
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}