import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GetResrvations, updateResrvationStatus } from '../services';
import { Reservation } from '@types';
import { sendWhatsappMsg } from '@services';




export const useReservations = () => {
  const [loading, setLoading] = useState(false);
  const [reservations, setReservations] = useState([]);

  const getUserReservations = useCallback(
    async (status: Number) => {
      const user_token = await AsyncStorage.getItem("user_token");
      setLoading(true);
      const res = await GetResrvations(user_token, status);

      setLoading(false);
      if (res.status !== 200) {

      }
      setReservations(Array.isArray(res.data.data) ? res.data.data : []);
    },
    [],
  );


  const updateReservation = useCallback(
    async (reservation: Reservation, actionNo: Number) => {
      setLoading(true);
      const res = await updateResrvationStatus(actionNo, reservation.id);
      setLoading(false);
      if (res.status !== 200) {
        alert('حدث خطأ أثناء تحديث حالة الحجز');
      }
      getUserReservations(1);
      sendWhatsappMsg(reservation.applicantMobileNumber, actionNo === 2 ? 'accept' : 'reject');
      alert('تم تحديث حالة الحجز بنجاح');
    },
    [],
  );

  return {
    loading,
    reservations,
    getUserReservations,
    updateReservation
  };
};
