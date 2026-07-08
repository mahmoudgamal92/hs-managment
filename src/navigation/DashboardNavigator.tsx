import * as React from 'react';
import { Platform } from 'react-native';
import { Text } from '@components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { ReservationDeashboardScreen, ReservationReportScreen, ProfileScreen } from "@features/Dashboard/screens";
import { colors } from '@theme';

export const DashboardNavigator = () => {
    const Tab = createBottomTabNavigator();
    const { bottom } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            id={undefined}
            initialRouteName="HomeDashboard"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.BLUE,
                tabBarInactiveTintColor: colors.WHITE,
                tabBarStyle: {
                    backgroundColor: colors.BEIGE,
                    borderTopWidth: 0,
                    height: (Platform.OS === 'ios' ? 90 : 60) + bottom,
                    paddingBottom: bottom,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                },

                tabBarIconStyle: {
                    marginTop: 5
                },
            }}
        >

            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarLabel: ({ color }) =>
                        <Text style={{ fontFamily: "Regular", color }}>
                            الملف الشخصي
                        </Text>,
                    tabBarIcon: ({ color }) =>
                        <MaterialCommunityIcons
                            name="account-circle-outline"
                            size={22}
                            color={color}
                        />
                }} />

            <Tab.Screen name="Reservation" component={ReservationDeashboardScreen}
                options={{
                    tabBarLabel: ({ color }) =>
                        <Text style={{ fontFamily: "Regular", color }}>
                            طلبات الحجز
                        </Text>,
                    tabBarIcon: ({ color }) =>
                        <FontAwesome5 name="list" size={22} color={color}
                        />

                }} />


            <Tab.Screen name="HomeDashboard" component={ReservationReportScreen}
                options={{
                    tabBarLabel: ({ color }) =>
                        <Text style={{ fontFamily: "Regular", color }}>
                            السجل الرئيسي
                        </Text>,
                    tabBarIcon: ({ color }) =>
                        <MaterialCommunityIcons
                            name="home-search-outline"
                            size={22}
                            color={color}
                        />
                }} />


        </Tab.Navigator>
    );
}