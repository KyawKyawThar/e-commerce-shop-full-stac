import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  order: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.order += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity; //quantity is from orderModel api
      localStorage.removeItem("cart")
    }
  },
});

// Action creators are generated for each case reducer function
export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
