import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        allProducts: (state, action) => {
            state.products = action.payload;
        }
}
})

export const { allProducts } = productsSlice.actions;
export default productsSlice.reducer;