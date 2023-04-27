import {createSlice} from "@reduxjs/toolkit";

const initialState = {

}

const servicesSlice = createSlice({
    name: "service",
    initialState,
    reducers: {
        loadService: (state, {payload}) => {
            return {
                ...state,
                ...payload
            }
        }
    }
})

export const {actions: servicesActions, reducer: servicesReducer} = servicesSlice