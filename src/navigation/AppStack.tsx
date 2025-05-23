import { createStackNavigator } from "@react-navigation/stack";

import {
    SignInScreen,
    SplashScreen
} from "@features/Auth/screens";

import { DashboardScreen } from "@features/Dashboard/screens";
import { ChaletManagmentScreen } from "@features/Chalets/screens";


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
            <HomeStack.Screen name="Home" component={DashboardScreen} />
            <HomeStack.Screen name="ChaletManagmentScreen" component={ChaletManagmentScreen} />
        </HomeStack.Navigator>
    );
};
