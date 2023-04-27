import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 0
}
// const globalReducer = (state, action) => {
//     switch (action.type) {
//         default:
//             return state
//     }
// }

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        addCount: (state, {payload}) => {
            state.count = state.count + 1
        }
    },
})

export const {actions, reducer} = globalSlice