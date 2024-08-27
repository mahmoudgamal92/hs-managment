import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Image
} from "react-native";

import React, { useState, useRef, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import {
    FontAwesome,
    Entypo,
    MaterialIcons,
    FontAwesome5,
} from "@expo/vector-icons";
import { getCatigories, getSlider } from "../network";
import { api } from "./../const/api";
import AutoScrollingSlider from './../Components/AutoScrollingSlider';

export default function HomePage({ route, navigation }) {
    const [cats, setCats] = useState([]);
    const [slider, setSlider] = useState([]);

    const windowWidth = Dimensions.get('window').width;
    useEffect(() => {
        _getInfo();
    }, [])
    const handleImageError = (error) => {
        console.log('Image load error:', error.nativeEvent.error);
    };

    const _getInfo = async () => {
        const data = await getCatigories();
        const slider_info = await getSlider();
        setSlider(slider_info);
        setCats(data);
    }

    const _navaigate = (id) => {
        switch (id.toString()) {
            case "1":
                navigation.navigate("Hotels", {
                    id: id
                });
                break;

            case "2":
                navigation.navigate("ChaletsAndFarms");
                break;

            case "3":
                navigation.navigate("NorthChalets");
                break;
        }

    }

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
                        style={{
                            width: "20%",
                            justifyContent: "center",
                            alignItems: "flex-end"
                        }}
                    >

                        <Image
                            resizeMode='contain'
                            source={require('./../../assets/logo.png')} style={{
                                height: 40,
                                width: 40
                            }} />
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
                            07824846025
                        </Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("MoreInfo")}
                        style={{
                            width: "20%",
                            justifyContent: "center",
                            alignItems: "flex-start"
                        }}
                    >
                        <Text style={{
                            fontFamily: "Bold",
                            fontSize: 10,
                            color: "#FFF"
                        }}>
                            privacy policy
                        </Text>

                    </TouchableOpacity>

                </View>
            </View>

            <ScrollView style={{
                width: "100%"
            }}>
                <View style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginVertical: 20,
                    width: "100%",
                }}>


                    <Text style={{
                        fontFamily: "Bold",
                        textAlign: "right",
                        fontSize: 20,
                        marginVertical: 20,
                        width: "100%",
                        paddingHorizontal: 20,
                        color: "#34ace0"
                    }}>
                        أهلا بيكم في تطبيق الحجز السريع🎉
                    </Text>
                    <AutoScrollingSlider slider={slider} api={api} />
                    <View
                        style={{
                            flexDirection: "row-reverse",
                            justifyContent: "space-between",
                            paddingHorizontal: 20,
                            marginTop: 10,
                            flexWrap: "wrap"
                        }}
                    >

                        {cats.map((item) =>

                            <TouchableOpacity
                                onPress={() => _navaigate(item.id)
                                }
                                style={styles.cat}>
                                <View
                                    style={{
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "100%"
                                    }}
                                >
                                    <Image
                                        source={{ uri: api.mediaURL + item.mainImage }}
                                        resizeMode="cover"
                                        onError={handleImageError}
                                        style={{
                                            width: "95%",
                                            height: 80,
                                            borderRadius: 10
                                        }}
                                    />
                                </View>

                                <Text style={styles.catText}>
                                    {item.arabicName}
                                </Text>
                            </TouchableOpacity>

                        )}
                    </View>
                </View>

            </ScrollView>

            {/* <TouchableOpacity
                onPress={() => {
                    navigation.navigate("MoreInfo");
                }}
                style={{
                    width: 120,
                    height: 50,
                    borderRadius: 30,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                    backgroundColor: "#34ace0",
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 6
                    },
                    shadowOpacity: 0.39,
                    shadowRadius: 8.3,
                    elevation: 13
                }}
            >
                <MaterialIcons name="arrow-back-ios" size={24} color="#FFF" />
                <Text
                    style={{ fontFamily: "Bold", color: "#FFF", marginHorizontal: 5 }}
                >
                    المزيد
                </Text>
            </TouchableOpacity> */}
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
        width: "48%",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
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
