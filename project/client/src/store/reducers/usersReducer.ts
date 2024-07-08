import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
export const getAllUser:any = createAsyncThunk("users/getAllUser",async () => {
    let response = await axios.get("http://localhost:8080/users")
    return response.data
})
export const addUsers:any = createAsyncThunk(
    "users/addUsers",
    async (user:any) => {
        const response = await axios.post(
            "http://localhost:8080/users", user
        );
        return response.data;
    }
);

const usersReducer = createSlice ({
    name : "user",
    initialState : {
        users : []
    },
    reducers : {

    },
    extraReducers(builder) {
        builder
        .addCase(getAllUser.pending,(state,action) => {

        })
        .addCase(getAllUser.fulfilled,(state,action) => {
            state.users = action.payload;
        })
        .addCase(getAllUser.rejected,(state,action) => {
            
        })
        .addCase(addUsers.fulfilled,(state:any, action:any) => {
            state.users.push(action.payload)
        })
    },
})
export default usersReducer.reducer;