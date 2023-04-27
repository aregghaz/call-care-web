import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {globalReducer, globalActions} from "@/store/reducers/global.slice";
import {servicesReducer, servicesActions} from "@/store/reducers/services.slice";

const reducers = combineReducers({
    global: globalReducer,
    services: servicesReducer
})

const store = configureStore({
    reducer: reducers
})


export default store