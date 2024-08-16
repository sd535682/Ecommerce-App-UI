import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

export const cartSlice = createSlice({
    name: 'cartItem',
    initialState,
    reducers: {
        addItem(state, action) {
            const { productID, quantity } = action.payload;
            const existingItem = state.items.find(item => item.productID === productID);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.items.push({ productID, quantity });
            }
        },
        removeItem(state, action) {
            const { productID } = action.payload;
            const existingItem = state.items.find(item => item.productID === productID);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.items = state.items.filter(item => item.productID !== productID);
                }
            }
        }
    }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
