import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    StatusBar,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView,
    Modal,
    Image,
    Linking
} from "react-native";
import { BaseLayout, DatePicker, Header, Slider } from '@components';
import { useChalets } from "@features/Chalets/hooks/useChalets";
import { Dropdown } from "react-native-element-dropdown";
import { offerTypes, PRIVACY_URL } from "@constants";
import { styles } from './styles';
import { colors } from "@theme";
import { useDashboard } from "@features/Dashboard/hooks";

export const DashboardScreen = ({ route, navigation }) => {
    const currentYear = new Date().getFullYear().toString();
    const currentMonth = (new Date().getMonth() + 1).toString();
    const currentDay = new Date().getDate().toString();
    const [startDate, setStartDate] = useState(`${currentMonth}-${currentDay}-${currentYear}`);
    const [selectedChalet, setSelectedChalet] = useState('0');
    const [offerType, setOfferType] = useState(1);
    const { getHomeBanner, getUserChalets, chalets, banners } = useDashboard();

    useEffect(() => {
        getHomeBanner();
        getUserChalets();
    }, [getHomeBanner, getUserChalets])

    const { getAllOffers, loading } = useChalets(
        {
            onSuccess: (data) => {
                navigation.navigate('ChaletManagmentScreen', {
                    data: data
                })
            }
            ,
            onError: () => {
                alert('error')
            },

        }
    );


    const handleStartDateChange = (year, month, day) => {
        setStartDate(`${month}-${day}-${year}`);
    };

    const applyFilter = () => {
        if (startDate === '' || selectedChalet === '0') {
            alert('يرجى استكمال جميع البيانات المطلوبة');
            return;
        }
        const formData = {
            ChaletId: selectedChalet,
            OfferType: offerType.toString(),
            FromDate: startDate,
            ToDate: '',
        }
        getAllOffers(formData);
    }
    return (
        <BaseLayout>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={styles.header}>
                <View
                    style={{
                        width: "100%",
                        flexDirection: "row-reverse",
                        justifyContent: "space-between"
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: "33%",
                            justifyContent: "center",
                            alignItems: "flex-end"
                        }}
                    >

                        <Image
                            resizeMode='contain'
                            source={require('@assets/logo.png')} style={{
                                height: 50,
                                width: 50
                            }} />



                    </TouchableOpacity>

                    <View style={{ width: "33%", alignItems: "center", justifyContent: "center" }}>
                        <Text style={{
                            fontFamily: "Regular",
                            color: colors.WHITE
                        }}>
                            للإسنفسار + واتساب
                        </Text>

                        <Text style={{
                            fontFamily: "Regular",
                            color: colors.WHITE
                        }}>
                            07824846025
                        </Text>
                    </View>

                    <TouchableOpacity
                        onPress={() => Linking.openURL(PRIVACY_URL)}
                        style={{
                            width: "33%",
                            justifyContent: "center",
                            alignItems: "flex-start"
                        }}
                    >
                        <Text style={{
                            fontFamily: "Bold",
                            fontSize: 10,
                            color: colors.WHITE
                        }}>
                            سياسة الخصوصية
                        </Text>

                    </TouchableOpacity>

                </View>
            </View>
            <View>
                <Slider banners={banners} />
            </View>
            <View style={{
                paddingTop: 20,
                paddingHorizontal: 30
            }}>

                <Text style={{
                    textAlign: 'right',
                    fontFamily: 'Bold',
                    fontSize: 16
                }}>
                    حدد نوع الحجز
                </Text>
                <View style={styles.tabber}>
                    {
                        offerTypes.map((item) =>
                            <TouchableOpacity
                                onPress={() => {
                                    setOfferType(parseFloat(item.id))
                                }}
                                style={{
                                    paddingVertical: 15,
                                    backgroundColor: offerType == parseFloat(item.id) ? colors.BEIGE : colors.WHITE,
                                    borderLeftColor: "#DDDDDD",
                                    borderLeftWidth: 1,
                                    width: "33%"
                                }}>

                                <Text style={{
                                    fontFamily: "Regular",
                                    color: offerType == parseFloat(item.id) ? colors.WHITE : colors.BEIGE,
                                    fontSize: 14,
                                    textAlign: "center",
                                    paddingHorizontal: 5
                                }}>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>
                        )
                    }
                </View>

                <View style={{
                    paddingTop: 10,

                }}>
                    <Text style={{
                        textAlign: 'right',
                        fontFamily: 'Bold',
                        fontSize: 16
                    }}>
                        حدد الشاليه
                    </Text>
                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        iconStyle={styles.iconStyle}
                        itemTextStyle={{ fontFamily: "Regular", fontSize: 12 }}
                        data={chalets}
                        placeholder="اختر الشاليه"
                        maxHeight={300}
                        labelField="arabicName"
                        valueField="id"
                        onChange={(item) =>
                            setSelectedChalet(item.id)
                        }
                    />
                </View>

                <View style={{
                    paddingHorizontal: 5,
                    paddingTop: 10,
                }}>
                    <DatePicker
                        label={'حدد التاريخ'}
                        onDateChange={handleStartDateChange}
                        plus={0}
                        dropdownPosition={"bottom"}
                    />
                </View>


                <TouchableOpacity
                    onPress={() => applyFilter()}
                    style={{
                        width: "100%",
                        backgroundColor: colors.BEIGE,
                        padding: 10,
                        borderRadius: 10,
                        marginVertical: 15
                    }}>
                    {loading == true ?

                        <ActivityIndicator size={40} color={"#FFF"} />
                        :
                        <Text style={{
                            textAlign: "center",
                            fontFamily: "Bold",
                            color: "#FFF"
                        }}>
                            إضغط هنا للبحث
                        </Text>
                    }
                </TouchableOpacity>

            </View>

        </BaseLayout>
    );
}

