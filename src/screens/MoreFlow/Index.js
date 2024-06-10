import React from 'react'
import { Platform, Text, View, StatusBar, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Feather, MaterialIcons, FontAwesome, Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function MoreInfo({ navigation, route }) {
    return (
        <View style={{
            paddingTop: 35,
            flex: 1,
            alignItems: "center"
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
                    المزيد ...
                </Text>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ position: "absolute", right: 20 }}
                >
                    <Feather name="arrow-right" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>


            <View style={{
                width: "100%",
                paddingHorizontal: 20,
                marginTop: 40,
                marginBottom: 60
            }}>
                <Text style={{
                    textAlign: "right",
                    fontFamily: "Bold",
                    fontSize: 20,
                    color: "#34ace0"
                }}>
                    هلا بيك ! , في تطبيق الحجز السريع
                </Text>
            </View>



            <TouchableOpacity
                onPress={() => navigation.navigate("Terms")}
                style={styles.profileItem}>
                <View style={{ flexDirection: "row" }}>
                    <Text
                        style={{
                            fontFamily: "Bold",
                            color: "#143656",
                            marginHorizontal: 10
                        }}
                    >
                        شروط الإستخدام
                    </Text>
                    <View style={styles.profileItemIcon}>
                        <FontAwesome name="flag" size={24} color="black" />
                    </View>
                </View>

                <View>
                    <MaterialIcons name="arrow-back-ios" size={24} color="black" />
                </View>
            </TouchableOpacity>







            <TouchableOpacity
                onPress={() => navigation.navigate("Policy")}
                style={styles.profileItem}>
                <View style={{ flexDirection: "row" }}>
                    <Text
                        style={{
                            fontFamily: "Bold",
                            color: "#143656",
                            marginHorizontal: 10
                        }}
                    >
                        السياسات و الخصوصية
                    </Text>
                    <View style={styles.profileItemIcon}>
                        <MaterialIcons name="privacy-tip" size={24} color="black" />
                    </View>
                </View>

                <View>
                    <MaterialIcons name="arrow-back-ios" size={24} color="black" />
                </View>
            </TouchableOpacity>


            <TouchableOpacity
                onPress={() => navigation.navigate("About")}
                style={styles.profileItem}>
                <View style={{ flexDirection: "row" }}>
                    <Text
                        style={{
                            fontFamily: "Bold",
                            color: "#143656",
                            marginHorizontal: 10
                        }}
                    >
                        عن التطبيق
                    </Text>
                    <View style={styles.profileItemIcon}>
                        <Entypo name="info-with-circle" size={24} color="black" />
                    </View>
                </View>

                <View>
                    <MaterialIcons name="arrow-back-ios" size={24} color="black" />
                </View>
            </TouchableOpacity>



            <TouchableOpacity
                onPress={() => navigation.navigate("Services")}
                style={styles.profileItem}>
                <View style={{ flexDirection: "row" }}>
                    <Text
                        style={{
                            fontFamily: "Bold",
                            color: "#143656",
                            marginHorizontal: 10
                        }}
                    >
                        خدماتنا
                    </Text>
                    <View style={styles.profileItemIcon}>
                        <FontAwesome5 name="list-alt" size={24} color="black" />
                    </View>
                </View>

                <View>
                    <MaterialIcons name="arrow-back-ios" size={24} color="black" />
                </View>
            </TouchableOpacity>




            <TouchableOpacity
                onPress={() => navigation.navigate("Notification")}
                style={styles.profileItem}>
                <View style={{ flexDirection: "row" }}>
                    <Text
                        style={{
                            fontFamily: "Bold",
                            color: "#143656",
                            marginHorizontal: 10
                        }}
                    >
                        الإشعارات
                    </Text>
                    <View style={styles.profileItemIcon}>
                        <Ionicons name="notifications-sharp" size={24} color="black" />
                    </View>
                </View>

                <View>
                    <MaterialIcons name="arrow-back-ios" size={24} color="black" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("Contact")}
                style={styles.profileItem}>
                <View style={{ flexDirection: "row" }}>
                    <Text
                        style={{
                            fontFamily: "Bold",
                            color: "#143656",
                            marginHorizontal: 10
                        }}
                    >
                        تواصل معنا
                    </Text>
                    <View style={styles.profileItemIcon}>
                        <MaterialIcons name="wifi-calling" size={24} color="black" />
                    </View>
                </View>

                <View>
                    <MaterialIcons name="arrow-back-ios" size={24} color="black" />
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({


    profileItem: {
        width: "90%",
        backgroundColor: "#FFF",
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginVertical: 5,
        borderRadius: 10,
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    profileItemIcon: {
        borderLeftColor: "#DDDDDD",
        borderLeftWidth: 2,
        paddingHorizontal: 10
    }
})
