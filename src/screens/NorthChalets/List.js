import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    Linking,
    ScrollView
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import {
    MaterialCommunityIcons,
    AntDesign,
    Feather,
    FontAwesome,
    FontAwesome5,
    Ionicons,
    Entypo,
    EvilIcons,
    MaterialIcons
} from "@expo/vector-icons";
import Constants from 'expo-constants';
import { api } from "../../const/api";

import Modal from "react-native-modal";


export default function ChaletResult({ route, navigation }) {
    const { chalets, filters } = route.params;
    const [modalVisible, setModalVisible] = useState(false);
    const [modalImages, setModalImages] = useState([]);


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

                            onPress={() => setModalVisible(false)}>
                            <AntDesign name="close" size={24} color="#586261" />
                        </TouchableOpacity>

                        <Text style={{
                            fontFamily: "Bold",
                            padding: 5
                        }}>
                            الصور
                        </Text>


                    </View>
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
                paddingHorizontal: 10
            }}>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%"
                    }}
                    data={chalets}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) =>

                        <TouchableOpacity
                            //onPress={() => navigation.navigate("ChaletDetails")}
                            style={{
                                borderWidth: 1,
                                borderColor: "#DDDDDD",
                                borderRadius: 10,
                                backgroundColor: "#FFF",
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                marginVertical: 10,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 5,
                                },
                                shadowOpacity: 0.36,
                                shadowRadius: 6.68,

                                elevation: 11,
                            }}
                        >




                            <View style={{
                                flexDirection: "row-reverse",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}>

                                <View style={{
                                    width: "50%"
                                }}>
                                    <Text style={{
                                        fontFamily: "Bold",
                                        textAlign: 'right'
                                    }}>
                                        {item.chaletName}
                                    </Text>
                                    <Text style={{
                                        fontFamily: "Regular",
                                        color: "#00AA76",
                                        textAlign: 'right'
                                    }}>
                                        نوع الحجز : {item.offerTypeName}
                                    </Text>
                                </View>


                                <View style={{
                                    width: "50%"
                                }}>


                                    <View style={{
                                        flexDirection: 'row-reverse',
                                        paddingTop: 5
                                    }}>
                                        <Text style={{
                                            fontFamily: "Regular"
                                        }}>
                                            السعر لحد {item.adultsNumber} شخص :
                                        </Text>

                                        <Text style={{
                                            backgroundColor: 'red',
                                            color: '#FFF',
                                            fontFamily: "Regular",
                                            padding: 1, borderRadius: 5
                                        }}>
                                            {' '}{item.price} الف{' '}
                                        </Text>
                                    </View>
                                </View>

                            </View>

                            <View style={{
                                flexDirection: "row-reverse",
                                marginVertical: 20,
                            }}>


                                <View style={{
                                    width: "40%",
                                    alignItems: "center",
                                    justifyContent: "center",

                                }}>
                                    <ImageBackground source={{ uri: api.mediaURL + item.mainImage }}
                                        style={{
                                            width: "100%",
                                            height: 260,
                                            borderRadius: 10,
                                            justifyContent: "flex-end",
                                        }}

                                        imageStyle={{
                                            borderRadius: 10
                                        }}
                                        resizeMode="cover">

                                        <TouchableOpacity
                                            onPress={() => {
                                                setModalImages(item.chaletGallery)
                                                setModalVisible(true)
                                            }}
                                            style={{
                                                backgroundColor: "#1D4746",
                                                padding: 5,
                                                borderRadius: 5,
                                                flexDirection: "row-reverse",
                                                alignItems: "center"
                                            }}>
                                            <FontAwesome5 name="images" size={24} color="#FFF" style={{
                                                marginHorizontal: 5
                                            }} />
                                            <Text style={{
                                                color: "#FFF",
                                                fontFamily: "Regular"
                                            }}>
                                                عرض الصور
                                            </Text>
                                        </TouchableOpacity>
                                    </ImageBackground>

                                    <View>

                                    </View>


                                </View>

                                <View style={{
                                    width: "60%",
                                    paddingHorizontal: 5
                                }}>

                                    <View style={{
                                        flexDirection: "row-reverse",
                                        flexWrap: "wrap",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                    }}>
                                        <View style={{
                                            width: "33%",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <Text style={{
                                                fontFamily: "Bold",
                                                fontSize: 10,
                                                color: "#34ace0",
                                                marginVertical: 1
                                            }}>
                                                الأشخاص الإضافيين
                                            </Text>
                                            <FontAwesome5 name="users" size={24} color="#586261" />
                                            <Text style={{
                                                fontFamily: "Regular",
                                                fontSize: 10,
                                                color: "#000",
                                                marginVertical: 1
                                            }}>
                                                {item.personsNumber}
                                            </Text>
                                        </View>

                                        <View style={{
                                            width: "33%",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <Text style={{
                                                fontFamily: "Bold",
                                                fontSize: 10,
                                                color: "#34ace0",
                                                marginVertical: 1
                                            }}>
                                                السعر للشخص الإضافي
                                            </Text>
                                            <FontAwesome5 name="money-bill" size={24} color="#586261" />

                                            <Text style={{
                                                fontFamily: "Regular",
                                                fontSize: 10,
                                                color: "#000",
                                                marginVertical: 1
                                            }}>
                                                {item.priceForAdditionalPersons}
                                            </Text>
                                        </View>

                                        <View style={{
                                            width: "33%",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <Text style={{
                                                fontFamily: "Bold",
                                                fontSize: 10,
                                                color: "#34ace0",
                                                marginVertical: 1
                                            }}>
                                                عدد الغرف
                                            </Text>
                                            <FontAwesome5 name="bed" size={24} color="#586261" />

                                            <Text style={{
                                                fontFamily: "Regular",
                                                fontSize: 10,
                                                color: "#000",
                                                marginVertical: 1
                                            }}>
                                                {item?.roomsNumber}
                                            </Text>
                                        </View>


                                        <View style={{
                                            width: "33%",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <Text style={{
                                                fontFamily: "Bold",
                                                fontSize: 10,
                                                color: "#34ace0",
                                                marginVertical: 1
                                            }}>
                                                حديقة
                                            </Text>
                                            <Ionicons name="flower" size={24} color="#586261" />

                                            <Text style={{
                                                fontFamily: "Regular",
                                                fontSize: 10,
                                                color: "#000",
                                                marginVertical: 1
                                            }}>
                                                {item.garden == true ? "يوجد" : "لا يوجد"}
                                            </Text>
                                        </View>


                                        <View style={{
                                            width: "33%",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <Text style={{
                                                fontFamily: "Bold",
                                                fontSize: 10,
                                                color: "#34ace0",
                                                marginVertical: 1
                                            }}>
                                                مسبح كبير
                                            </Text>
                                            <FontAwesome5 name="swimmer" size={24} color="#586261" />

                                            <Text style={{
                                                fontFamily: "Regular",
                                                fontSize: 10,
                                                color: "#000",
                                                marginVertical: 1
                                            }}>
                                                {item.bigPool == true ? "يوجد" : "لا يوجد"}
                                            </Text>
                                        </View>



                                        <View style={{
                                            width: "33%",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <Text style={{
                                                fontFamily: "Bold",
                                                fontSize: 10,
                                                color: "#34ace0",
                                                marginVertical: 1
                                            }}>
                                                عربون
                                            </Text>
                                            <FontAwesome5 name="money-bill" size={24} color="#586261" />

                                            <Text style={{
                                                fontFamily: "Regular",
                                                fontSize: 10,
                                                color: "#000",
                                                marginVertical: 1
                                            }}>
                                                {item.deposit == true ? "يوجد" : "لا يوجد"}
                                            </Text>
                                        </View>




                                        <View style={{
                                            width: "33%",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <Text style={{
                                                fontFamily: "Bold",
                                                fontSize: 10,
                                                color: "#34ace0",
                                                marginVertical: 1
                                            }}>
                                                المساحة
                                            </Text>
                                            <AntDesign name="areachart" size={24} color="#586261" />

                                            <Text style={{
                                                fontFamily: "Regular",
                                                fontSize: 10,
                                                color: "#000",
                                                marginVertical: 1
                                            }}>
                                                {item?.spaceNumber}
                                            </Text>
                                        </View>



                                        <View style={{
                                            width: "33%",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <Text style={{
                                                fontFamily: "Bold",
                                                fontSize: 10,
                                                color: "#34ace0",
                                                marginVertical: 1
                                            }}>
                                                نوع التبريد
                                            </Text>
                                            <MaterialCommunityIcons name="fan" size={24} color="#586261" />

                                            <Text style={{
                                                fontFamily: "Regular",
                                                fontSize: 10,
                                                color: "#000",
                                                marginVertical: 1
                                            }}>
                                                {item?.coolingType}
                                            </Text>
                                        </View>



                                        <View style={{
                                            width: "33%",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <Text style={{
                                                fontFamily: "Bold",
                                                fontSize: 10,
                                                color: "#34ace0",
                                                marginVertical: 1
                                            }}>
                                                مطبخ
                                            </Text>
                                            <MaterialIcons name="soup-kitchen" size={24} color="#586261" />

                                            <Text style={{
                                                fontFamily: "Regular",
                                                fontSize: 10,
                                                color: "#000",
                                                marginVertical: 1
                                            }}>
                                                {item.kitchen == true ? "يوجد" : "لا يوجد"}
                                            </Text>
                                        </View>



                                        <View style={{
                                            width: "33%",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <Text style={{
                                                fontFamily: "Bold",
                                                fontSize: 10,
                                                color: "#34ace0",
                                                marginVertical: 1
                                            }}>
                                                صالة
                                            </Text>
                                            <MaterialCommunityIcons name="hoop-house" size={24} color="#586261" />

                                            <Text style={{
                                                fontFamily: "Regular",
                                                fontSize: 10,
                                                color: "#000",
                                                marginVertical: 1
                                            }}>
                                                {item.hall == true ? "يوجد" : "لا يوجد"}
                                            </Text>
                                        </View>


                                        <View style={{
                                            width: "33%",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <Text style={{
                                                fontFamily: "Bold",
                                                fontSize: 10,
                                                color: "#34ace0",
                                                marginVertical: 1
                                            }}>
                                                كراج
                                            </Text>
                                            <FontAwesome5 name="car-side" size={24} color="#586261" />

                                            <Text style={{
                                                fontFamily: "Regular",
                                                fontSize: 10,
                                                color: "#000",
                                                marginVertical: 1
                                            }}>
                                                {item.parking == true ? "يوجد" : "لا يوجد"}
                                            </Text>
                                        </View>



                                        <View style={{
                                            width: "33%",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>
                                            <Text style={{
                                                fontFamily: "Bold",
                                                fontSize: 10,
                                                color: "#34ace0",
                                                marginVertical: 1
                                            }}>
                                                عدد الحمامات
                                            </Text>
                                            <FontAwesome5 name="bath" size={24} color="#586261" />

                                            <Text style={{
                                                fontFamily: "Regular",
                                                fontSize: 10,
                                                color: "#000",
                                                marginVertical: 1
                                            }}>
                                                {item.bathroomNumber}
                                            </Text>
                                        </View>
                                    </View>


                                    <View style={{ backgroundColor: "yellow", padding: 5, borderRadius: 5, marginTop: 10 }}>
                                        <Text style={{
                                            textAlign: "center",
                                            fontFamily: "Regular",
                                            fontSize: 12
                                        }}>
                                            الدفع عن طريق {item.paymentMethod}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                flexDirection: "row-reverse",
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("NothChaletPreOrder", {
                                        item: item,
                                        filters: filters
                                    })}
                                    style={{
                                        backgroundColor: "red",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 10,
                                        paddingVertical: 5,
                                        paddingHorizontal: 20,
                                        marginTop: 10,
                                        height: 40
                                    }}>
                                    <Text style={{
                                        fontFamily: "Bold",
                                        color: "#FFF"
                                    }}>
                                        إرسل طلب
                                    </Text>

                                    <AntDesign name="shoppingcart" size={26} color="#FFF" />

                                </TouchableOpacity>


                                <TouchableOpacity
                                    onPress={() => Linking.openURL(item.address)}

                                    style={{
                                        backgroundColor: "#00AA76",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 10,
                                        paddingVertical: 5,
                                        paddingHorizontal: 20,
                                        marginTop: 10,
                                        height: 40
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


                        </TouchableOpacity>
                    } />
            </View>
        </View >
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
        marginVertical: 1,
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
        width: "50%",
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
        borderColor: "#34ace0"
    },

    itemContainer: {
        borderRadius: 15,
        marginHorizontal: 5,
        width: "100%",
        marginVertical: 1,
        backgroundColor: "#FFF",
        elevation: 5
    },
    item: {
        width: "100%"
    }
});
