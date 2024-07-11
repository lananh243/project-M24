import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProduct:any = createAsyncThunk("products/getAllProduct", 
    async () => {
        let response = await axios.get("http://localhost:8080/products")
    return response.data
    }
)
export const addProduct:any = createAsyncThunk("products,addProduct",async(product:any) => {
    let response:any = await axios.post("http://localhost:8080/products", product)
    return response.data
})

export const updateProduct:any = createAsyncThunk (
    "products/updateProduct",async (product:any) => {
        let response:any = await axios.put(`http://localhost:8080/products/${product.id}`,product)
        return response.data;
    }
)
export const deleteProduct:any = createAsyncThunk("products,deleteProduct",async(id : number) => {
    await axios.delete(`http://localhost:8080/products/${id}`);
    return id;
})
export const searchNameProduct:any = createAsyncThunk("products,searchNameProduct", 
    async(searchName) => {
        let response = await axios.get(`http://localhost:8080/products?name_like=${searchName}`)
        return response.data
    }
)
export const sortNameProduct:any = createAsyncThunk ("products/searchNameProduct",
    async (order: 'asc' | 'desc') => {
        let response = await axios.get(`http://localhost:8080/products?_sort=name&_order=${order}`)
        return response.data
    })
const productReducer = createSlice({
    name:"product",
    initialState : {
        products : []
    },
    reducers : {},
    extraReducers(builder) {
        builder
        .addCase(getAllProduct.pending, (state, action) => {

        })
        .addCase(getAllProduct.fulfilled, (state,action) => {
            state.products = action.payload;
        })
        .addCase(getAllProduct.rejected,(state,action) => {

        })
        .addCase(addProduct.fulfilled,(state:any,action:any) => {
            state.products.push(action.payload)
        })
        .addCase(addProduct.rejected,(state,action) => {

        })
        .addCase(updateProduct.fulfilled, (state:any,action) => {
            let index = state.products.findIndex((product:any) => {
                return product.id === action.payload.id
            })
            if(index != -1){
                state.products[index] = action.payload
            }
        })
        .addCase(updateProduct.rejected,(state,action) => {

        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
            state.products = state.products.filter((product:any) => {
                return product.id != action.payload
            })
        })
        .addCase(deleteProduct.rejected, (state,action) => {

        })
        .addCase(searchNameProduct.fulfilled, (state,action) => {
            state.products = action.payload
        })
        .addCase(searchNameProduct.rejected, (state,action) => {
            
        })
        .addCase(sortNameProduct.fulfilled,(state,action) => {
            state.products = action.payload
        })
        .addCase(sortNameProduct.rejected,(state,action) => {

        })
    },
})
export default productReducer.reducer;