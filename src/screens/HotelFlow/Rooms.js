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
    ScrollView
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import styles from "../../theme/style";
import {
    FontAwesome,
    MaterialIcons,
    Feather,
    AntDesign,
    Ionicons,
    Entypo
} from "@expo/vector-icons";
import Modal from "react-native-modal";
import { RoomGetAllByHotelIDWithFilter } from '../../network';
import { Dropdown } from "react-native-element-dropdown";

import { api } from "../../const/api";
export default function HotelResult({ route, navigation }) {
    const { hotel, filters } = route.params;
    const [rooms, setRooms] = useState();

    // Images Modal
    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalImages, setModalImages] = useState([]);



    // Selected Room Modal
    const [roomModalVisible, setRoomModalVisible] = useState(false);
    const [roomModalTitle, setRoomModalTitle] = useState("");

    const [selectedRoom, setSelectedRoom] = useState(null);
    const [avalibeRooms, setAvalibleRooms] = useState([]);

    const [room_num, setRoomsNum] = useState(1);
    const [total_price, setTotalPrice] = useState(0);


    useEffect(() => {
        _getRoomInfo();
    })

    const _getRoomInfo = async () => {
        const avalibleRooms = await RoomGetAllByHotelIDWithFilter(params);
        setRooms(avalibleRooms);
    }



    const params = {
        HotelID: hotel.hotelID,
        AdultsNumber: filters.AdultsNumber,
        KidsNumber: filters.KidsNumber,
        DateFrom: filters.DateFrom,
        DateTo: filters.DateTo
    }

    // Generic Function to Create Avaliblr Room Count
    function generateRoomArray(numObjects) {
        let array = [];
        for (let i = 1; i <= numObjects; i++) {
            array.push({ value: i, title: i + " غرف " });
        }
        return array;
    }



    function parseDate(dateString) {
        const parts = dateString.split('-');
        return new Date(parts[2], parts[0] - 1, parts[1]);
    }

    function differenceInDays(date1, date2) {
        const parsedDate1 = parseDate(date1);
        const parsedDate2 = parseDate(date2);

        if (isNaN(parsedDate1) || isNaN(parsedDate2)) {
            return NaN; // Return NaN if parsing failed
        }

        const diff = Math.abs(parsedDate2 - parsedDate1);
        let daysDifference = Math.floor(diff / (1000 * 60 * 60 * 24));
        if (daysDifference === 0) {
            daysDifference = 1;
        }
        return daysDifference;
    }

    const days_num = differenceInDays(filters.DateTo, filters.DateFrom);



    const _handleRoomSelection = (item) => {
        setSelectedRoom(item);
        setAvalibleRooms(generateRoomArray(parseInt(item?.avaliableRoomNumber)));
        setRoomModalTitle(item.roomName)
        setRoomModalVisible(true);
        setTotalPrice((parseInt(item?.price)) * parseInt(days_num))
    }

    const _handleModalClose = () => {
        setSelectedRoom(null);
        setAvalibleRooms([]);
        setRoomModalTitle("");
        setRoomModalVisible(false);
    }

    // const { hotel, room, filters, reservation } = route.params;

    const _handleOrderConfirm = () => {
        _handleModalClose();
        if (total_price == 0 || room_num == 0) {
            alert("لابد من إختيار عدد الغرف");
        }


        else {
            const reservation_info = {
                total: total_price,
                room_count: room_num,
            }

            navigation.navigate("HotelPreOrder", {
                room: selectedRoom,
                filters: filters,
                hotel: hotel,
                reservation: reservation_info
            });
        }
    }


    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor="#34ace0" />


            <Modal
                isVisible={modalVisible}
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

                </View>
            </Modal>

            <Modal
                isVisible={roomModalVisible}
                style={{
                    //maxHeight: 200,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <View style={{
                    backgroundColor: "#FFF",
                    width: "100%",
                    borderRadius: 20,
                    paddingVertical: 20,
                    paddingHorizontal: 20,
                    // height: 450
                }}>

                    <View style={{
                        borderBottomColor: "#DDDDDD",
                        borderBottomWidth: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <TouchableOpacity

                            onPress={() => _handleModalClose()}>
                            <AntDesign name="close" size={24} color="black" />
                        </TouchableOpacity>

                        <Text style={{
                            fontFamily: "Bold",
                            padding: 5
                        }}>
                            {roomModalTitle}
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
                            حدد عدد الغرف :

                        </Text>

                        <View style={{
                            width: "100%",

                        }}>

                            <Dropdown
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                itemTextStyle={{ fontFamily: "Regular", fontSize: 12 }}
                                data={avalibeRooms}
                                //search
                                maxHeight={300}
                                labelField="title"
                                valueField="value"
                                placeholder="أختر عدد الغرف المطلوبة"
                                value={room_num}
                                onChange={item => {
                                    setRoomsNum(item.value);
                                    setTotalPrice((parseInt(item.value) * parseInt(selectedRoom?.price)) * parseInt(days_num))
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

                        <View style={{
                            width: "100%",
                            marginTop: 20
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
                                    {room_num}
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
                                    الأيام
                                </Text>
                                <Text style={{
                                    fontFamily: "Bold",
                                    color: "#000"
                                }}>
                                    {days_num}
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
                                    {hotel?.commissionAmount.toString()}
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
                                    {parseInt(total_price)} د.ع
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

                    </View>
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
                    الغرف المتاحة
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
                    data={rooms}
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
                                        {item.roomName}
                                    </Text>
                                </View>

                                <View style={{
                                    flexDirection: "row-reverse"
                                }}>
                                    <Text style={{
                                        fontFamily: "Regular"
                                    }}>
                                        سعر الغرفة ليلة واحدة : {" "}
                                    </Text>

                                    <Text style={{
                                        fontFamily: "Bold",
                                        color: "green"
                                    }}>
                                        {item.price} د.ع
                                    </Text>
                                </View>

                            </View>
                            <ImageBackground
                                imageStyle={styles.itemImg}
                                source={{ uri: api.mediaURL + item.mainImage }}
                            >
                                <View style={styles.itemContent}>


                                </View>


                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    marginTop: 20
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
                                            {item?.roomSize} متر
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
                                            X {item?.bedNumber}
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
                                            X {item?.adultsMaxNo}
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
                                            X {item?.kidsMaxNo}
                                        </Text>
                                    </View>
                                </View>

                            </ImageBackground>


                            <View style={{ paddingHorizontal: 10, marginVertical: 10 }}>
                                <Text
                                    style={{
                                        fontFamily: "Bold",
                                        color: "#000",
                                        textAlign: "right",
                                        fontSize: 12
                                    }}
                                >
                                    الغرف المتبقية : {item.avaliableRoomNumber} غرف
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
                                    onPress={() => _handleRoomSelection(item)}
                                    style={{
                                        backgroundColor: "red",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        borderRadius: 10,
                                        paddingVertical: 10,
                                        paddingHorizontal: 20
                                    }}>
                                    <Text style={{
                                        fontFamily: "Bold",
                                        color: "#FFF"
                                    }}>
                                        حدد عدد الغرف
                                    </Text>

                                    <AntDesign name="caretdown" size={24} color="#FFF" />

                                </TouchableOpacity>


                                <TouchableOpacity
                                    onPress={() => {
                                        setModalTitle("الصور");
                                        setModalImages(item.roomGallery);
                                        setModalVisible(true);
                                    }}
                                    style={{
                                        backgroundColor: "green",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        borderRadius: 10,
                                        paddingVertical: 10,
                                        paddingHorizontal: 20
                                    }}>
                                    <Text style={{
                                        fontFamily: "Regular",
                                        color: "#FFF"
                                    }}>
                                        عرض الصور
                                    </Text>
                                    <Entypo name="images" size={24} color="#FFF" />

                                </TouchableOpacity>
                            </View>
                        </View>
                    } />
            </View>
        </View>
    );
}


