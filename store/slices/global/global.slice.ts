import {createSlice} from "@reduxjs/toolkit";
import {fetchGlobal} from "@/store/slices/global/global.api";

const globalSlice = createSlice({
    name: "global",
    reducers: {
        sayHi: ((state, {payload}) => {
            return {
                ...state
            }
        })
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGlobal.fulfilled, (state, {payload}) => {
            return {
                ...state,
                ...payload,
            }
        })
        builder.addCase(fetchGlobal.pending, state => {
            return {
                ...state,
                error: false,
            }
        })
        builder.addCase(fetchGlobal.rejected, state => {
            return {
                ...state,
                error: true
            }
        })
    },
    initialState: {
        error: false,
        static: {

        },
        address: "",
        version: "",
        phoneNumber: "",
        email: "",
        url: "",
        date: ""
    }
})


export const {actions:globalActions, reducer:globalReducer} = globalSlice
export const globalSelector = state => state.global
export const globalError = state => state.global.error