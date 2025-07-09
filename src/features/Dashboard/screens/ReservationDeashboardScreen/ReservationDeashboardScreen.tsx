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
import { BaseLayout, DatePicker, Header, Loader, ReservationCard, Slider, Tabber } from '@components';
import { useChalets } from "@features/Chalets/hooks/useChalets";
import { Dropdown } from "react-native-element-dropdown";
import { months, offerTypes, PRIVACY_URL } from "@constants";
import { colors } from "@theme";
import { styles } from './styles';
import { useReservations } from "@features/Dashboard/hooks/useReservations";
import { useModal } from "@hooks/useModal";
import { Reservation } from "@types";
export const ReservationDeashboardScreen = ({ route, navigation }) => {
    const { reservations, getUserReservations, updateReservation, loading } = useReservations();
    const [selectedTab, setSelectedTab] = useState(1);
    const { confirm } = useModal();

    useEffect(() => {
        getUserReservations(selectedTab);
    }, [getUserReservations])


    const handleDeletePress = (reservation: Reservation, action: string) => {
        confirm({
            title: action === '0' ? "سيتم رفض الحجز ؟" : "سيتم تاكيد الحجز",
            message: "هل انت متأكد من أنك تريد " + (action === '0' ? "رفض" : "تأكيد") + " هذا الحجز؟",
            confirmText: "تآكيد",
            cancelText: "الغا",
            onConfirm: () => {
                updateReservation(reservation, Number(action));
            },
        });
    };



    const tabs = [
        { id: 1, title: "قيد الانتظار" },
        { id: 2, title: "مقبوله" },
        { id: 0, title: "مرفوضه" },
    ];

    const handleTabPress = (id) => {

        setSelectedTab(id);
        getUserReservations(id);
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
                <Tabber data={tabs} selected={selectedTab} onSelect={(id) => handleTabPress(id)} widthPercent="33%" />
            </View>

            <Loader visible={loading} />
            <ScrollView contentContainerStyle={{
                paddingHorizontal: 20,
                paddingBottom: 20
            }} showsVerticalScrollIndicator={false}>

                {reservations.map((reservation, index) => {
                    return (
                        <ReservationCard reservation={reservation} onAccept={(id) => { handleDeletePress(reservation, '2') }} onReject={(id) => { handleDeletePress(reservation, '0') }} />
                    );
                }
                )}
            </ScrollView>
        </BaseLayout>
    );
}

