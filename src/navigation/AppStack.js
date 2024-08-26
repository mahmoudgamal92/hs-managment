import { createStackNavigator } from "@react-navigation/stack";

import Splash from "./../screens/Splash";



import Home from "../screens/Index";


import Hotels from "../screens/HotelFlow/Index";
import MoreInfo from "../screens/MoreFlow/Index";

import HotelResult from "../screens/HotelFlow/Hotels";
import Rooms from "../screens/HotelFlow/Rooms";

import RoomDetails from "../screens/HotelFlow/RoomDetails";
import HotelPreOrder from "../screens/HotelFlow/PreOrder";
import HotelConfirm from "../screens/HotelFlow/Confirm";


import ChaletsAndFarms from "../screens/ChaletsAndFarms/Index";
import ChaletsAndFarmsResult from "../screens/ChaletsAndFarms/List";
import ChaletsAndFarmsPreOrder from "../screens/ChaletsAndFarms/PreOrder";
import ChaletsAndFarmsConfirm from "../screens/ChaletsAndFarms/ConfirmOrder";

import NorthChalets from "../screens/NorthChalets/Index";
import NothChaletResult from "../screens/NorthChalets/List";
import NothChaletPreOrder from "../screens/NorthChalets/PreOrder";
import NorthChaletConfirm from "../screens/NorthChalets/ConfirmOrder";

import Terms from "../screens/MoreFlow/Terms";
import Policy from "../screens/MoreFlow/Policy";
import Services from "../screens/MoreFlow/Services";
import About from "../screens/MoreFlow/About";
import Contact from "../screens/MoreFlow/Contact";
import Notification from "../screens/MoreFlow/Notification";
import ChaletsAndFarmsNewList from "./../screens/ChaletsAndFarms/NewFlow/List";
import MonthSelection from "./../screens/ChaletsAndFarms/NewFlow/MonthSelection";
import Offers from "./../screens/ChaletsAndFarms/NewFlow/Offers";
import NewPreOrder from "./../screens/ChaletsAndFarms/NewFlow/PreOrder";
import NewChaletsAndFarmsConfirm from "./../screens/ChaletsAndFarms/NewFlow/ConfirmOrder";




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

            <HomeStack.Screen name="TabNavigator" component={Home} />

            {/* Hotels Section */}
            <HomeStack.Screen name="Hotels" component={Hotels} />
            <HomeStack.Screen name="HotelResult" component={HotelResult} />
            <HomeStack.Screen name="Rooms" component={Rooms} />
            <HomeStack.Screen name="RoomDetails" component={RoomDetails} />
            <HomeStack.Screen name="HotelConfirm" component={HotelConfirm} />
            <HomeStack.Screen name="HotelPreOrder" component={HotelPreOrder} />

            {/* Chalet Section */}
            <HomeStack.Screen name="ChaletsAndFarms" component={ChaletsAndFarms} />
            <HomeStack.Screen name="ChaletsAndFarmsResult" component={ChaletsAndFarmsResult} />
            <HomeStack.Screen name="ChaletsAndFarmsPreOrder" component={ChaletsAndFarmsPreOrder} />
            <HomeStack.Screen name="ChaletsAndFarmsConfirm" component={ChaletsAndFarmsConfirm} />
            <HomeStack.Screen name="ChaletsAndFarmsNewList" component={ChaletsAndFarmsNewList} />
            <HomeStack.Screen name="MonthSelection" component={MonthSelection} />
            <HomeStack.Screen name="Offers" component={Offers} />
            <HomeStack.Screen name="NewPreOrder" component={NewPreOrder} />
            <HomeStack.Screen name="NewChaletsAndFarmsConfirm" component={NewChaletsAndFarmsConfirm} />
            {/* North Chalet Section */}
            <HomeStack.Screen name="NorthChalets" component={NorthChalets} />
            <HomeStack.Screen name="NothChaletResult" component={NothChaletResult} />
            <HomeStack.Screen name="NothChaletPreOrder" component={NothChaletPreOrder} />
            <HomeStack.Screen name="NorthChaletConfirm" component={NorthChaletConfirm} />

            {/* Moree Section */}
            <HomeStack.Screen name="MoreInfo" component={MoreInfo} />
            <HomeStack.Screen name="Terms" component={Terms} />
            <HomeStack.Screen name="Policy" component={Policy} />
            <HomeStack.Screen name="About" component={About} />
            <HomeStack.Screen name="Contact" component={Contact} />
            <HomeStack.Screen name="Services" component={Services} />
            <HomeStack.Screen name="Notification" component={Notification} />

        </HomeStack.Navigator>
    );
};
