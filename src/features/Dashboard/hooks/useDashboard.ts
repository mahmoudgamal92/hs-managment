import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GetUserChalets } from './../services';

export const useDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [chalets, setChalets] = useState([]);
  const [banners, setBanners] = useState([]);

  const getUserChalets = useCallback(
    async () => {
      const user_token = await AsyncStorage.getItem("user_token");
      setLoading(true);
      const res = await GetUserChalets(user_token);

      setLoading(false);
      if (res.status !== 200) {
        console.log('errrrrrrr');
      }
      setChalets(Array.isArray(res.data.data) ? res.data.data : []);
    },
    [],
  );


  return {
    loading,
    chalets,
    banners,
    getUserChalets,
  };
};
