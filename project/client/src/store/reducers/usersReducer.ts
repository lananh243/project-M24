import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUser: any = createAsyncThunk("users/getAllUser", async () => {
    let response = await axios.get("http://localhost:8080/users")
    return response.data
})
export const getAllProduct: any = createAsyncThunk("products/getAllProduct", async () => {
    let response = await axios.get("http://localhost:8080/products")
    return response.data
})
export const addUsers: any = createAsyncThunk(
    "users/addUsers",
    async (user: any) => {
        const response = await axios.post(
            "http://localhost:8080/users", user
        );
        return response.data;
    }
);
export const updateUserStatus: any = createAsyncThunk(
    "users/updateUserRole",
    async (user: any) => {      
        await axios.patch(
            `http://localhost:8080/users/${user.id}`,
            {status: user.status }
        );
        let response = await axios.get("http://localhost:8080/users")
        return response.data
    }
);
export const searchNameUser:any = createAsyncThunk (
    "users/searchNameUser",
    async (searchValue) => {
        let response = await axios.get(`http://localhost:8080/users?fullname_like=${searchValue}`)
        return response.data
    }
)
const usersReducer = createSlice({
    name: "user",
    initialState: {
        users: [],
        products: []
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
            .addCase(getAllProduct.fulfilled, (state, action) => {
                state.products = action.payload
            })
            .addCase(getAllProduct.rejected, (state, action) => {

            })
            .addCase(addUsers.fulfilled, (state: any, action: any) => {
                state.users.push(action.payload)
            })
            .addCase(updateUserStatus.fulfilled, (state, action) => {
                state.users = action.payload;
            })
            .addCase(searchNameUser.fulfilled, (state,action) => {
                state.users = action.payload;
            })
        // .addCase(updateUserStatus.fulfilled, (state, action) => {
        //     state.users = action.payload
        // })
    },
})
export default usersReducer.reducer;