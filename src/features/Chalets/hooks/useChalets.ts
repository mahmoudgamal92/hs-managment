import { useCallback, useState } from 'react';
import { GetAllOfferByFilter, updateOffers } from '../services';


type useFilterChaletsProps = {
    onError?: () => void;
    onSuccess?: (data?: any) => void;
};


export const useChalets = (props: useFilterChaletsProps) => {
    const { onError, onSuccess } = props;
    const [loading, setLoading] = useState(false);


    const getAllOffers = useCallback(
        async ({ ChaletId, OfferType, FromDate, ToDate }) => {
            setLoading(true);
            const res = await GetAllOfferByFilter({
                ChaletId,
                OfferType,
                FromDate,
                ToDate,
            });
            setLoading(false);
            if (res.status === 200) {
                if(res.data.data.length === 0)
                    {            
                        alert('لم يتم العثور على نتائج للبحث.');
                        return;
                    }
                    onSuccess(res.data);
                return;

            }
            alert('لم يتم العثور على نتائج للبحث.');
        },
        [],
    );


    const updateOffer = useCallback(
        async ({ price, reservAvalible, offer }) => {
            setLoading(true);
            const reqData = {
                updateOfferDetailsList: [
                    {
                        offerID: offer.offerID,
                        offerTimeFrom: offer.offerTimeFrom,
                        offerTimeTo: offer.offerTimeTo,
                        price: Number(price),
                        reserveAvailable: Boolean(reservAvalible)
                    }
                ]
            };
            const res = await updateOffers(reqData);
            setLoading(false);
            if (res.status !== 200) {
                alert('حدث خطأ ما، يرجى المحاولة لاحقًا.')
                return;
            }
            onSuccess();
        },
        [],
    );


    return {
        loading,
        getAllOffers,
        updateOffer
    };
};
