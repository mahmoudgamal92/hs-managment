import { View, Text, ActivityIndicator, Image } from 'react-native'
import React, { useEffect, useState } from 'react';
import * as Application from 'expo-application';

import Constants from 'expo-constants';


export default function Splash({ route, navigation }) {
    const [loading, setLoading] = useState(false);


    const getVersion = async () => {
        if (Constants.appOwnership === 'expo') {
            return require('./../../package.json').version;
        }
        return Application.nativeBuildVersion;
    };



    useEffect(() => {
        _retrieveData();
    }, []);

    const _retrieveData = async () => {
        try {
            const currentVersion = await getVersion();
            fetch('https://mestamal.com/dashboard/api_mobile/version.php',
                {
                    method: "GET",
                    headers: {
                        Accept: "*/*",
                        "cache-control": "no-cache",
                        "Content-type": "multipart/form-data;",
                        "Accept-Encoding": "gzip, deflate, br",
                        Connection: "keep-alive",
                    }
                }
            )
                .then(response => response.json())
                .then(json => {
                    if (json.success === true) {
                        if (parseInt(json.version) > parseInt(currentVersion)) {
                            console.log(json.version);
                            console.log(currentVersion);
                            navigation.replace('VersionUpgrade');
                        }
                        else {
                            navigation.replace('TabNavigator');
                        }
                    } else {
                        //navigation.replace('TabNavigator');
                    }
                })
                .finally(() => setLoading(false))
                .catch(error => console.error(error));

        } catch (error) {
            console.log(error);
        }
    };

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