import {createSlice} from "@reduxjs/toolkit"

const initialState = []

const deletedJobSlice = createSlice({
    name: "deletedJob",
    initialState,
    reducers: {
        addToTrash: (state, action) => {
            state.push(action.payload)
        }
    }
});

export const {addToTrash} = deletedJobSlice.actions

export default deletedJobSlice.reducer