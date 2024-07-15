import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../interfaces";
import { addNewProduct, editProduct, eraseProduct, getProduct, searchProduct, searchValueProduct, sortProduct } from "../../service/product.service";

const productState: Product[] = [];

export const getAllProduct: any = createAsyncThunk(
    "products/getAllProduct", getProduct

)
export const addProduct: any = createAsyncThunk(
    "products,addProduct", addNewProduct
)

export const updateProduct: any = createAsyncThunk(
    "products/updateProduct", editProduct
)
export const deleteProduct: any = createAsyncThunk(
    "products,deleteProduct", eraseProduct
)
export const searchNameProduct: any = createAsyncThunk(
    "products,searchNameProduct", searchProduct

)
export const sortNameProduct: any = createAsyncThunk(
    "products/searchNameProduct", sortProduct
)
const productReducer = createSlice({
    name: "product",
    initialState: {
        products: productState
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getAllProduct.pending, (state, action) => {

            })
            .addCase(getAllProduct.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(getAllProduct.rejected, (state, action) => {

            })
            .addCase(addProduct.fulfilled, (state: any, action: any) => {
                state.products.push(action.payload)
            })
            .addCase(addProduct.rejected, (state, action) => {

            })
            .addCase(updateProduct.fulfilled, (state: any, action) => {
                let index = state.products.findIndex((product: any) => {
                    return product.id === action.payload.id
                })
                if (index !== -1) {
                    state.products[index] = action.payload
                }
            })
            .addCase(updateProduct.rejected, (state, action) => {

            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.products = state.products.filter((product: any) => {
                    return product.id != action.payload
                })
            })
            .addCase(deleteProduct.rejected, (state, action) => {

            })
            .addCase(searchNameProduct.fulfilled, (state, action) => {
                state.products = action.payload
            })
            .addCase(searchNameProduct.rejected, (state, action) => {

            })
            .addCase(sortNameProduct.fulfilled, (state, action) => {
                state.products = action.payload
            })
            .addCase(sortNameProduct.rejected, (state, action) => {

            })
    },
})
export default productReducer.reducer;