import {createSlice} from "@reduxjs/toolkit";
import {fetchServices} from "@/store/slices/services/services.api";

type TService = {
    serviceName: string,
    serviceDescription: string,
    serviceDetails: string,
    serviceId: string,
    important?: boolean,
    shortcut?: boolean,
    serviceIcon?: string
}

type TServiceState = {
    list: Array<TService>
    importantList: Array<TService & {important: boolean, serviceIcon: boolean}>

    shortcutList: Array<TService & {shortcut: boolean}>
}

const servicesSlice = createSlice<TServiceState,{},"services">({
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
            state.list.splice(0)
            state.shortcutList.splice(0)
            state.importantList.splice(0)
            for (let i of payload as TService & {important: boolean, serviceIcon: boolean, shortcut: boolean}) {
                if (i.important && i.shortcut) {
                    state.list.push(i)
                    state.importantList.push(i)
                    state.shortcutList.push(i)
                } else if (i.important) {
                    state.list.push(i)
                    state.importantList.push(i)
                } else if (i.shortcut) {
                    state.list.push(i)
                    state.shortcutList.push(i)
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
        shortcutList: [],
        error: false,
    }
})

export const servicesReducer = servicesSlice.reducer
export const [servicesSelector, servicesListSelector, servicesImportantListSelector, servicesShortcutListSelector]
    =
    [state => state.services, state => state.services.list, state => state.services.importantList, state => state.services.shortcutList]
export const errorSelector = state => state.services.error
export const servicesActions = servicesSlice.actions