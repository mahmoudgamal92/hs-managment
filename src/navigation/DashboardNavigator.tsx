import * as React from 'react';
import { Text, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { ReservationDeashboardScreen, ReservationReportScreen } from "@features/Dashboard/screens";
import { colors } from '@theme';

export const DashboardNavigator = () => {
    const Tab = createBottomTabNavigator();

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
                    height: Platform.OS == 'ios' ? 90 : 60,
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




            <Tab.Screen name="Reservation" component={ReservationDeashboardScreen}
                options={{
                    tabBarLabel: ({ color }) =>
                        <Text style={{ fontFamily: "Regular", color }}>
                            طلبات الحجز
                        </Text>,
                    tabBarIcon: ({ color, size }) =>
                        <FontAwesome5 name="list" size={22} color={color}
                        />

                }} />


            <Tab.Screen name="HomeDashboard" component={ReservationReportScreen}
                options={{
                    tabBarLabel: ({ color }) =>
                        <Text style={{ fontFamily: "Regular", color }}>
                            السجل الرئيسي
                        </Text>,
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons
                            name="home-search-outline"
                            size={22}
                            color={color}
                        />
                }} />


        </Tab.Navigator>
    );
}