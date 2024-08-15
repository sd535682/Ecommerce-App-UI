import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices";

export const store = configureStore({
    reducer: {
        cart: cartSlice
    }
});