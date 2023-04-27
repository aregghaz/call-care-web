import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {reducer, actions} from "@/store/reducers/global.slice";
import {useEffect} from "react";

const reducers = combineReducers({
    global: reducer
})

const store = configureStore({
    reducer: reducers
})


export default store