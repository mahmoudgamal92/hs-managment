import { useCallback, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { signIn, updateNotificationToken } from '../services';
import { User } from '../types/user';
import { registerForPushNotificationsAsync } from '@utils/notifications';

type useAuthenticationProps = {
    onError?: () => void;
    onSuccess?: () => void;
};
export const useAuthentication = (props: useAuthenticationProps) => {
    const { onError = () => {}, onSuccess = () => {} } = props;
    const [loading, setLoading] = useState(false);

    const signUser = useCallback(
        async (userName: string, Password: string) => {
            setLoading(true);
            const res = await signIn(userName, Password);
            setLoading(false);
            if (res.status === 200) {
                if (res.data.Id) {
                    _saveUserInfo(res.data);
                    console.log('User Info: ',res.data);
                    const deviceToken = await registerForPushNotificationsAsync();
                    if (deviceToken) {
                        AsyncStorage.setItem("device_push_token", deviceToken);
                        if (deviceToken !== res.data.NotificationToken) {
                            updateNotificationToken(res.data.Id, deviceToken);
                            console.log('Device token updated successfully');
                        }
                    }
                    onSuccess();
                    return;
                }
                onError();
            }
            onError();
        },
        [],
    );

    const _saveUserInfo = async (item: User) => {
        AsyncStorage.setItem("user_token", item.Id);
        AsyncStorage.setItem("user_info", JSON.stringify(item));
    };

    return {
        loading,
        signUser
    };
};
