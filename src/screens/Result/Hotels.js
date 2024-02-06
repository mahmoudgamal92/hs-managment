import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground

} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import {
    MaterialIcons,
    AntDesign,
    Feather,
} from "@expo/vector-icons";
import Constants from 'expo-constants';

export default function HotelResult({ route, navigation }) {

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="#34ace0" />
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
                    نتائج البحث
                </Text>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ position: "absolute", right: 20 }}
                >
                    <Feather name="arrow-left" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>
            <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }}>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("HotelDetails", {
                            item: item
                        });
                    }}
                    style={styles.itemContainer}
                >
                    <ImageBackground
                        imageStyle={styles.itemImg}
                        source={require('./../../../assets/hotel.jpg')}
                    >
                        <View style={styles.itemContent} />
                    </ImageBackground>

                    <View style={{ paddingHorizontal: 10, marginVertical: 10 }}>
                        <Text
                            style={{
                                fontFamily: "Bold",
                                color: "#000",
                                textAlign: "left",
                                fontSize: 12
                            }}
                        >
                            غرفة للإيجار
                        </Text>
                    </View>

                    <View style={{ paddingHorizontal: 10 }}>
                        <Text
                            style={{
                                fontFamily: "Bold",
                                color: "#34ace0",
                                textAlign: "left",
                                fontSize: 16
                            }}
                        >
                            2333 SR
                        </Text>
                    </View>

                    <View
                        style={{
                            width: "100%",
                            flexDirection: "row-reverse",
                            justifyContent: "space-between",
                            paddingHorizontal: 10,
                            marginVertical: 10,
                            alignItems: "center"
                        }}
                    >
                        <Text style={{ fontFamily: "Bold", color: "grey" }}>
                            20-2-2022
                        </Text>
                        <AntDesign name="shoppingcart" size={24} color="grey" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F5F7",
        paddingTop: Constants.statusBarHeight
    },
    header: {
        paddingTop: Constants.statusBarHeight,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 5
    },
    cats: {
        flexDirection: "row",
        marginVertical: 20
    },
    cat: {
        justifyContent: "center",
        alignItems: "center"
    },
    catItem: {
        borderWidth: 2,
        borderColor: "#FF9000",
        marginHorizontal: 10,
        borderRadius: 30,
        width: 60,
        height: 60,
        resizeMode: "contain",
        borderRadius: 30
    },
    catText: {
        fontFamily: "Bold",
        color: "#143656",
        marginVertical: 5,
        fontFamily: "Bold"
    },

    body: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 5
    },
    itemContent: {
        alignItems: "flex-start",
        justifyContent: "space-between",
        flexDirection: "row-reverse",
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 160,
        width: "100%"
    },
    featuredItem: {
        height: 160,
        alignItems: "flex-start",
        padding: 5,
        flexDirection: "row-reverse"
    },

    itemImg: {
        width: "100%",
        resizeMode: "cover",
        height: 160,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },

    logo: {
        width: 50,
        height: 50,
        padding: 5,
        borderRadius: 26,
        borderWidth: 1,
        borderColor: "#000"
    },

    itemContainer: {
        borderRadius: 15,
        marginHorizontal: 5,
        width: "100%",
        marginVertical: 5,
        backgroundColor: "#FFF",
        elevation: 5
    },
    item: {
        width: "100%"
    }
});
