import React from "react";

import {
    Text,
    View,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import {
    Feather,
    MaterialIcons,
} from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";

import styles from "../theme/style";
import { cities } from "./../const/source";
import { Calender } from "../Components/Calender";

export default function Hotels({ route, navigation }) {

    return (
        <View style={{
            paddingTop: 35,
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
                    البحث عن فنادق
                </Text>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ position: "absolute", right: 20 }}
                >
                    <Feather name="arrow-left" size={24} color="#FFF" />
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
                        وين تريد الفندق
                    </Text>



                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={{ fontFamily: "Regular", fontSize: 12 }}
                        data={cities}
                        //search
                        maxHeight={300}
                        labelField="city"
                        valueField="city"
                        placeholder="أختر المدينة"
                        //onFocus={() => setIsFocus(true)}
                        //onBlur={() => setIsFocus(false)}
                        onChange={val => {
                            // PushValue(item.input_key, val.value);
                            // setIsFocus(false);
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
                                name="home"
                                size={20}
                            />}
                    />
                </View>
                <Calender title={"حدد تاريخ الوصول "} />
                <Calender title={"حدد تاريخ المغادرة و إنتظر البحث "} />
                <TouchableOpacity
                    onPress={() => navigation.navigate("HotelResult")}
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
                        بحث
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}