
import axios from 'axios';

const rejectionMessage = `مرحبا بكم، نعتذر منكم تم رفض الطلب لأحد الأسباب التالية (١ -تم تثبيت الحجز مع صاحب طلب آخر قدم  قبلكم، ٢-الشاليه في حالة صيانة ، أسباب أخرى`;
const acceptanceMessage = `مرحبا بكم ،  تم قبول طلب الحجز`;
export const sendWhatsappMsg = async (recipient: string, type: string) => {
    const formData = new FormData();
    formData.append('Token', '793312044');
    formData.append('Phones', '+9647824846025');
    formData.append('recipient', `+964${recipient}`);
    formData.append('Doctype', 'text');
    formData.append('Message', type === 'accept' ? acceptanceMessage : rejectionMessage);
    formData.append('account', '1');
    try {
        const response = await axios.post('https://api2.4whatsapp.com/api/Agent_Client_', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    } catch (error) {
        if (error.response) {
            console.log('Error status:', error.response);
        } else if (error.request) {
            console.log('No response received:', error.request);
        } else {
            console.log('Error:', error.message);
        }
    }
};