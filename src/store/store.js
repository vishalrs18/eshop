import { configureStore, createSlice } from "@reduxjs/toolkit";
import { categoryData, itemsData } from "../assets/data";

const categorySlice = createSlice( {
    name: 'category',
    initialState: categoryData,
    reducers: {
        categoryData(state, action) {
            state = action.payload;
            return state;
        }
    }
})

const itemsSlice = createSlice( {
    name: 'items',
    initialState: itemsData,
    reducers: {
        itemsData(state, action) {
            state = action.payload;
            return state;
        }
    }
})

const cartSlice = createSlice( {
    name: 'cart',
    initialState: [],
    reducers: {
        cartData(state, action) {
            state = action.payload;
            return state;
        }
    }
})

const orderSlice = createSlice( {
    name: 'orders',
    initialState: [],
    reducers: {
        ordersData(state, action) {
            state = action.payload;
            return state;
        }
    }
})


export const store = configureStore({
    reducer: {
        category: categorySlice.reducer,
        item: itemsSlice.reducer,
        cart: cartSlice.reducer,
        order: orderSlice.reducer
    }
});

export const { cartData } = cartSlice.actions;
export const { ordersData } = orderSlice.actions;
export const categoryActions = categorySlice.actions;
export const itemActions = itemsSlice.actions;
