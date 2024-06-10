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


export default function Contact({ route, navigation }) {

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
                    تواصل معنا
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
                    marginTop: 50
                }}>
                    If you have any questions or suggestions about my Terms and Conditions, do not hesitate to contact me at maeytham94iq@gmail.com.
                    Mobile # +9647824846025xxs
                </Text>

            </View>
        </View>
    );
}