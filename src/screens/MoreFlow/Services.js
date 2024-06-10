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


export default function Services({ route, navigation }) {

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
                    خدماتنا
                </Text>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ position: "absolute", right: 20 }}
                >
                    <Feather name="arrow-right" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>
            <View style={{
                alignItems: "center",
                justifyContent: "center",
            }}>

                <Text style={{
                    fontFamily: "Bold",
                    marginTop: 50,
                    paddingHorizontal: 10
                }}>
                    ما هي الخدمات التي يوفرها الموقع والتطبيق؟
                    {"\n"}
                    1- يوفر تطبيق الحجز السريع خدمة حجوزات الفنادق داخل العراق .
                    {"\n"}
                    2- يوفر تطبيق الحجز السريع خدمة حجوزات الشاليهات السياحية داخل العراق.
                    {"\n"}
                    3- يوفر تطبيق الججز السريع خدمة حجوزات الرحلات السياحية داخل العراق.
                </Text>

            </View>
        </View>
    );
}