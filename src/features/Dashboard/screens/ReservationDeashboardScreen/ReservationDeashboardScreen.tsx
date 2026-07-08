import React, { useState, useEffect } from "react";
import {
    View,
    StatusBar,
    ScrollView,
} from "react-native";
import { BaseLayout, DashboardHeader, Loader, ReservationCard, Tabber } from '@components';
import { useReservations } from "@features/Dashboard/hooks/useReservations";
import { useModal } from "@hooks/useModal";
import { Reservation } from "@types";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export const ReservationDeashboardScreen = ({ route, navigation }: NativeStackScreenProps<any>) => {
    const { reservations, getUserReservations, updateReservation, loading } = useReservations();
    const [selectedTab, setSelectedTab] = useState<string | number>(1);
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

    const handleTabPress = (id: string | number) => {
        setSelectedTab(id);
        getUserReservations(id);
    }

    return (
        <BaseLayout>
            <StatusBar translucent backgroundColor="transparent" />
            <DashboardHeader />

            <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                <Tabber data={tabs} selected={selectedTab} onSelect={(id) => handleTabPress(id)} widthPercent="33%" />
            </View>

            <Loader visible={loading} />
            <ScrollView
                contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
            >
                {reservations.map((reservation) => (
                    <ReservationCard
                        key={reservation.id}
                        reservation={reservation}
                        onAccept={() => handleDeletePress(reservation, '2')}
                        onReject={() => handleDeletePress(reservation, '0')}
                    />
                ))}
            </ScrollView>
        </BaseLayout>
    );
}
