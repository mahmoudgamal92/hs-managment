import { request } from '@network';
import {getOffersReq,UpdateOfferDetailsRequest} from './types';
export const GetAllOfferByFilter = async (props: getOffersReq) => {
    const { ChaletId, OfferType, FromDate, ToDate } = props;
    const res = request({
        method: 'get',
        path: '/Offer/GetAllOfferByFilter',
        params: { ChaletId, OfferType, FromDate, ToDate }
    }
    );
    return res;
};


export const updateOffers = async (data: UpdateOfferDetailsRequest) => {
    const res = request({
        method: 'post',
        path: '/Offer/UpdateOffers',
        data:data
        }
    );
    return res;
};