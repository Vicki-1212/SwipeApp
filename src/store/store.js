import { configureStore } from "@reduxjs/toolkit";

import savedSlice from '../slice/savedJobSlice'

import deletedSlice from "../slice/deletedJobSlice"

export const store = configureStore({
    reducer: {
        savedJob: savedSlice,
        deletedJob: deletedSlice,
    }
})