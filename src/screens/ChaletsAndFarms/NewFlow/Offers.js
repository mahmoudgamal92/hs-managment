import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Feather } from "@expo/vector-icons";
import Constants from 'expo-constants';
import moment from "moment";

import Modal from "react-native-modal";


export default function Offers({ route, navigation }) {
    const { chalet, offers } = route.params;


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
                    <Feather name="arrow-right" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>

            <View style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 10,
                width: '100%'
            }}>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        justifyContent: "center",
                    }}
                    style={{
                        width: "100%"
                    }}
                    data={offers}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item }) =>

                        <View
                            style={{
                                borderWidth: 1,
                                borderColor: "#DDDDDD",
                                borderRadius: 10,
                                backgroundColor: "#FFF",
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                marginVertical: 10,
                                shadowColor: "#000",
                                width: '100%',

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
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'flex-end'
                            }}>
                                <View style={{
                                    backgroundColor: "#FF9000",
                                    marginBottom: 5,
                                    paddingHorizontal: 10,
                                    borderRadius: 5
                                }}>
                                    <Text style={{
                                        fontFamily: 'Bold',
                                        width: '100%',
                                        textAlign: 'right'
                                    }}>{moment(item.offerDate).format("MM-DD-YYYY")}</Text>
                                </View>


                                <View style={{
                                    flexDirection: 'row-reverse',
                                    justifyContent: 'space-between',
                                    width: '100%'
                                }}>
                                    {item.avaliableOfferModels.map(itm =>

                                        <View style={{
                                            backgroundColor: "#00AA76",
                                            padding: 5,
                                            borderRadius: 5,
                                            width: '30%',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between'
                                        }}>

                                            <TouchableOpacity
                                                onPress={() => navigation.navigate("NewPreOrder", {
                                                    chalet: chalet,
                                                    offer: itm,
                                                    date: item.offerDate

                                                })}
                                                style={{
                                                    backgroundColor: 'red',
                                                    borderRadius: 5,
                                                    padding: 1
                                                }}>
                                                <Text style={{
                                                    color: '#FFF',
                                                    fontFamily: 'Regular',
                                                    fontSize: 10
                                                }}>
                                                    أرسل طلب
                                                </Text>
                                            </TouchableOpacity>


                                            <Text style={{
                                                color: '#FFF',
                                                fontFamily: 'Regular',
                                                fontSize: 10
                                            }}>
                                                {itm.offerTypeName}
                                            </Text>


                                        </View>
                                    )}

                                </View>
                            </View>
                        </View>
                    } />
            </View>
        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
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
