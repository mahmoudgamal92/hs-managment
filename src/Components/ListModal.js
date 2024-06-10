import {
    Text,
    View,
    TouchableOpacity,

} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import {
    MaterialIcons,
    AntDesign,
    Feather,
} from "@expo/vector-icons";
import Modal from "react-native-modal";


export const Calender = ({ title }) => {
    {/* Hotel Content Modal */ }
    <Modal
        isVisible={hotelContentVisible}
        style={{
            //maxHeight: 200,
            alignItems: "center",
            justifyContent: "center"
        }}
    >
        <View style={{
            backgroundColor: "#FFF",
            width: "100%",
            borderRadius: 20,
            padding: 10,
            height: 250
        }}>

            <View style={{
                borderBottomColor: "#DDDDDD",
                borderBottomWidth: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <TouchableOpacity

                    onPress={() => setHotelContentModal(false)}>
                    <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>

                <Text style={{
                    fontFamily: "Bold",
                    padding: 5
                }}>
                    محتويات الفندق
                </Text>


            </View>

            <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                flexWrap: "wrap",
                marginTop: 50
            }}>

                {hotelContent.split(",").map((item) =>

                    <View style={{
                        borderColor: "#000",
                        margin: 10,
                        borderWidth: 1,
                        padding: 10,
                        borderRadius: 10
                    }}>
                        <Text style={{
                            fontFamily: "Regular",
                        }}>{item}</Text>
                    </View>

                )
                }

            </View>

        </View>

    </Modal>

}