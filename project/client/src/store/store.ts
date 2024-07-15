import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersReducer";
import productReducer from "./reducers/productReducer";
import categoryReducer from "./reducers/categoryReducer";
import cartReducer from "./reducers/cartReducer";
import orderReducer from "./reducers/orderReducer";
const store = configureStore({
    reducer: {
        usersReducer,
        productReducer,
        categoryReducer,
        cartReducer,
        orderReducer
    }
})
export default store;