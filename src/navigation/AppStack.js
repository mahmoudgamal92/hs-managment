import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./BottomTabs";
import Splash from "./../screens/Splash";
import HotelResult from "../screens/Result/Hotels";
export default AppStack = () => {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerShown: false
            }}
        >
            <HomeStack.Screen name="Splash" component={Splash} />
            <HomeStack.Screen name="TabNavigator" component={TabNavigator} />
            <HomeStack.Screen name="HotelResult" component={HotelResult} />

        </HomeStack.Navigator>
    );
};
