import {createSlice} from "@reduxjs/toolkit";
import {fetchGlobal} from "@/store/slices/global/global.api";
import jsonFileData from "@/db.json"

type TGlobalState = {
    error: boolean,
    static: any,
    address: string,
    version: string,
    phoneNumber: string,
    email: string,
    url: string,
    date: string,
    loaded: boolean,
}

const globalSlice = createSlice<TGlobalState,{},"global">({
    name: "global",
    reducers: {
        sayHi: ((state, {payload}) => {
            return {
                ...state
            }
        })
    },
    extraReducers: (builder) => {
        // builder.addCase(fetchGlobal.fulfilled, (state, {payload}) => {
        //     return {
        //         ...state,
        //         // ...payload,
        //         error: false,
        //         address: payload.address,
        //         version: payload.version,
        //         phoneNumber: payload.phoneNumber,
        //         email: payload.email,
        //         url: payload.url,
        //         date: payload.date,
        //         loaded: true,
        //     }
        // })
        // builder.addCase(fetchGlobal.pending, state => {
        //     return {
        //         ...state,
        //         error: false,
        //         loaded: false,
        //     }
        // })
        // builder.addCase(fetchGlobal.rejected, state => {
        //     return {
        //         ...state,
        //         error: true
        //     }
        // })
    },
    initialState: {
        error: false,
        static: {

        },
        address: jsonFileData.global.address,
        version: jsonFileData.global.version,
        phoneNumber: jsonFileData.global.phoneNumber,
        email: jsonFileData.global.email,
        url: jsonFileData.global.url,
        date: jsonFileData.global.date,
        loaded: true,
    }
})


export const {actions:globalActions, reducer:globalReducer} = globalSlice
export const globalSelector = state => state.global
export const globalError = state => state.global.error