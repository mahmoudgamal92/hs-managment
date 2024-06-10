import React, { useState } from "react";
import {
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    TextInput,
    ScrollView,
    ActivityIndicator
} from "react-native";
import {
    Feather,
    MaterialIcons,
} from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import Constants from 'expo-constants';
import styles from "../../theme/style";
import moment from "moment";
import { getHotels } from '../../network';
import { api, hotel_cities } from "../../const/api";
import Calender from "../../Components/Calender";

export default function Hotels({ route, navigation }) {
    const currentYear = new Date().getFullYear().toString();
    const currentMonth = (new Date().getMonth() + 1).toString().padStart(2, '0');
    const currentDay = new Date().getDate().toString().padStart(2, '0');

    const [startDate, setStartDate] = useState(`${currentMonth}-${currentDay}-${currentYear}`);
    const [endDate, setEndDate] = useState(moment().add(1, 'days').format('MM-DD-YYYY'));
    const [AdultsNumber, setAdultsNum] = useState("");
    const [KidsNumber, setKidsNumber] = useState("");
    const [cityID, setCityID] = useState("");
    const [loading, setLoading] = useState(false);

    const handleEndDateChange = (year, month, day) => {
        setEndDate(`${month}-${day}-${year}`);
    };

    const handleStartDateChange = (year, month, day) => {
        const newStartDate = `${month}-${day}-${year}`;
        setStartDate(newStartDate);

        // Calculate and set the end date to be one day after the start date
        const newEndDate = moment(newStartDate, 'MM-DD-YYYY').add(1, 'days').format('MM-DD-YYYY');
        setEndDate(newEndDate);
    };

    function checkValidDate(date1, date2) {
        const d1 = moment(date1, 'MM-DD-YYYY').toDate();
        const d2 = moment(date2, 'MM-DD-YYYY').toDate();
        if (isNaN(d1) || isNaN(d2)) {
            throw new Error('Invalid date');
        }
        return d1 < d2;
    }

    const _applySearch = async () => {
        if (startDate === "" || endDate === "" || cityID === "" || KidsNumber === "" || AdultsNumber === "") {
            alert("لابد من إكمال البيانات بشكل صحيح");
            return;
        }

        if (!checkValidDate(startDate, endDate)) {
            alert("تاريخ المغادرة لابد أن يكون أكبر من تاريخ الوصول");
            return;
        }

        setLoading(true);
        const params = {
            AdultsNumber: AdultsNumber,
            CityId: cityID,
            KidsNumber: KidsNumber,
            DateFrom: startDate,
            DateTo: endDate
        };

        console.log(params);
        const hotels = await getHotels(params);

        if (Array.isArray(hotels)) {
            hotels.length > 0 ? navigation.navigate("HotelResult", {
                hotels: hotels,
                filters: params
            }) : alert("لايوجد فنادق متاحة حاليا");
        } else {
            alert(hotels);
        }

        setLoading(false);
    };

    return (
        <View style={{
            paddingTop: Constants.statusBarHeight,
        }}>
            <StatusBar barStyle="default" backgroundColor="#34ace0" />
            <View
                style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    height: 60,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#34ace0"
                }}>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ position: "absolute", left: 20 }}
                >
                    <MaterialIcons name="arrow-back-ios-new" size={24} color="#FFF" />
                </TouchableOpacity>

                <Text style={{ fontFamily: "Bold", color: "#FFF", fontSize: 20 }}>
                    البحث عن فنادق
                </Text>

            </View>
            <ScrollView>

                <View style={{
                    paddingHorizontal: 20,
                    marginVertical: 10
                }}>
                    <View
                        style={{
                            marginTop: 10,
                            width: "100%",
                            paddingHorizontal: 10
                        }}>

                        <View style={{
                            flexDirection: "row-reverse",
                            alignItems: "center"
                        }}>

                            <Text
                                style={{
                                    fontFamily: "Bold",
                                    textAlign: "right",
                                    marginBottom: 5,
                                    color: "red",
                                    zIndex: 10,
                                }}>
                                أولا : {" "}
                            </Text>
                            <Text
                                style={{
                                    fontFamily: "Bold",
                                    textAlign: "right",
                                    marginBottom: 5,
                                    color: "#000",
                                    zIndex: 10,
                                }}>
                                وين تريد الفندق
                            </Text>
                        </View>

                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            itemTextStyle={{ fontFamily: "Regular", fontSize: 12 }}
                            data={hotel_cities}
                            maxHeight={300}
                            labelField="arabicName"
                            valueField="id"
                            placeholder="أختر المدينة"
                            onChange={item => {
                                setCityID(item.id);
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
                                    color={"#000"}
                                    name="home"
                                    size={20}
                                />}
                        />
                    </View>

                    <View style={{
                        paddingHorizontal: 15,
                    }}>
                        <Calender label={"ثانيا :"} title={"حدد تاريخ الوصول"} onDateChange={handleStartDateChange} plus={0} dropdownPosition={"bottom"} />
                        <Calender label={"ثالثا : "} title={"حدد تاريخ المغادرة "} onDateChange={handleEndDateChange} plus={1} dropdownPosition={"top"} />
                    </View>

                    <View style={{
                        flexDirection: "row-reverse",
                        alignItems: "center",
                        marginVertical: 10
                    }}>
                        <View style={{
                            width: "50%",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>

                            <View style={{
                                flexDirection: "row-reverse",
                                alignItems: "center"
                            }}>

                                <Text
                                    style={{
                                        fontFamily: "Bold",
                                        textAlign: "right",
                                        marginBottom: 5,
                                        color: "red",
                                        zIndex: 10,
                                    }}>
                                    رابعا : {" "}
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: "Bold",
                                        textAlign: "right",
                                        marginBottom: 5,
                                        color: "#000",
                                        zIndex: 10,
                                    }}>
                                    حدد عدد الأشخاص
                                </Text>
                            </View>

                            <TextInput
                                placeholder="فوق 4 سنوات"
                                onChangeText={(num) => setAdultsNum(num)}
                                keyboardType="numeric"
                                placeholderTextColor={"red"}
                                style={{
                                    height: 50,
                                    fontSize: 13,
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

                        <View style={{
                            width: "50%",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>

                            <View style={{
                                flexDirection: "row-reverse",
                                alignItems: "center"
                            }}>

                                <Text
                                    style={{
                                        fontFamily: "Bold",
                                        textAlign: "right",
                                        marginBottom: 5,
                                        color: "red",
                                        zIndex: 10,
                                    }}>
                                    خامسا : {" "}
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: "Bold",
                                        textAlign: "right",
                                        marginBottom: 5,
                                        color: "#000",
                                        zIndex: 10,
                                    }}>
                                    حدد عدد الأطفال
                                </Text>
                            </View>
                            <TextInput
                                placeholder="العمر من 0 ل 4 سنوات"
                                keyboardType="numeric"
                                placeholderTextColor={"red"}
                                onChangeText={(num) => setKidsNumber(num)}
                                style={{
                                    height: 50,
                                    backgroundColor: "#FFF",
                                    fontSize: 12,
                                    width: "90%",
                                    borderRadius: 25,
                                    fontFamily: "Regular",
                                    paddingHorizontal: 20,
                                    borderWidth: 1,
                                    borderColor: "#DDDDDD",
                                    textAlign: "right"
                                }} />
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => _applySearch()}
                        style={{
                            width: "100%",
                            backgroundColor: "#34ace0",
                            padding: 10,
                            borderRadius: 10,
                            marginVertical: 40
                        }}>
                        {loading ?
                            <ActivityIndicator size={40} color={"#FFF"} />
                            :
                            <Text style={{
                                textAlign: "center",
                                fontFamily: "Bold",
                                color: "#FFF"
                            }}>
                                إضغط هنا للبحث
                            </Text>
                        }
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}