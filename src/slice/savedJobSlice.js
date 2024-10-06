import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const savedJobSlice = createSlice({
    name: "savedJob",
    initialState,
    reducers: {
        addToSave: (state, action) => {
            state.push(action.payload)
        }
    }
});

export const {addToSave} = savedJobSlice.actions

export default savedJobSlice.reducer