
import React from 'react';
import {
    Text,
    View
} from "react-native";
import { days } from "./../const/source";
import { Dropdown } from "react-native-element-dropdown";
import styles from "../theme/style";

export const Calender = ({ title }) => {
    return (
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
                }}
            >
                {title}
            </Text>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>

                <View style={{
                    width: "30%",
                    alignItems: "center"
                }}>

                    <Text style={{
                        fontFamily: "Regular",
                        color: "#000",
                        marginVertical: 2,
                        textAlign: "right",
                    }}>اليوم

                    </Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={{ fontFamily: "Regular", fontSize: 12 }}
                        data={days}
                        //search
                        placeholder="1"
                        maxHeight={300}
                        labelField="city"
                        valueField="city"
                        //onFocus={() => setIsFocus(true)}
                        //onBlur={() => setIsFocus(false)}
                        onChange={val => {
                            // PushValue(item.input_key, val.value);
                            // setIsFocus(false);
                        }}

                    />
                </View>




                <View style={{
                    width: "30%",
                    alignItems: "center"
                }}>

                    <Text style={{
                        fontFamily: "Regular",
                        color: "#000",
                        marginVertical: 2,
                        textAlign: "right",
                    }}>
                        الشهر

                    </Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={{ fontFamily: "Regular", fontSize: 12 }}
                        data={days}
                        //search
                        placeholder="1"
                        maxHeight={300}
                        labelField="city"
                        valueField="city"
                        //onFocus={() => setIsFocus(true)}
                        //onBlur={() => setIsFocus(false)}
                        onChange={val => {
                            // PushValue(item.input_key, val.value);
                            // setIsFocus(false);
                        }}

                    />
                </View>




                <View style={{
                    width: "30%",
                    alignItems: "center"
                }}>

                    <Text style={{
                        fontFamily: "Regular",
                        color: "#000",
                        marginVertical: 2,
                        textAlign: "right",
                    }}>
                        السنة
                    </Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={{ fontFamily: "Regular", fontSize: 12 }}
                        data={days}
                        //search
                        placeholder="1"
                        maxHeight={300}
                        labelField="city"
                        valueField="city"
                        //onFocus={() => setIsFocus(true)}
                        //onBlur={() => setIsFocus(false)}
                        onChange={val => {
                            // PushValue(item.input_key, val.value);
                            // setIsFocus(false);
                        }}

                    />
                </View>

            </View>

        </View>
    );
};
