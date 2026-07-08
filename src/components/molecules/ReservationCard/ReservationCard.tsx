// ReservationCard.tsx

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '../../atoms/Text/Text';
import moment from 'moment';

import { styles } from './styles';
import { Reservation } from '@types';
import { InfoRow } from '@components/molecules/InfoRow/InfoRow';


interface Props {
  reservation: Reservation;
  onAccept?: (id: Number) => void;
  onReject?: (id: Number) => void;
}




const getStatusText = (status: number) => {
  switch (status) {
    case 0: return 'مرفوض';
    case 1: return 'قيد الانتظار';
    case 2: return 'مقبول';
    default: return '-';
  }
};

const getStatusColor = (status: number) => {
  switch (status) {
    case 0: return '#F44336'; // red
    case 1: return '#FF9800'; // orange
    case 2: return '#4CAF50'; // green
    default: return '#9E9E9E';
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
        <InfoRow label="القادمون" value={reservation.arrivalsType} />
        <InfoRow
          label="تاريخ الطلب"
          value={moment(reservation.requestDate).format('YYYY-MM-DD HH:mm')}
        />
        <InfoRow
          label="تاريخ الوصول"
          value={moment(reservation.dateFrom).format('YYYY-MM-DD')}
        />
        <InfoRow
          label="تاريخ المغادره"
          value={moment(reservation.dateTo).format('YYYY-MM-DD')}
        />
        <InfoRow label="ليلة واحدة" value={reservation?.isOneDay ? 'نعم' : 'لا'} />
        <InfoRow label="عدد الاشخاص" value={((reservation?.arrivals ?? 0) + (reservation?.adultsNumber ?? 0)).toString()} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6 }}>
          <View style={{ backgroundColor: getStatusColor(reservation.requestStatus), borderRadius: 12, paddingHorizontal: 12, paddingVertical: 3 }}>
            <Text style={{ color: '#fff', fontFamily: 'Bold', fontSize: 12 }}>{getStatusText(reservation.requestStatus)}</Text>
          </View>
          <Text style={{ fontFamily: 'Regular', color: '#555' }}>حالة الطلب</Text>
        </View>
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
          <TouchableOpacity style={[styles.button, styles.acceptButton]} onPress={() => onAccept?.(reservation.id)}>
            <Text style={styles.buttonText}>قبول</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.rejectButton]} onPress={() => onReject?.(reservation.id)}>
            <Text style={styles.buttonText}>رفض</Text>
          </TouchableOpacity>
        </View>
      )}


    </View>
  );
};
