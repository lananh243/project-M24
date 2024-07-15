import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewUser, getUser, searchUser, updateStatus } from "../../service/user.service";

export const getAllUser: any = createAsyncThunk(
    "users/getAllUser", getUser)
export const addUsers: any = createAsyncThunk(
    "users/addUsers", addNewUser
);
export const updateUserStatus: any = createAsyncThunk(
    "users/updateUserRole", updateStatus
);
export const searchNameUser: any = createAsyncThunk(
    "users/searchNameUser", searchUser
)
const usersReducer = createSlice({
    name: "user",
    initialState: {
        users: [],
    },
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(getAllUser.pending, (state, action) => {

            })
            .addCase(getAllUser.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(getAllUser.rejected, (state, action) => {

            })
            .addCase(addUsers.fulfilled, (state: any, action: any) => {
                state.users = action.payload;
            })
            .addCase(updateUserStatus.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(searchNameUser.fulfilled, (state, action) => {
                state.users = action.payload;
            })
        // .addCase(updateUserStatus.fulfilled, (state, action) => {
        //     state.users = action.payload
        // })
    },
})
export default usersReducer.reducer;