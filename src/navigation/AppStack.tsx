import { createStackNavigator } from "@react-navigation/stack";

import {
    SignInScreen,
    SplashScreen
} from "@features/Auth/screens";

import { ChaletManagmentScreen } from "@features/Chalets/screens";
import { DashboardNavigator } from "./DashboardNavigator";


export const AppStack = () => {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerShown: false
            }}
        >
            <HomeStack.Screen name="Splash" component={SplashScreen} />
            <HomeStack.Screen name="SignIn" component={SignInScreen} />
            <HomeStack.Screen name="Home" component={DashboardNavigator} />
            <HomeStack.Screen name="ChaletManagmentScreen" component={ChaletManagmentScreen} />
        </HomeStack.Navigator>
    );
};
