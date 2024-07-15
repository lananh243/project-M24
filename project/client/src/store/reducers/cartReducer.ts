import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToProCart, decrease, deleteSelect, increase, takeOutPro } from "../../service/cart.service";

export const addToCart: any = createAsyncThunk(
    "carts/addToCart", addToProCart
);

// lấy sản phẩm
export const getCarts: any = createAsyncThunk("carts/getCarts", takeOutPro
)
export const increaseQuantity: any = createAsyncThunk(
    "cart/increaseQuantity", increase
);

export const decreaseQuantity: any = createAsyncThunk(
    "cart/decreaseQuantity", decrease
);
export const deleteSelectedItems: any = createAsyncThunk(
    "cart/deleteSelectedItems", deleteSelect
);
const cartReducer = createSlice({
    name: "cart",
    initialState: {
        carts: [],
    },
    reducers: {
        setCart(state, action) {
            state.carts = action.payload;
        },
        clearCart(state) {
            state.carts = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.fulfilled, (state, action) => {
                state.carts = action.payload;
            })
            .addCase(getCarts.fulfilled, (state, action) => {
                state.carts = action.payload
            })
            .addCase(increaseQuantity.fulfilled, (state, action) => {
                state.carts = action.payload;
            })
            .addCase(decreaseQuantity.fulfilled, (state, action) => {
                state.carts = action.payload;
            })
            .addCase(deleteSelectedItems.fulfilled, (state, action) => {
                state.carts = action.payload;
            });
    },
});


export const { setCart, clearCart } = cartReducer.actions;
export default cartReducer.reducer;
