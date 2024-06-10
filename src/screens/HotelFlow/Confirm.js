import React, { useState } from "react";
import {
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { sendHotelRequest } from '../../network';
import Constants from 'expo-constants';

export default function HotelConfirm({ route, navigation }) {
    const { hotel, room, filters, reservation } = route.params;
    const [loading, setLoading] = useState(false);

    const params = {
        CategoryId: room?.categoryId,
        HotelId: hotel?.hotelID,
        DateFrom: filters?.DateFrom,
        DateTo: filters?.DateTo,
        roomAvailableID: room?.roomAvailableID,
        RoomNumber: reservation?.room_count,
        ApplicantName: reservation?.ApplicantName,
        ApplicantMobileNumber: reservation?.ApplicantMobileNumber,
        AdultsNumber: filters?.AdultsNumber,
        KidsNumber: filters?.KidsNumber,
        TotalPrice: reservation?.total
    }
    // https://services.alhajz-alsarea.com/api/Reservation/SaveHotelRequest?CategoryId=1&HotelId=7&DateFrom=5-6-2024&DateTo=5-7-2024&RoomAvailableID=undefined&RoomNumber=4&ApplicantName=Hiyt jygg hh&ApplicantMobileNumber=6325695&Arrivals=1&AdultsNumber=1&KidsNumber=1&TotalPrice=180000
    const _placeOrder = async () => {
        setLoading(true);
        const response = await sendHotelRequest(params);
        console.log(response);
        setLoading(false);
        alert("تم إضافة طبلك بنجاح");
        navigation.replace("TabNavigator");
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
                            textAlign: "center",
                            marginBottom: 5,
                            color: "#000",
                            zIndex: 10,
                            marginBottom: 20
                        }}>
                        ملخص الطلب
                    </Text>
                </View>


                <View style={{
                    paddingHorizontal: 20,
                    flexDirection: "row-reverse",
                    paddingVertical: 10,
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottomWidth: 1,
                    borderBottomColor: "#DDDDDD"
                }}>
                    <Text style={{ fontFamily: "Bold" }}>
                        الأسم بالكامل :
                    </Text>

                    <Text style={{ fontFamily: "Regular" }}>
                        {reservation?.ApplicantName}
                    </Text>
                </View>


                <View style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottomWidth: 1,
                    borderBottomColor: "#DDDDDD"
                }}>
                    <Text style={{ fontFamily: "Bold" }}>
                        رقم الهاتف
                    </Text>

                    <Text style={{ fontFamily: "Regular" }}>
                        {reservation?.ApplicantMobileNumber}
                    </Text>
                </View>


                <View style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottomWidth: 1,
                    borderBottomColor: "#DDDDDD"
                }}>
                    <Text style={{ fontFamily: "Bold" }}>
                        عدد الغرف
                    </Text>

                    <Text style={{ fontFamily: "Regular" }}>
                        {reservation?.room_count}
                    </Text>
                </View>



                <View style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottomWidth: 1,
                    borderBottomColor: "#DDDDDD"
                }}>
                    <Text style={{ fontFamily: "Bold" }}>
                        تاريخ الوصول :
                    </Text>

                    <Text style={{ fontFamily: "Regular" }}>
                        {filters?.DateFrom}
                    </Text>
                </View>




                <View style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottomWidth: 1,
                    borderBottomColor: "#DDDDDD"
                }}>
                    <Text style={{ fontFamily: "Bold" }}>
                        تاريخ المغادرة :
                    </Text>

                    <Text style={{ fontFamily: "Regular" }}>
                        {filters?.DateTo}
                    </Text>
                </View>




                <View style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottomWidth: 1,
                    borderBottomColor: "#DDDDDD"
                }}>
                    <Text style={{ fontFamily: "Bold" }}>
                        عدد الأطفال
                    </Text>

                    <Text style={{ fontFamily: "Regular" }}>
                        {filters?.KidsNumber}
                    </Text>
                </View>






                <View style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottomWidth: 1,
                    borderBottomColor: "#DDDDDD"
                }}>
                    <Text style={{ fontFamily: "Bold" }}>
                        عدد البالغين
                    </Text>

                    <Text style={{ fontFamily: "Regular" }}>
                        {filters?.AdultsNumber}
                    </Text>
                </View>




                <View style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottomWidth: 1,
                    borderBottomColor: "#DDDDDD"
                }}>
                    <Text style={{ fontFamily: "Bold" }}>
                        المبلغ الإجمالي :
                    </Text>

                    <Text style={{ fontFamily: "Regular" }}>
                        {reservation?.total} د.ع
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => _placeOrder()}

                    style={{
                        width: "100%",
                        backgroundColor: "#34ace0",
                        padding: 10,
                        borderRadius: 10,
                        marginVertical: 20
                    }}>
                    {loading == true ?
                        <ActivityIndicator size={40} color={"#FFF"} />
                        :
                        <Text style={{
                            textAlign: "center",
                            fontFamily: "Bold",
                            color: "#FFF"
                        }}>
                            تأكيد الطلب
                        </Text>
                    }
                </TouchableOpacity>
            </View>
        </View>
    );
}