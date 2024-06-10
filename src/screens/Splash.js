import { View, Text, ActivityIndicator, Image } from 'react-native'
import React, { useEffect } from 'react';
import {
    FontAwesome,

} from "@expo/vector-icons";
export default function Splash({ route, navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('TabNavigator');
        }, 3000);
    }, []);
    return (
        <View style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            backgroundColor: "#34ACE0"
        }}>

            <Image
                resizeMode='contain'
                source={require('./../../assets/logo.png')} style={{
                    height: 400
                }} />


            <Text style={{
                color: "#FFF",
                fontFamily: "Bold",
                fontSize: 20,
                marginTop: 50,
                marginBottom: 20
            }}>
                هلا فيك بتطبيق الحجز السريع  👋👋
            </Text>
            <Text style={{
                color: "#FFF",
                fontFamily: "Regular",
                fontSize: 20
            }}>
                الرجاء الإنتظار قليلا
            </Text>


            <ActivityIndicator size={70} color={"#FFF"} style={{
                marginVertical: 50,

            }} />
        </View>
    )
}