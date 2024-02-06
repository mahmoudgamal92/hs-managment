import { Platform, Text } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    Ionicons,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome5
} from "@expo/vector-icons";

import Home from "./../screens/Home";
import Farms from "./../screens/Farms";
import Hotels from "../screens/Hotels";
import Halls from "../screens/Halls";
import Trips from "../screens/Trips";

export default TabNavigator = () => {
    const Tabs = createBottomTabNavigator();
    return (
        <Tabs.Navigator
            initialRouteName="HomePage"
            backBehavior="initialRoute"
            backgroundColor="#34ace0"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#FFF",
                    height: Platform.OS == "android" ? 60 : 80
                }
            }}
        >
            <Tabs.Screen
                name="HomePage"
                component={Home}
                options={{
                    tabBarLabel: ({ color, size }) =>
                        <Text style={{ fontFamily: "Regular", color }}>الرئيسية</Text>,
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons
                            name="home-search-outline"
                            size={22}
                            color={color}
                        />
                }}
            />

            <Tabs.Screen
                name="Hotels"
                component={Hotels}
                options={{
                    tabBarLabel: ({ color, size }) =>
                        <Text style={{ fontFamily: "Regular", color }}>الفنادق</Text>,
                    tabBarIcon: ({ color, size }) =>
                        <FontAwesome5 name="hotel" size={22} color={color} />
                }}
            />

            <Tabs.Screen
                name="Trips"
                component={Trips}
                options={{
                    tabBarLabel: ({ color, size }) =>
                        <Text style={{ fontFamily: "Regular", color }}>الرحلات</Text>,
                    tabBarIcon: ({ color, size }) =>
                        <Ionicons name="ios-chatbubbles-outline" size={22} color={color} />
                }}
            />

            <Tabs.Screen
                name="Farms"
                component={Farms}
                options={{
                    tabBarLabel: ({ color, size }) =>
                        <Text style={{ fontFamily: "Regular", color }}>مزارع</Text>,
                    tabBarIcon: ({ color, size }) =>
                        <MaterialCommunityIcons
                            name="file-document-multiple-outline"
                            size={22}
                            color={color}
                        />
                }}
            />

            <Tabs.Screen
                name="Halls"
                component={Halls}
                options={{
                    tabBarLabel: ({ color, size }) =>
                        <Text style={{ fontFamily: "Regular", color }}>صالات </Text>,
                    tabBarIcon: ({ color, size }) =>
                        <Ionicons name="md-hand-right-outline" size={24} color={color} />
                }}
            />
        </Tabs.Navigator>
    );
};