import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {globalReducer, globalActions} from "@/store/slices/global/global.slice";
import {servicesReducer} from "@/store/slices/services/services.slice";
import {createWrapper} from "next-redux-wrapper";

const makeStore = () => configureStore({
    reducer: {
        global: globalReducer,
        services: servicesReducer,
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware()
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof makeStore.getState>
export type AppStore = ReturnType<typeof makeStore>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof makeStore.dispatch
export const wrapper = createWrapper<AppStore>(makeStore)