import {createSlice} from "@reduxjs/toolkit";
import {fetchServices} from "@/store/slices/services/services.api";

const servicesSlice = createSlice<{},{},"services">({
    name: "services",
    reducers: {
        sayHi: ((state, {payload}) => {
            return {
                ...state
            }
        })
    },
    extraReducers: (builder) => {
        builder.addCase(fetchServices.fulfilled, (state, {payload}) => {
            return {
                ...state,
                list: payload
            }
        })
        builder.addCase(fetchServices.pending, (state) => {
            return {
                ...state,
                error: false
            }
        })
        builder.addCase(fetchServices.rejected, (state) => {
            return {
                ...state,
                error: true,
            }
        })
    },
    initialState: {
        list: [],
        error: false,
    }
})

export const servicesReducer = servicesSlice.reducer
export const [servicesSelector, servicesListSelector] = [state => state.services, state => state.services.list]
export const errorSelector = state => state.services.error
export const servicesActions = servicesSlice.actions