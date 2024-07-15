import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllOrder: any = createAsyncThunk("orders/getAllOrder", async () => {
    let response = await axios.get("http://localhost:8080/orders")
    return response.data
})

export const addOrder: any = createAsyncThunk("orders/addOrder", async (order: any) => {
    let response = await axios.post("http://localhost:8080/orders", order)
    return response.data
})
const orderReducer = createSlice({
    name: "order",
    initialState: {
        orders: [],
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getAllOrder.fulfilled, (state, action) => {
                state.orders = action.payload
            })
            .addCase(addOrder.fulfilled, (state: any, action: any) => {
                state.orders.push(action.payload)
            })
    },
})
export default orderReducer.reducer;