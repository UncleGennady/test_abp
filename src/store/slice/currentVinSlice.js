import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: '',
}

export const currentVinSlice = createSlice({
    name: 'currentVin',
    initialState,
    reducers: {
        setCurrentVin: (state, {payload}) =>{
            state.value = payload
        }
    },
})


export const { setCurrentVin } = currentVinSlice.actions

export default currentVinSlice.reducer