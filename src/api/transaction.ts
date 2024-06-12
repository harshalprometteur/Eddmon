import axios from 'axios';

import { responseInterceptor } from './responseValidation'
import { responseErrorInterceptor } from './errorValidation'


export const interceptors = axios.create({
    baseURL: 'https://dev2-api.eddmon.fr/api/',
    headers: {
        "Content-Type": " application/x-amz-json-1.1"
    }
});

interceptors.interceptors.request.use(
    async (config: any) => {
        return config;
    },
    (error: any) => {
        return Promise.reject({
            error: error,
            message: error?.response?.data?.message ?? '',
            data: error?.response?.data ?? null
        });
    }
);

interceptors.interceptors.response.use(responseInterceptor, responseErrorInterceptor);
