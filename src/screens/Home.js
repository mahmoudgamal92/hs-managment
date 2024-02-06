import {
    Image,
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Dimensions,
    ScrollView
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import {
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome5,
    Feather,
    Entypo,
    AntDesign,
    SimpleLineIcons,
    FontAwesome
} from "@expo/vector-icons";

export default function HomePage({ route, navigation }) {

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={styles.header}>
                <View
                    style={{
                        width: "100%",
                        flexDirection: "row-reverse",
                        justifyContent: "space-between"
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.openDrawer()}
                        style={{
                            width: "20%",
                            justifyContent: "center",
                            alignItems: "flex-end"
                        }}
                    >
                        <MaterialIcons name="privacy-tip" size={40} color="#FFF" />
                    </TouchableOpacity>

                    <View style={{ width: "60%", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{
                            fontFamily: "Regular",
                            color: "#FFF"
                        }}>
                            للإسنفسار + واتساب
                        </Text>

                        <Text style={{
                            fontFamily: "Regular",
                            color: "#FFF"
                        }}>
                            566465465645
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={{
                            width: "20%",
                            justifyContent: "center",
                            alignItems: "flex-start"
                        }}
                    >
                        <FontAwesome5 name="hotel" size={40} color={"#FFF"} />

                    </TouchableOpacity>

                </View>
            </View>
            <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }}>


                <View style={{
                    width: "100%",
                    padding: 10
                }}>
                    <Image source={require('./../../assets/hotel.jpg')}
                        style={{
                            width: "100%",
                            height: 200,
                        }}
                    /></View>

                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingHorizontal: 20,
                        marginTop: 10,
                        flexWrap: "wrap"
                    }}
                >
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Adds", {
                                depart_id: item.id,
                                depart_name: JSON.parse(item.name).ar
                            })}
                        style={styles.cat}
                    >
                        <View
                            style={{
                                borderColor: "grey",
                                borderWidth: 2,
                                borderRadius: 20,
                                width: 40,
                                height: 40,
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <Feather name="image" size={25} color="grey" />
                        </View>

                        <Text style={styles.catText}>
                            فنادق
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Adds", {
                                depart_id: item.id,
                                depart_name: JSON.parse(item.name).ar
                            })}
                        style={styles.cat}>
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <Image source={require('./../../assets/hotel.jpg')}
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                    borderColor: "grey",
                                    borderWidth: 2,
                                }}
                            />
                        </View>

                        <Text style={styles.catText}>
                            فنادق
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Adds", {
                                depart_id: item.id,
                                depart_name: JSON.parse(item.name).ar
                            })}
                        style={styles.cat}>
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <Image source={require('./../../assets/hotel.jpg')}
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                    borderColor: "grey",
                                    borderWidth: 2,
                                }}
                            />
                        </View>

                        <Text style={styles.catText}>
                            صالات أعراس
                        </Text>
                    </TouchableOpacity>




                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Adds", {
                                depart_id: item.id,
                                depart_name: JSON.parse(item.name).ar
                            })}
                        style={styles.cat}>
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <Image source={require('./../../assets/chalet.jpg')}
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                    borderColor: "grey",
                                    borderWidth: 2,
                                }}
                            />
                        </View>

                        <Text style={styles.catText}>
                            رحلات سياحية
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("Adds", {
                                depart_id: item.id,
                                depart_name: JSON.parse(item.name).ar
                            })}
                        style={styles.cat}>
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <Image source={require('./../../assets/farm.jpg')}
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                    borderColor: "grey",
                                    borderWidth: 2,
                                }}
                            />
                        </View>

                        <Text style={styles.catText}>
                            بساتين و شاليهات
                        </Text>
                    </TouchableOpacity>
                </View>


            </View>


        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F3F5F7"
    },
    header: {
        paddingTop: 40,
        width: "100%",
        paddingHorizontal: 20,
        backgroundColor: "#34ace0",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 5
    },

    itemTitle: {
        backgroundColor: "rgba(0,0,0,0.5)",
        paddingHorizontal: 10,
        borderRadius: 5,
        color: "#FFF",
        fontFamily: "Regular",
        fontSize: 16,
        zIndex: 10000
    },
    body: {
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 5
    },
    itemContent: {
        alignItems: "flex-end",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 150
    },
    featuredItem: {
        height: 150,
        alignItems: "flex-start",
        padding: 5,
        flexDirection: "row-reverse"
    },
    itemImg: {
        width: "100%",
        resizeMode: "cover",
        height: 300,
        borderRadius: 10,
        overflow: "hidden",
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10
    },
    imgLayer: {
        position: "absolute",
        margin: 2.5,
        zIndex: 1000,
        width: "100%",
        height: 300,
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: 5
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
        overflow: "hidden",
        width: "50%",
        height: 300,
        padding: 2.5,
        marginVertical: 5
    },
    item: {
        width: "100%"
    },

    cats: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
        flexWrap: "wrap",
        width: "100%"
    },

    cat: {
        backgroundColor: "#FFF",
        width: "30%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 15,
        paddingHorizontal: 5,
        paddingVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,

        elevation: 13
    },

    catItem: {
        borderRadius: 30,
        width: 60,
        height: 60,
        resizeMode: "contain"
    },

    catText: {
        marginVertical: 5,
        fontFamily: "Bold",
        color: "#143656",
        fontSize: 10,
        textAlign: "center"
    }
});
