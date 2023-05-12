import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import databaseInfo from "@/db/dbdata";

export const fetchServices = createAsyncThunk<string,void>("services/fetchServices", async () => {
    const response = await axios.get(`${databaseInfo.db}`)
    const data = response.data[databaseInfo.services]
    return data
})
