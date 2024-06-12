export const responseErrorInterceptor = (error: any) => {
    return Promise.reject({
        error: error,
        message: error?.response?.data?.message ?? '',
        data: error?.response?.data ?? null
    });
};
