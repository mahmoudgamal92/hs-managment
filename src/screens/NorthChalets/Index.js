import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView
} from "react-native";
import {
    Feather,
    MaterialIcons
} from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import styles from "../../theme/style";
import { GetAllChaletByFilter } from './../../network';
import { north_cities, offerTypes } from "../../const/api";
import Calender from "../../Components/Calender";
import Constants from 'expo-constants';
import moment from "moment";

export default function Chalets({ route, navigation }) {

    const currentYear = new Date().getFullYear().toString();
    const currentMonth = (new Date().getMonth() + 1).toString();
    const currentDay = new Date().getDate().toString();

    const [startDate, setStartDate] = useState(`${currentMonth}-${currentDay}-${currentYear}`);
    const [endDate, setEndDate] = useState(moment().add(1, 'days').format('MM-DD-YYYY'));

    const [loading, setLoading] = useState(false);
    const [cityID, setCityID] = useState("");
    const [offerType, setOfferType] = useState(1);
    const [IsOneDay, setIsOneDay] = useState(false);



    const handleEndDateChange = (year, month, day) => {
        setEndDate(`${month}-${day}-${year}`);
    };

    const handleStartDateChange = async (year, month, day) => {
        setEndDate("");
        setStartDate(`${month}-${day}-${year}`);
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
        let params = {};
        // Validate Data
        if (startDate == "" || offerType == 0 || cityID == "") {
            alert("لابد من إكمال البيانات بشكل صحيح")
            return;
        }

        if (!checkValidDate(startDate, endDate)) {
            alert("تاريخ المغادرة لابد أن يكون أكبر من تاريخ الوصول");
            return;
        }

        else {

            if (endDate == "") {
                //Handle Morning Shift
                if (offerType == 2) {
                    params = {
                        CityId: cityID,
                        OfferType: parseInt(offerType),
                        DateFrom: startDate,
                        DateTo: startDate,
                        IsOneDay: IsOneDay,
                    }
                }

                else {
                    //Handle One Day Or Night Shift
                    const [startMonth, startDay, startYear] = startDate.split('-').map(Number);
                    const nextDate = new Date(startYear, startMonth - 1, startDay + 1);
                    const nextMonth = (nextDate.getMonth() + 1).toString();
                    const nextDay = nextDate.getDate().toString();
                    const nextYear = nextDate.getFullYear().toString();
                    setEndDate(`${nextMonth}-${nextDay}-${nextYear}`);
                    params = {
                        CityId: cityID,
                        OfferType: parseInt(offerType),
                        DateFrom: startDate,
                        DateTo: `${nextMonth}-${nextDay}-${nextYear}`,
                        IsOneDay: IsOneDay,
                    }
                }
            }

            else {
                //Handle Several Days
                params = {
                    CityId: cityID,
                    OfferType: parseInt(offerType),
                    DateFrom: startDate,
                    DateTo: endDate,
                    IsOneDay: IsOneDay,

                }
            }
            console.log("Params =>>>>>>>>>>>>>>>>>>>>");
            console.log(params);
            // Handle Request :
            setLoading(true);
            const chalets = await GetAllChaletByFilter(params);
            if (Array.isArray(chalets)) {
                chalets.length > 0 ? navigation.navigate("NothChaletResult", {
                    chalets: chalets,
                    filters: params
                }) : alert("لايوجد شاليهات متاحة حاليا")

                //console.log(chalets)
            }
            else {
                alert(chalets);
            }
            setLoading(false);
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
                    البحث عن شاليهات
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
                                {"أول شئ : "}
                            </Text>
                            <Text
                                style={{
                                    fontFamily: "Bold",
                                    textAlign: "right",
                                    marginBottom: 5,
                                    color: "#000",
                                    zIndex: 10,
                                }}>
                                تختار المنطقة
                            </Text>
                        </View>



                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            itemTextStyle={{ fontFamily: "Regular", fontSize: 12 }}
                            data={north_cities}
                            //search
                            maxHeight={300}
                            labelField="arabicName"
                            valueField="id"
                            placeholder="أختر المنطقة"

                            onChange={item => {
                                setCityID(item.id);
                            }}
                            renderLeftIcon={() =>
                                <MaterialIcons
                                    style={styles.icon}
                                    name="keyboard-arrow-down"
                                    size={24}
                                    color={"#000"}
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
                        <Calender
                            label={"ثاني شئ تختار : "}
                            title={"تاريخ الوصول "}
                            plus={0}
                            onDateChange={handleStartDateChange}
                            dropdownPosition={"bottom"}
                        />

                        {offerType == "1" ?
                            <Calender
                                label={"ثاني شئ تختار : "}
                                title={"تاريخ المغادرة "}
                                plus={1}
                                onDateChange={handleEndDateChange}
                                dropdownPosition={"top"}
                            />
                            :
                            null
                        }
                    </View>

                    <TouchableOpacity
                        onPress={() => _applySearch()}
                        style={{
                            width: "100%",
                            backgroundColor: "#34ace0",
                            padding: 10,
                            borderRadius: 10,
                            marginVertical: 15
                        }}>
                        {loading == true ?

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