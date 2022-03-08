import { createReducer } from '@reduxjs/toolkit';
import { setProducts } from '../actions/products';

const initialState = {
    products: [],
};

const productReducer = createReducer(initialState, (builder) => {
    builder.addCase(setProducts, (state, { payload }) => {
        state.products = payload;
        localStorage.setItem('products', JSON.stringify(payload));
    });
});

export default productReducer;