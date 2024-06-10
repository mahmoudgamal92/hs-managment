import React, { useState } from "react";

import {
    Text,
    View,
    StatusBar,
    TouchableOpacity,
} from "react-native";
import {
    Feather,
} from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";


export default function About({ route, navigation }) {

    return (
        <View style={{
            paddingTop: 35,
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
                    عن التطبيق
                </Text>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ position: "absolute", right: 20 }}
                >
                    <Feather name="arrow-right" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>
            <View style={{
                alignItems: "center",
                justifyContent: "center",
            }}>

                <ScrollView>

                    <Text style={{
                        fontFamily: "Bold",
                        marginTop: 50,
                        paddingHorizontal: 10,
                        textAlign: "right"
                    }}>

                        ما هو تطبيق الحجز السريع ؟
                        تطبيق الحجز السريع هو تطبيق خاص قمت بتطويره  مجانا حيث يعمل على توفير خدمات متنوعة مثل خدمات الحجوزات الفندقية  والسياحية بشكل امن لجميع فئات المجتمع . نتعهد بالالتزام بكافة الشروط والأحكام الخاصة بنشر التطبيقات على منصة جوجل بلي google paly .
                        هل الحجز عن طريق تطبيق الحجز امن ومحمي ؟
                        نعم لأن التطبيق يوفر لكم اتصال مباشر مع أصحاب الفنادق والشاليهات والشركات السياحية وكذلك يوفر لكم نسخة من طلبات حجوزاتكم والشركة تكون على علم بالحجوزات المؤكدة من أصحاب الفنادق والشاليهات لأننا نتواصل مع الطرفين لتثبيت الحجوزات وهذا يمكنها من حماية حقوق المستخدمين .

                    </Text>

                    <Text style={{
                        fontFamily: "Bold",
                        marginTop: 50,
                        paddingHorizontal: 10,
                        textAlign: "left"
                    }}>
                        What is the ALHAJZ ALSAREA application?
                        The ALHAJZ ALSAREA is a special application that I developed for the benefit, as it works to provide various services such as hotel and tourist reservation services in a safe manner for all... Segments of society . We pledge to adhere to all terms and conditions for publishing applications on the Google Play platform.
                        Is booking through the booking application safe and secure?
                        Yes, because the application provides you with direct contact with hotel and chalet owners and tourism companies. It also provides you with a copy of your reservation requests. The company is aware of confirmed reservations from hotel and chalet owners because we communicate with both parties to confirm the reservations, and this enables it to protect.
                        the rights of users.
                    </Text>
                </ScrollView>
            </View>
        </View>
    );
}