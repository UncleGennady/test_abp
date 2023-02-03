import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
}

export const vinSlice = createSlice({
    name: 'vin',
    initialState,
    reducers: {
        addVin: ({value}, {payload}) =>{
            value.unshift(payload)
            if(value.length > 5) value.pop()
        }
    },
})


export const { addVin } = vinSlice.actions

export default vinSlice.reducer