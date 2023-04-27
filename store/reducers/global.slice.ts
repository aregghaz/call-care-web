import {createSlice} from "@reduxjs/toolkit";

const initialState = {

}

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        addCount: (state, {payload}) => {
            state.count = state.count + 1
        }
    },
})


export const {actions:globalActions, reducer:globalReducer} = globalSlice