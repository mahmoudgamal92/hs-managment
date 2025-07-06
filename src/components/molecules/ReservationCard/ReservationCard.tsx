// ReservationCard.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';

import { styles } from './styles';
import { Reservation } from '@types';
import { InfoRow } from '@components';


interface Props {
  reservation: Reservation;
  onAccept?: (id: Number) => void;
  onReject?: (id: Number) => void;
}




const getStatusText = (status: number) => {
  switch (status) {
    case 0:
      return 'مرفوض';
    case 1:
      return 'قيد الانتظار';
    case 2:
      return 'مقبول';
    default:
      return '-';
  }
};



export const ReservationCard: React.FC<Props> = (props) => {
  const { reservation, onAccept, onReject } = props;
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{reservation.sourceName}</Text>
      <Text style={styles.subtitle}>{reservation.sourceType}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>معلومات الحجز</Text>
        <InfoRow label="التصنيف" value={reservation.categoryName} />
        <InfoRow label="نوع الوصول" value={reservation.arrivalsType} />
        <InfoRow
          label="تاريخ الطلب"
          value={moment(reservation.requestDate).format('YYYY-MM-DD HH:mm')}
        />
        <InfoRow
          label="من تاريخ"
          value={moment(reservation.dateFrom).format('YYYY-MM-DD')}
        />
        <InfoRow
          label="إلى تاريخ"
          value={moment(reservation.dateTo).format('YYYY-MM-DD')}
        />
        <InfoRow label="ليلة واحدة" value={reservation.isOneDay ? 'نعم' : 'لا'} />
        <InfoRow label="عدد الوصول" value={reservation.arrivals?.toString()} />
        <InfoRow label="حالة الطلب" value={getStatusText(reservation.requestStatus)} />
      </View>


      <View style={styles.section}>
        <Text style={styles.sectionTitle}>معلومات العميل</Text>
        <InfoRow label="اسم مقدم الطلب" value={reservation.applicantName} />
        <InfoRow label="رقم الهاتف" value={reservation.applicantMobileNumber} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>التكلفة</Text>
        <InfoRow label="إجمالي السعر" value={`${reservation.totalPrice} د.ع`} />
      </View>

      {reservation.requestStatus === 1 && (
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={() => onAccept(reservation.id)}>
            <Text style={styles.buttonText}>قبول</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.rejectButton]} onPress={() => onReject(reservation.id)}>
            <Text style={styles.buttonText}>رفض</Text>
          </TouchableOpacity>
        </View>
      )}


    </View>
  );
};
