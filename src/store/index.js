import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import vinReducer from './slice/vinSlice'
import currentVinReducer from "./slice/currentVinSlice";
import {vinApi} from "./vinApi"


export const store = configureStore({
    reducer: {
        vin: vinReducer,
        currentVin: currentVinReducer,
        [vinApi.reducerPath]: vinApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(vinApi.middleware),
})
setupListeners(store.dispatch)