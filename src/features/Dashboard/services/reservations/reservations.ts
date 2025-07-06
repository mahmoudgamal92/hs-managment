import { request } from '@network';

export const GetResrvations = async (UserId: string, RequestStatus: Number) => {
    const params = { 'UserId': UserId, 'RequestStatus': RequestStatus }
    const res = request({
        method: 'get',
        path: '/Reservation/GetAllByFilter',
        params: { UserId, RequestStatus }
    }
    );
    return res;
};



export const updateResrvationStatus = async (ActionNo: Number, Id: Number) => {
    const params = { 'ActionNo': ActionNo, 'Id': Id }
    const res = request({
        method: 'post',
        path: '/Reservation/UpdateStatus',
        params: { ActionNo, Id }
    }
    );
    return res;
};



