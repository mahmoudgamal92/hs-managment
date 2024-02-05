import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
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
            <Text style={{
                color: "#FFF",
                fontFamily: "Bold"
            }}>
                أهلا في تطبيق الحجز السريع
            </Text>


            <ActivityIndicator size={70} color={"#FFF"} style={{
                marginTop: 100
            }} />
        </View>
    )
}