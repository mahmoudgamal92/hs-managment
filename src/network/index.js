import { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { tokenSlice } from '../store/slices/tokenSlice';

const baseURL = "https://services.alhajz-alsarea.com/api/";

const getToken = () => {
    const accessToken = useSelector(state => state.tokenReducer.token);
    return accessToken;
}

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkFsYWEgT3NhbWEiLCJyb2xlIjoiU3VwZXJBZG1pbiIsIm5iZiI6MTcxNDc3NjU5MiwiZXhwIjozMzI1MDc3NjU5MiwiaWF0IjoxNzE0Nzc2NTkyLCJpc3MiOiJodHRwczovL1NlcnZpY2VzLmFsaGFqei1hbHNhcmVhLmNvbS8iLCJhdWQiOiJodHRwczovL1NlcnZpY2VzLmFsaGFqei1hbHNhcmVhLmNvbS8ifQ.6p78vRk8xCg3t2Y7WuvDwTotFku6abCBqQgmS6FrZxY`,
};

const axiosInstance = axios.create({
    baseURL,
    timeout: 10000,
});


export const generateToken = async () => {
    try {
        const response = await axiosInstance.get('GenerateToken');
        const token = response.data.token;
        useDispatch(tokenSlice.actions.setToken(token));
        await AsyncStorage.setItem('FAST_RESERV_ACCESS_TOKEN', token);
    } catch (error) {
        throw error;
    }
};



export const getSlider = async () => {
    try {
        const response = await axiosInstance.get('HomeBanner/GetAll', { headers });
        if (response.status === 401) {
            return response.status;
        }
        else {
            return response.data;
        }
    } catch (error) {
        throw error;
    }
};



export const getCatigories = async () => {
    try {
        const response = await axiosInstance.get('Category/GetAll', { headers });
        if (response.status === 401) {
            return response.status;
        }
        else {
            return response.data;
        }

    } catch (error) {
        throw error;
    }
};



export const getHotels = async (params) => {
    try {
        const response = await axiosInstance.get('Hotel/GetAllByFilter', {
            params: params,
            headers: headers
        });
        if (response.status === 401) {
            return response.status;
        }
        else {
            return response.data;
        }

    } catch (error) {
        throw error;
    }
};


export const GetAllChaletByFilter = async (params) => {
    try {
        const response = await axiosInstance.get('Chalet/GetAllByFilter', {
            params: params,
            headers: headers
        });
        if (response.status === 401) {
            return response.status;
        }
        else {
            return response.data;
        }

    } catch (error) {
        throw error;
    }
};





export const RoomGetAllByHotelIDWithFilter = async (params) => {
    try {
        const response = await axiosInstance.get('Hotel/RoomGetAllByHotelIDWithFilter', {
            params: params,
            headers: headers
        });

        if (response.status === 401) {
            return response.status;
        }
        else {
            return response.data;
        }

    } catch (error) {
        throw error;
    }
};



export const sendHotelRequest = async (params) => {
    var data = {};
    try {

        const url = `https://services.alhajz-alsarea.com/api/Reservation/SaveHotelRequest?CategoryId=${params.CategoryId}&HotelId=${params.HotelId}&DateFrom=${params.DateFrom}&DateTo=${params.DateTo}&RoomAvailableID=${params.roomAvailableID}&RoomNumber=${params.RoomNumber}&ApplicantName=${params.ApplicantName}&ApplicantMobileNumber=${params.ApplicantMobileNumber}&Arrivals=1&AdultsNumber=${params.AdultsNumber}&KidsNumber=${params.KidsNumber}&TotalPrice=${params.TotalPrice}`;


        const response = await axiosInstance.post(url, data, {
            headers: headers
        });
        if (response.status === 401) {
            return response.status;
        }
        else {
            return response.data;
        }

        //return url;

    } catch (error) {
        console.log('There has been a problem with your fetch operation: ' + error);
        throw error;
    }
};



export const sendChaletRequest = async (params) => {
    var data = {};

    try {

        const url = `https://services.alhajz-alsarea.com/api/Reservation/SaveChaletRequest?CategoryId=${params.CategoryId}&ChaletId=${params.ChaletId}&DateFrom=${params.DateFrom}&DateTo=${params.DateTo}&OfferID=${params.OfferID}&ApplicantName=${params.ApplicantName}&ApplicantMobileNumber=${params.ApplicantMobileNumber}&Arrivals=${params.Arrivals}&Arrivals=1&AdultsNumber=${params.AdultsNumber}&KidsNumber=${params.PersonsNumber}&TotalPrice=${params.TotalPrice}&IsOneDay=${params.IsOneDay}`;


        const response = await axiosInstance.post(url, data, {
            headers: headers
        });
        if (response.status === 401) {
            return response.status;
        }
        else {
            return response.data;
        }

        //return url;

    } catch (error) {
        console.log('There has been a problem with your fetch operation: ' + error);
        throw error;
    }
};