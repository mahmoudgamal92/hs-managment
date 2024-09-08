import React, { useState } from "react";
import {
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    ActivityIndicator,
    Modal
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { sendHotelRequest, sendWhatsappMsg } from '../../network';
import Constants from 'expo-constants';
import styles from "./../../theme/style";

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


    const _placeOrder = async () => {
        setLoading(true);
        try {
            const response = await sendHotelRequest(params);

            if (response.success) {
                const userName = response.data.userName;
                const linkUrl = response.data.linkUrl;
                const phoneNumber = response.data.phoneNumber;

                let msg = `\u202B
                السلام عليكم ورحمه الله وبركاته
                
                السيد المحترم / ${userName}
                
                لديك طلب جديد، الرجاء الضغط على هذا الرابط لمشاهدة التفاصيل:
                ${linkUrl}
                
                مع تحيات إدارة تطبيق الحجز السريع بالعراق
                \u202C`;

                await sendWhatsappMsg(phoneNumber, msg);
                setLoading(false)
                alert("تم إضافة طلبك بنجاح");
                navigation.replace("TabNavigator");
                console.log(response);
            } else {
                console.log(response);
                alert("حدث خطأ أثناء إضافة الطلب.");
            }
        } catch (error) {
            console.error('Error placing order:', error);
            alert("حدث خطأ أثناء إضافة الطلب.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <View style={{
            paddingTop: Constants.statusBarHeight,

        }}>
            <StatusBar barStyle="default" backgroundColor="#34ace0" />
            <Modal
                transparent={true}
                animationType="fade"
                visible={loading}
                onRequestClose={() => setLoading(false)}
            >
                <View style={styles.overlay}>
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#34ace0" />
                        <Text style={styles.loadingText}>
                            جار إرسال طلبك الرجاء الإنتظار  لحين الإكتمال ...
                        </Text>
                    </View>
                </View>
            </Modal>
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

                    <Text style={{
                        textAlign: "center",
                        fontFamily: "Bold",
                        color: "#FFF"
                    }}>
                        أضغط هنا لإرسال الطلب
                    </Text>

                </TouchableOpacity>
            </View>
        </View>
    );
}