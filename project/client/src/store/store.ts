import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersReducer";
import productReducer from "./reducers/productReducer";
const store = configureStore ({
    reducer : {
        usersReducer,
        productReducer
    }
})
export default store;