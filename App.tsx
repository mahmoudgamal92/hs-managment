import { AppStack } from "./src/navigation/AppStack";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import { store } from "@redux";
import { ConfirmationModal } from "@components/molecules/ConfirmationModal/ConfirmationModal";
import { NavigationContainer } from '@react-navigation/native';

import { useState, useEffect } from 'react';
import { Platform, I18nManager } from 'react-native';

import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync } from "@utils/notifications";

I18nManager.allowRTL(false);
I18nManager.forceRTL(false);


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});
if (__DEV__) {
  require("./ReactotronConfig");
}
export default function App() {
  
  const [expoPushToken, setExpoPushToken] = useState('');
  const [channels, setChannels] = useState<Notifications.NotificationChannel[]>([]);
  const [notification, setNotification] = useState<Notifications.Notification | undefined>(
    undefined
  );

  let [fontsLoaded] = useFonts({
    Bold: require("./src/assets/fonts/Bold.ttf"),
    Light: require("./src/assets/fonts/Light.ttf"),
    Regular: require("./src/assets/fonts/Regular.ttf"),
    Medium: require("./src/assets/fonts/Medium.ttf"),
    ExtraBold: require("./src/assets/fonts/ExtraBold.ttf")
  });

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => token && setExpoPushToken(token));

    if (Platform.OS === 'android') {
      Notifications.getNotificationChannelsAsync().then(value => setChannels(value ?? []));
    }
    const notificationListener = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });
    
    return () => {
      notificationListener.remove();
      responseListener.remove();
    };
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
      <ConfirmationModal />
    </Provider>
  );
}
