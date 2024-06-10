import React, { Component, useState, useEffect, useCallback, useRef } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    StatusBar,
    ImageBackground,
    ScrollView,
} from "react-native";
import {
    FontAwesome,
    MaterialIcons,
    Ionicons,
    AntDesign,
    FontAwesome5
} from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import Modal from "react-native-modal";
import { api } from "../../const/api";

const HotelDetails = ({ route, navigation }) => {
    const { room, hotel, filters } = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [room_count, setRoomCount] = useState(0);
    const [total, setTotal] = useState(0);
    const maxRoomNum = generateRoomArray(parseInt(room?.avaliableRoomNumber));

    function generateRoomArray(numObjects) {
        let array = [];
        for (let i = 1; i <= numObjects; i++) {
            array.push({ value: i, title: i + "غرف" });
        }
        return array;
    }


    const reservation_info = {
        total: total,
        room_count: room_count,
    }


    const _handleOrderConfirm = () => {

        if (room_count == 0) {

            alert("لابد من إختيار غرفه واحدة علي الأقل للمتابعة");

        }

        else {
            navigation.navigate("HotelPreOrder", {
                hotel: hotel,
                room: room,
                filters: filters,
                reservation: reservation_info
            })
        }

    }

    return (
        <View style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
            <StatusBar backgroundColor="#34ace0" />

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
                    height: "100%"
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
                            صور الغرفة
                        </Text>

                    </View>
                    <ScrollView
                        contentContainerStyle={{
                            alignItems: "center"
                        }}
                        style={{

                        }}>

                        {room?.roomGallery.map((item) =>
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
                </View>
            </Modal>
            <View
                style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    height: 60,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#34ace0",
                    paddingHorizontal: 20
                }}
            >
                <View style={{ width: "20%", alignItems: "flex-start" }}>
                    <MaterialIcons
                        name="arrow-back-ios"
                        size={30}
                        color="#FFF"
                        onPress={() => navigation.goBack()}
                    />
                </View>

                <View
                    style={{
                        width: "60%",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Text
                        style={{
                            color: "#FFF",
                            fontFamily: "Regular",
                            textAlign: "center",
                            fontSize: 18
                        }}
                    >
                        {room?.roomName}
                    </Text>
                </View>

                <View style={{ width: "20%", alignItems: "flex-end" }}>
                    <AntDesign name="sharealt" size={24} color="#FFF" />
                </View>
            </View>

            <View>


                <ImageBackground
                    source={{ uri: api.mediaURL + room?.mainImage }}
                    style={{ width: "100%", height: 280 }}
                />

            </View>

            <View
                style={{
                    backgroundColor: "#FFF",
                    marginTop: -20,
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    flex: 1
                }}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                        <Text style={{ fontFamily: "Bold", fontSize: 20, color: "#000" }}>
                            {room?.roomName}
                        </Text>

                    </View>


                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <View style={{
                            width: "25%",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Text style={{
                                fontFamily: "Bold",
                                fontSize: 12,
                                color: "#34ace0"
                            }}>
                                المساحة
                            </Text>
                            <AntDesign name="areachart" size={24} color="black" />
                            <Text style={{
                                fontFamily: "Bold",
                                fontSize: 12,
                                color: "grey"
                            }}>
                                {room?.roomSize} متر
                            </Text>
                        </View>



                        <View style={{
                            width: "25%",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Text style={{
                                fontFamily: "Bold",
                                fontSize: 12,
                                color: "#34ace0"
                            }}>
                                عدد سرير
                            </Text>
                            <FontAwesome name="bed" size={24} color="black" />
                            <Text style={{
                                fontFamily: "Bold",
                                fontSize: 12,
                                color: "grey"
                            }}>
                                X {room?.bedNumber}
                            </Text>
                        </View>




                        <View style={{
                            width: "25%",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Text style={{
                                fontFamily: "Bold",
                                fontSize: 12,
                                color: "#34ace0"
                            }}>
                                عدد البالغين
                            </Text>
                            <FontAwesome name="users" size={24} color="black" />
                            <Text style={{
                                fontFamily: "Bold",
                                fontSize: 12,
                                color: "grey"
                            }}>
                                X {room?.adultsMaxNo}
                            </Text>
                        </View>




                        <View style={{
                            width: "25%",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Text style={{
                                fontFamily: "Bold",
                                fontSize: 12,
                                color: "#34ace0"
                            }}>
                                الأطفال
                            </Text>
                            <MaterialIcons name="child-care" size={24} color="black" />
                            <Text style={{
                                fontFamily: "Bold",
                                fontSize: 12,
                                color: "grey"
                            }}>
                                X {room?.kidsMaxNo}
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingHorizontal: 20,
                            marginVertical: 20,
                            alignItems: "center"
                        }}
                    >

                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    setModalVisible(true)
                                }}
                                style={{
                                    flexDirection: "row",
                                    height: 40,
                                    backgroundColor: "#34ace0",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    borderRadius: 10,
                                    paddingHorizontal: 10
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#FFF",
                                        fontFamily: "Regular",
                                        fontSize: 15,
                                        marginHorizontal: 5
                                    }}
                                >
                                    عرض الصور
                                </Text>

                                <FontAwesome5 name="images" size={24} color="#FFF" />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontFamily: "Bold", fontSize: 17, color: "green" }}>
                            السعر : {room?.price} د.ع
                        </Text>

                    </View>


                    <View
                        style={{
                            width: "100%",
                            paddingHorizontal: 20,
                            alignItems: "center",
                        }}>

                        <Text
                            style={{
                                fontFamily: "Bold",
                                textAlign: "right",
                                color: "#000",
                                color: "#000",
                                width: "100%",
                                marginVertical: 20
                            }}>
                            حدد عدد الغرف
                        </Text>

                        <View style={{
                            flexDirection: "row-reverse",
                            width: "100%",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap"
                        }}>

                            <Dropdown
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                itemTextStyle={{ fontFamily: "Regular", fontSize: 12 }}
                                data={maxRoomNum}
                                //search
                                maxHeight={300}
                                labelField="title"
                                valueField="value"
                                placeholder="أختر عدد الغرف المطلوبة"

                                onChange={item => {
                                    setRoomCount(item.value);
                                    setTotal(parseInt(item.value * room?.price) + parseInt(hotel?.commissionAmount))

                                }}
                                renderLeftIcon={() =>
                                    <MaterialIcons
                                        style={styles.icon}
                                        name="keyboard-arrow-down"
                                        size={24}
                                        color={"grey"}
                                    />}
                                renderRightIcon={() =>

                                    <Ionicons name="bed-outline" size={24} color="#000" />
                                }
                            />

                        </View>
                    </View>

                    {room_count !== 0 &&
                        <View style={{
                            padding: 10,
                            marginTop: 50
                        }}>
                            <View style={{
                                flexDirection: "row-reverse",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 10,
                                borderBottomColor: "#DDDDDD",
                                borderBottomWidth: 1
                            }}>
                                <Text style={{
                                    fontFamily: "Bold",
                                    color: "#000"
                                }}>
                                    عدد الغرف
                                </Text>
                                <Text style={{
                                    fontFamily: "Bold",
                                    color: "#000"
                                }}>
                                    {room_count}
                                </Text>
                            </View>

                            <View style={{
                                flexDirection: "row-reverse",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: 10,
                                borderBottomColor: "#DDDDDD",
                                borderBottomWidth: 1
                            }}>
                                <Text style={{
                                    fontFamily: "Bold",
                                    color: "#000"
                                }}>
                                    العمولة :
                                </Text>
                                <Text style={{
                                    fontFamily: "Bold",
                                    color: "#000"
                                }}>
                                    {hotel?.commissionAmount}
                                </Text>
                            </View>


                            <View style={{
                                flexDirection: "row-reverse",
                                alignItems: "center",
                                justifyContent: "space-between",
                                paddingHorizontal: 10,
                                borderBottomColor: "#DDDDDD",
                                borderBottomWidth: 1,
                                paddingVertical: 10
                            }}>
                                <Text style={{
                                    fontFamily: "Bold",
                                    color: "#000"
                                }}>
                                    الإجمالي
                                </Text>
                                <Text style={{
                                    fontFamily: "Bold",
                                    color: "#000"
                                }}>
                                    {parseInt(total)} د.ع
                                </Text>
                            </View>
                            <TouchableOpacity

                                onPress={() => _handleOrderConfirm()}

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
                                    احجز الأن
                                </Text>
                            </TouchableOpacity>
                        </View>
                    }
                </ScrollView>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        marginBottom: 50,
        width: "80%",
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: "red",
        marginVertical: 20,
        width: "80%",
        marginBottom: 40
    },
    buttonOpen: {
        backgroundColor: "#F194FF"
    },

    textStyle: {
        color: "white",
        textAlign: "center",
        fontFamily: "Bold"
    },
    modalText: {
        marginBottom: 10,
        textAlign: "center",
        fontSize: 20,
        marginTop: 20,
        fontFamily: "Bold",
        marginHorizontal: 10
    },
    modalBody: {
        textAlign: "center",
        marginTop: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontFamily: "Regular"
    },
    dropdown: {
        backgroundColor: "#fff",
        height: 55,
        borderRadius: 100,
        paddingHorizontal: 8,
        fontFamily: "Regular",
        width: "100%",
        borderColor: "#DDDDDD",
        borderWidth: 1,
        textAlign: "right"
    },
    icon: {
        marginRight: 5
    },
    label: {
        position: "absolute",
        backgroundColor: "white",
        fontFamily: "Regular",
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14
    },
    placeholderStyle: {
        fontSize: 14,
        fontFamily: "Regular",
        paddingHorizontal: 10,
        color: "grey",
        textAlign: "right",

    },
    selectedTextStyle: {
        fontSize: 13,
        textAlign: "right",
        fontFamily: "Regular",
        marginHorizontal: 10,
        textAlign: "right"
    },
    iconStyle: {
        width: 20,
        height: 20
    },

    btnText: {
        fontSize: 20,
        color: "#FFF",
        fontFamily: "Bold"
    },
    headline: {
        fontSize: 20,
        marginTop: 10,
        textAlign: "center",
        fontFamily: "Bold"
    }
});
export default HotelDetails;
