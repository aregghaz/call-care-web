import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import databaseInfo from "@/db/dbdata";

export const fetchWork = createAsyncThunk<string,void>("work/fetchWork", async () => {
    const response = await axios.get(`${databaseInfo.db}`)
    const data = response.data[databaseInfo.work]
    return data
})