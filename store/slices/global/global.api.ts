import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import databaseInfo from "@/db/dbdata";

export const fetchGlobal = createAsyncThunk<string,void>("global/fetchGlobal", async () => {
    const response = await axios.get(`${databaseInfo.db}`)
    const data = response.data[databaseInfo.global]
    return data
})
