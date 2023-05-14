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
            for (let i of payload) {
                console.log(i)
                if (i.important) {
                    state.list.push(i)
                    state.importantList.push(i)
                } else {
                    state.list.push(i)
                }
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
        importantList: [],
        error: false,
    }
})

export const servicesReducer = servicesSlice.reducer
export const [servicesSelector, servicesListSelector, servicesImportantListSelector] = [state => state.services, state => state.services.list, state => state.services.importantList]
export const errorSelector = state => state.services.error
export const servicesActions = servicesSlice.actions