import { configureStore } from '@reduxjs/toolkit'
import vinReducer from './slice/vinSlice'


export const store = configureStore({
    reducer: {
        vin: vinReducer,
    },
})