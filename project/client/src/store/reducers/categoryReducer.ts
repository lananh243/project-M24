import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { editCategory, getCategory } from "../../service/category.service";

export const getAllCategory: any = createAsyncThunk("categorys/getAllCategory", getCategory
)
export const updateCategory: any = createAsyncThunk("categorys,updateCategory", editCategory
)
const categoryReducer = createSlice({
    name: "category",
    initialState: {
        categorys: [],
    },
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(getAllCategory.pending, (state, action) => {

            })
            .addCase(getAllCategory.fulfilled, (state, action) => {
                state.categorys = action.payload;
            })
            .addCase(getAllCategory.rejected, (state, action) => {

            })
            .addCase(updateCategory.fulfilled, (state, action) => {
                const index = state.categorys.findIndex((category: any) => {
                    return category.id === action.payload.id
                })
                if (index !== -1) {
                    state.categorys[index] === action.payload.id
                }
            })
            .addCase(updateCategory.rejected, (state, action) => {

            })
    },
})
export default categoryReducer.reducer;