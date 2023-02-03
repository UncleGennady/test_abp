import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const vinApi = createApi({
    reducerPath: 'vinApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://vpic.nhtsa.dot.gov/api/vehicles/' }),
    endpoints: (builder) => ({
        getDecodeVin: builder.query({
            query: (vin) => `decodevin/${vin}?format=json`,
        }),
        getVehicleVariableList: builder.query({
            query: () => `getvehiclevariablelist/?format=json`,
        })
    }),
})

export const { useGetDecodeVinQuery, useGetVehicleVariableListQuery } = vinApi

