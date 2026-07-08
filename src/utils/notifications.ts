import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Alert, Linking, Platform } from 'react-native';
import Constants from 'expo-constants';


// On Android < 13, notifications are auto-granted (no dialog shown).
// On Xiaomi/MIUI, the OS grants permission but MIUI blocks delivery by default.
// This prompts the user to manually enable autostart and notifications in MIUI settings.
function promptMiuiNotificationSettings() {
  const brand = Device.brand?.toLowerCase() ?? '';
  if (!['xiaomi', 'redmi', 'poco'].includes(brand)) return;

  Alert.alert(
    'Enable Notifications',
    'On Xiaomi devices, you need to manually enable Autostart and Notifications for this app to receive alerts.\n\nGo to: Settings → Apps → Manage apps → [This App] → Autostart & Notifications',
    [
      { text: 'Later', style: 'cancel' },
      { text: 'Open Settings', onPress: () => Linking.openSettings() },
    ],
  );
}

export async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got mail! 📬",
      body: 'Here is the notification body',
      data: { data: 'goes here', test: { test1: 'more data' } },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 2,
    },
  });
}

export async function registerForPushNotificationsAsync() {
  if (!Device.isDevice) {
    console.warn('Push notifications require a physical device');
    return;
  }

  // Expo Go doesn't support project-level push tokens — skip to avoid fetch errors
  if (Constants.appOwnership === 'expo') {
    console.warn('Push notifications are not supported in Expo Go');
    return;
  }

  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('myNotificationChannel', {
      name: 'A channel is needed for the permissions prompt to appear',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    alert('Failed to get push token for push notification!');
    return;
  }

  promptMiuiNotificationSettings();
  try {
    const projectId =
      Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
    if (!projectId) {
      throw new Error('Project ID not found');
    }
    token = (
      await Notifications.getExpoPushTokenAsync({
        projectId,
      })
    ).data;
    console.log('token =>', token);
  } catch (e) {
    console.error('Failed to get push token:', e);
    return;
  }

  return token;
}
