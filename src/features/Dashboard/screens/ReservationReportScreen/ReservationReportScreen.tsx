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
import { months, offerTypes, PRIVACY_URL } from "@constants";
import { styles } from './styles';
import { colors } from "@theme";
import { useDashboard } from "@features/Dashboard/hooks";

export const ReservationReportScreen = ({ route, navigation }) => {
    const currentYear = new Date().getFullYear().toString();
    const currentMonth = (new Date().getMonth() + 1).toString();
    const currentDay = new Date().getDate().toString();
    const [startDate, setStartDate] = useState(`${currentMonth}-${currentDay}-${currentYear}`);
    const [endDate, setEndDate] = useState('');

    const [selectedChalet, setSelectedChalet] = useState('0');
    const [offerType, setOfferType] = useState(1);
    const { getUserChalets, chalets, } = useDashboard();

    useEffect(() => {
        getUserChalets();
    }, [getUserChalets])

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
            OfferType: offerType === 0 ? '' : offerType.toString(),
            FromDate: startDate,
            ToDate: offerType === 0 ? endDate : '',
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
            <View style={{
                paddingHorizontal: 20,
                paddingVertical: 20
            }}>
                <Text style={{
                    color: colors.BEIGE,
                    fontFamily: "Bold",
                    fontSize: 18,
                    textAlign: 'right'

                }}>
                    هلا فيك بتطبيق اداره الحجوزات   👋👋
                </Text>
            </View>

            <View style={{
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
                                    backgroundColor: offerType == parseFloat(item.id) ? colors.BEIGE : colors.WHITE,
                                    borderLeftColor: "#DDDDDD",
                                    borderLeftWidth: 1,
                                    width: "25%",
                                    height: 50,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>

                                <Text style={{
                                    fontFamily: "Bold",
                                    color: offerType == parseFloat(item.id) ? colors.WHITE : colors.BEIGE,
                                    fontSize: 12,
                                    textAlign: "center",
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
                        value={selectedChalet}
                        placeholder="اختر الشاليه"
                        maxHeight={300}
                        labelField="arabicName"
                        valueField="id"
                        onChange={(item) =>
                            setSelectedChalet(item.id)
                        }
                    />
                </View>

                {offerType === 0 ?

                    <View style={{
                        paddingTop: 10,
                    }}>
                        <Text style={{
                            textAlign: 'right',
                            fontFamily: 'Bold',
                            fontSize: 16
                        }}>
                            حدد الشهر
                        </Text>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            iconStyle={styles.iconStyle}
                            itemTextStyle={{ fontFamily: "Regular", fontSize: 12 }}
                            data={months}
                            placeholder="اختر الشهر"
                            maxHeight={300}
                            labelField="monthArabic"
                            valueField="monthNumber"
                            onChange={(item) => {
                                setStartDate(item.from);
                                setEndDate(item.to);
                            }
                            }
                        />
                    </View>
                    :
                    <View style={{
                        paddingHorizontal: 5,
                        paddingTop: 10,
                    }}>
                        <DatePicker
                            label={'حدد التاريخ'}
                            onDateChange={handleStartDateChange}
                            plus={0}
                            dropdownPosition={"top"}
                        />
                    </View>
                }


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

        </BaseLayout >
    );
}

