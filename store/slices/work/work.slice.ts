import {createSlice} from "@reduxjs/toolkit";
import {fetchWork} from "@/store/slices/work/work.api";
import jsonFileData from "@/db.json"

type TWork = {
    error: boolean,
    availablePositions: Array<any>,
}

const workSlice = createSlice<TWork,{},"work">({
    name: "work",
    reducers: {
        sayHi: ((state, {payload}) => {
            return {
                ...state
            }
        })
    },
    extraReducers: (builder) => {
        // builder.addCase(fetchWork.fulfilled, (state, {payload}) => {
        //     return {
        //         ...state,
        //         availablePositions: payload.availablePositions,
        //         error: false
        //     }
        // })
        //
        // builder.addCase(fetchWork.pending, state => {
        //     return {
        //         ...state,
        //         error: false,
        //     }
        // })
        //
        // builder.addCase(fetchWork.rejected, state => {
        //     return {
        //         ...state,
        //         error: true
        //     }
        // })
    },
    initialState: {
        error: false,
        availablePositions: jsonFileData.work.availablePositions
    }
})

export const workReducer = workSlice.reducer
export const workActions = workSlice.actions
export const [availablePositionsSelector] = [state => state.work.availablePositions]