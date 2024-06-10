import React, { useState } from "react";

import {
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import {
    Feather,
} from "@expo/vector-icons";


export default function Notification({ route, navigation }) {

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
                    الإشعارات
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
                        paddingHorizontal: 10
                    }}>
                        This App don't send you notifications because we designed it to be direct contact from the service provider  to the service asked.

                        الاشعارات
                        التطبيق لا يرسل اليك اشعارات لأننا صممناه لكي يكون هنالك تواصل مباشر مع مزود الخدمة والسائل عن الخدمة.

                        List of possible violations of our policies:

                        Please do not violate any laws or any point of our Prohibited Content Policy:

                        - Publishing false or misleading advertisements

                        - Violating any of the rights of any other party

                        - Post any spam, chain letters, or pyramid marketing scheme

                        - Spreading viruses or any other technology that would harm the site or the interests and property of users or any person

                        - Any act of sabotage, such as attempts to block service or impose an unreasonable burden on the site’s infrastructure

                        - Copy, modify or publish someone else's content

                        - Using any prohibited means to access the site’s database and collect content for any purpose, including bots, web spiders, and similar methods.

                        - Collect information about other users, including private email or any other personal information
                        - Bypassing the procedures used to prevent or restrict access to the site

                        - Using personal information about other people without their explicit consent

                        Prohibited Content:
                        Any advertisement that contains one or more of the prohibited matters below will be deleted, and the site reserves the right to permanently delete the user’s account, put it on the blacklist, or inform the competent authorities to enforce the necessary law:

                        - Alcoholic beverages, wines, tobacco products, narcotics, psychotropic substances, intoxicants, medicines and painkillers, or even placing links, whether direct or indirect, to materials, products or services whose circulation is prohibited by law.

                        - Natural or artificial human organs, including blood and body fluids as well.

                        - Prostitution or any other services, including, that violate the provisions of the law in an immoral manner or the inappropriate representation of women that would violate contemporary standards of morality and decency in Arab societies.


                        - Religious materials, including books, antiques, etc., or any information or description of any of these materials that affects the religious feelings of any person or group.

                        - Sexual objects and suggestions (including: suggestions of slavery and idols), or depictions of genitals, etc.

                        - Antiquities or treasures whose circulation is prohibited under any applicable law.

                        - Information and materials that indicate defamation, defamation, threats, or even abuse

                        - False information about the nature or method of using products and services

                        -Counterfeit or stolen goods or illegal and unauthorized services

                        - Goods, materials and services that violate the rights and intellectual property of any third party, or even the privacy of any person

                        - Transmitting electronic computer viruses or any program that would hack computer systems, damage them, and withdraw personal data

                        - Your information must not contain any content that is insulting to users and/or animals

                        - Hazardous chemicals and pesticides

                        - Fireworks, explosives, explosive devices, and other flammable and dangerous materials

                        - Personal documents, financial records and any personal information including mailing lists

                        - Lottery tickets, horse racing betting and slot machines

                        - Police and army equipment, including badges, uniforms, coats, weapons, and other materials whose circulation is prohibited

                        - Weapons and related tools (such as: firearms, ammunition, tear gas, rifles, sharp objects)

                        - Pyramid marketing services and schemes to defraud users

                        - Fake projects (such as: get rich quick and work from home)

                        - Choosing the wrong sections and subsections (eg: advertising a dining table in the office furniture section)

                        - Endangered or ferocious animals


                    </Text>
                </ScrollView>

            </View>
        </View>
    );
}