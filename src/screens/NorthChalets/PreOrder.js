import React, { useState } from "react";

import {
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
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

export default function ChaletConfirm({ route, navigation }) {
    const { item, filters } = route.params;

    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [arrivals, setArrivals] = useState(0);
    const [adults, setAdults] = useState(0);
    const [additionalAdults, setAdditionalAdults] = useState(0);
    const [kids, setKids] = useState(0);


    const _handleArrivals = async () => {
        const max_coming = parseInt(item.adultsNumber) + parseInt(item.personsNumber);

        if (parseInt(adults) > parseInt(item.adultsNumber)) {

            if (parseInt(adults) > max_coming) {
                alert("الحد الأقصي لعدد القادمون : " + max_coming);
                setAdults(0);
                setAdditionalAdults(0)
            }


            else {
                setAdults(parseInt(item.adultsNumber));
                setAdditionalAdults(parseInt(adults) - parseInt(item.adultsNumber))
                console.log("Larger");
            }
        }

        else if (parseInt(adults) == parseInt(item.adultsNumber)) {
            console.log("Equal");
            setAdditionalAdults(0)
        }


        else {
            console.log("Smaller");
            setAdditionalAdults(0)
        }
    }



    const _handleConfirmOrder = () => {
        if (arrivals == 0 || phoneNumber == "" || fullName == "" || adults == 0) {
            alert("لابد من إكمال جميع البيانات");
        }

        else {
            navigation.navigate("NorthChaletConfirm", {
                order_info: order_info,
                chalet: item,
                filters: filters
            })
        }
    }
    const order_info = {
        ApplicantName: fullName,
        ApplicantMobileNumber: phoneNumber,
        AdultsNumber: adults,
        PersonsNumber: kids,
        Arrivals: arrivals,
        additionalAdults: additionalAdults
    }
    return (
        <KeyboardAvoidingView style={{
            paddingTop: Constants.statusBarHeight
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
            <ScrollView>

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
                            flexDirection: "row-reverse"
                        }}>


                            <View style={{
                                width: "50%",
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
                                width: "50%",
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
                                    onChangeText={(text) => setPhoneNumber(text)}
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
                        </View>

                        <View style={{
                            flexDirection: "row-reverse"
                        }}>

                            <View style={{
                                width: "50%"
                            }}>

                                <Text style={{
                                    fontFamily: "Bold",
                                    color: "#000",
                                    textAlign: "right",
                                    width: "100%",
                                    marginVertical: 5,

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
                                    placeholder=" القادمون"
                                    onChange={(item) => {
                                        setArrivals(item.id)
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

                            <View style={{
                                width: "50%",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Text style={{
                                    fontFamily: "Bold",
                                    color: "#000",
                                    textAlign: "right",
                                    width: "90%",
                                    marginVertical: 5,
                                    fontSize: 11
                                }}>
                                    {'عدد الأشخاص : من سن'} {item?.adultsAge} {'سنه'}
                                </Text>
                                <TextInput
                                    onChangeText={(text) => setAdults(text)}
                                    onEndEditing={_handleArrivals}
                                    value={adults.toString()}
                                    keyboardType="numeric"
                                    placeholder="أدخل عدد البالغين"
                                    style={{
                                        height: 50,
                                        backgroundColor: "#FFF",
                                        width: "90%",
                                        borderRadius: 25,
                                        fontFamily: "Regular",
                                        paddingHorizontal: 10,
                                        borderWidth: 1,
                                        borderColor: "#DDDDDD",
                                        textAlign: "right"
                                    }} />
                            </View>

                        </View>

                        <View style={{
                            flexDirection: "row-reverse",
                            alignItems: "center",
                            marginTop: 20,
                        }}>

                            <View style={{
                                width: "70%",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>

                                <Text style={{
                                    fontFamily: "Bold",
                                    color: "#000",
                                    textAlign: "right",
                                    width: "100%",
                                    marginVertical: 5,
                                }}>
                                    عدد الأشخاص الإضافيين (إن وجد)
                                </Text>
                                <TextInput

                                    keyboardType="numeric"
                                    editable={false}
                                    selectTextOnFocus={false}
                                    value={additionalAdults.toString()} // Convert to string since the state is expected to be a string
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

                        </View>





                    </View>

                    <TouchableOpacity
                        onPress={() => _handleConfirmOrder()}
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
            </ScrollView>

        </KeyboardAvoidingView>
    );
}