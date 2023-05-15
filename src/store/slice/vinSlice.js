import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const vinSlice = createSlice({
    name: 'vin',
    initialState,
    reducers: {
        addVin: (state, { payload }) => {
            state.value = [payload, ...state.value.slice(0, 4)];
        },
        addVins: (state, { payload }) => {
            state.value = payload;
        },
    },
})


export const { addVin, addVins } = vinSlice.actions

export default vinSlice.reducer