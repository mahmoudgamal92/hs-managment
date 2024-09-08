import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    Platform,
    Dimensions,
    ScrollView,
    Linking,
    useWindowDimensions
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import Modal from "react-native-modal";
import RenderHtml from 'react-native-render-html';

import {
    MaterialIcons,
    AntDesign,
    Feather,
    EvilIcons
} from "@expo/vector-icons";
import Constants from 'expo-constants';
import { api } from "../../const/api";
export default function HotelResult({ route, navigation }) {
    const { hotels, filters } = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState("");
    const [modalImages, setModalImages] = useState([]);
    const [detailsModalVisible, setDetailsModalVisible] = useState(false);
    const [hotelDescription, setHotelDescription] = useState("");
    const { width } = useWindowDimensions();

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="#34ace0" />
            <Modal
                isVisible={modalVisible}
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
                    height: modalImages.length > 0 ? "100%" : 250
                }}>

                    <View style={{
                        borderBottomColor: "#DDDDDD",
                        borderBottomWidth: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <TouchableOpacity

                            onPress={() => setModalVisible(false)}>
                            <AntDesign name="close" size={24} color="black" />
                        </TouchableOpacity>

                        <Text style={{
                            fontFamily: "Bold",
                            padding: 5
                        }}>
                            {modalTitle}
                        </Text>


                    </View>


                    {modalContent !== "" &&
                        <View style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            marginTop: 50
                        }}>

                            {modalContent.split(",").map((item) =>

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
                    }


                    {modalImages.length !== 0 &&
                        <ScrollView
                            contentContainerStyle={{
                                alignItems: "center"
                            }}
                            style={{

                            }}>

                            {modalImages.map((item) =>

                                <Image source={{ uri: api.mediaURL + item.imageName }}
                                    resizeMode="cover"
                                    style={{
                                        height: 200,
                                        width: "100%",
                                        marginVertical: 10,
                                        borderRadius: 10
                                    }}
                                />
                            )
                            }

                        </ScrollView>
                    }
                </View>
            </Modal>


            <Modal
                isVisible={detailsModalVisible}
                style={{
                    //maxHeight: 200,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <View style={{
                    backgroundColor: "#FFF",
                    width: "100%",
                    borderRadius: 20,
                    padding: 10,
                    height: 600
                }}>

                    <View style={{
                        borderBottomColor: "#DDDDDD",
                        borderBottomWidth: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <TouchableOpacity

                            onPress={() => setDetailsModalVisible(false)}>
                            <AntDesign name="close" size={24} color="#586261" />
                        </TouchableOpacity>

                        <Text style={{
                            fontFamily: "Bold",
                            padding: 5
                        }}>
                            التفاصيل
                        </Text>


                    </View>
                    <RenderHtml
                        contentWidth={width * 0.9}
                        source={{ html: hotelDescription }}
                    />
                </View>
            </Modal>

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
                    <Feather name="arrow-right" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>

            <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 10,
                marginTop: 20
            }}>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%"
                    }}
                    data={hotels}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) =>

                        <View

                            style={styles.itemContainer}>

                            <View style={{
                                flexDirection: "row-reverse",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: 10
                            }}>
                                <View style={{
                                    flexDirection: "row-reverse",
                                    alignItems: "center"
                                }}>
                                    <Text style={{
                                        fontFamily: "Bold",
                                        marginHorizontal: 3
                                    }}>
                                        {item.hotelName}
                                    </Text>

                                    <AntDesign name="star" size={20} color="#F7C93E" />
                                    <AntDesign name="star" size={20} color="#F7C93E" />
                                    <AntDesign name="star" size={20} color="#F7C93E" />
                                </View>



                                <View style={{
                                    flexDirection: 'row-reverse',
                                    paddingTop: 5
                                }}>
                                    <Text style={{
                                        fontFamily: "Regular"
                                    }}>
                                        السعر يبدأ من :
                                    </Text>

                                    <Text style={{
                                        backgroundColor: 'red',
                                        color: '#FFF',
                                        fontFamily: "Regular",
                                        padding: 1, borderRadius: 5
                                    }}>
                                        {' '}{item.fromPrice} الف{' '}
                                    </Text>
                                </View>

                            </View>
                            <ImageBackground
                                imageStyle={styles.itemImg}
                                source={{ uri: api.mediaURL + item.mainImage }}
                            >
                                <View style={styles.itemContent}>
                                    <View style={{
                                        backgroundColor: "green",
                                        borderRadius: 10,
                                        paddingHorizontal: 5,
                                        paddingVertical: 2
                                    }}>
                                        <Text style={{
                                            fontFamily: "Regular",
                                            color: "#FFF"
                                        }}>
                                            {item.paymentMethod}
                                        </Text>
                                    </View>


                                    <TouchableOpacity
                                        onPress={() => {
                                            setModalTitle("الصور");
                                            setModalContent("");
                                            setModalImages(item.hotelGallery);
                                            setModalVisible(true);
                                        }}
                                        style={{
                                            backgroundColor: "green",
                                            borderRadius: 10,
                                            paddingHorizontal: 5,
                                            paddingVertical: 2
                                        }}>
                                        <Text style={{
                                            fontFamily: "Regular",
                                            color: "#FFF"
                                        }}>
                                            عرض الصور
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    paddingHorizontal: 10,
                                    paddingVertical: 10
                                }}>

                                    <TouchableOpacity
                                        onPress={() => {
                                            setModalTitle("محتويات الحمام");
                                            setModalContent(item.bathroomContents);
                                            setModalImages([]);
                                            setModalVisible(true);
                                        }}
                                        style={{
                                            backgroundColor: "green",
                                            borderRadius: 5,
                                            paddingHorizontal: 5,
                                            paddingVertical: 5
                                        }}>
                                        <Text style={{
                                            fontFamily: "Regular",
                                            color: "#FFF"
                                        }}>
                                            محتويات الحمام
                                        </Text>
                                    </TouchableOpacity>


                                    <TouchableOpacity
                                        onPress={() => {
                                            setModalTitle("محتويات الفندق");
                                            setModalContent(item.hotelContents);
                                            setModalImages([]);
                                            setModalVisible(true);
                                        }}
                                        style={{
                                            backgroundColor: "green",
                                            borderRadius: 5,
                                            paddingHorizontal: 5,
                                            paddingVertical: 5
                                        }}>
                                        <Text style={{
                                            fontFamily: "Regular",
                                            color: "#FFF"
                                        }}>
                                            محتويات الفندق
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => {
                                            setModalTitle("محتويات الغرف");
                                            setModalContent(item.roomContents);
                                            setModalImages([]);
                                            setModalVisible(true);
                                        }}
                                        style={{
                                            backgroundColor: "green",
                                            borderRadius: 5,
                                            paddingHorizontal: 5,
                                            paddingVertical: 5
                                        }}>
                                        <Text style={{
                                            fontFamily: "Regular",
                                            color: "#FFF"
                                        }}>
                                            محتويات الغرف
                                        </Text>
                                    </TouchableOpacity>
                                </View>


                            </ImageBackground>


                            <View style={{ paddingHorizontal: 10 }}>
                                <Text
                                    style={{
                                        fontFamily: "Regular",
                                        color: "#34ace0",
                                        textAlign: "right",
                                        fontSize: 16
                                    }}
                                >
                                    إلغاء الحجز قبل {item.cancellationReservation}
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
                                <TouchableOpacity

                                    onPress={() => {
                                        navigation.navigate("Rooms", {
                                            hotel: item,
                                            filters: filters
                                        });
                                    }}
                                    style={{
                                        backgroundColor: "red",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        borderRadius: 10,
                                        paddingVertical: 10,
                                        paddingHorizontal: 10
                                    }}>
                                    <Text style={{
                                        fontFamily: "Bold",
                                        color: "#FFF"
                                    }}>
                                        إرسل طلب
                                    </Text>

                                    <AntDesign name="shoppingcart" size={24} color="#FFF" />

                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setHotelDescription(item.description)
                                        setDetailsModalVisible(true)
                                    }}
                                    style={{
                                        backgroundColor: "#34ace0",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 10,
                                        paddingVertical: 10,
                                        paddingHorizontal: 10
                                    }}>
                                    <Text style={{
                                        fontFamily: "Bold",
                                        color: "#FFF"
                                    }}>
                                        التفاصيل
                                    </Text>


                                </TouchableOpacity>

                                <TouchableOpacity

                                    onPress={() => Linking.openURL(item.mapLink)}
                                    style={{
                                        backgroundColor: "green",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        borderRadius: 10,
                                        paddingVertical: 10,
                                        paddingHorizontal: 10
                                    }}>
                                    <Text style={{
                                        fontFamily: "Bold",
                                        color: "#FFF"
                                    }}>
                                        اللوكيشن
                                    </Text>

                                    <EvilIcons name="location" size={24} color="#FFF" />

                                </TouchableOpacity>
                            </View>
                        </View>
                    } />
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
        height: 150,
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
