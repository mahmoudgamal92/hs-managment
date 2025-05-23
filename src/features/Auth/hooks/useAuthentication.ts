import { useCallback, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { signIn } from '../services';
import { User } from '../types/user';

type useAuthenticationProps = {
    onError?: () => void;
    onSuccess?: () => void;
};
export const useAuthentication = (props: useAuthenticationProps) => {
    const { onError, onSuccess } = props;
    const [loading, setLoading] = useState(false);

    const signUser = useCallback(
        async (userName: string, Password: string) => {
            setLoading(true);
            const res = await signIn(
                userName, Password
            );
            setLoading(false);
            if (res.status === 200) {
                if (res.data.Id) {
                    _saveUserInfo(res.data)
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
        AsyncStorage.setItem("user_info", item.toString());
    };

    return {
        loading,
        signUser
    };
};
