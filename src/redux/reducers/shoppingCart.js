import {
  addToCartUtilityFunc,
  decreaseQuantityUtilityFunc,
} from '../../utils/productUtilityFunc';
import { createSlice } from '@reduxjs/toolkit';

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    addedItems: [],
    subTotal: 0,
  },
  reducers: {
    handleAdd: (state, action) => {
      state.addedItems = addToCartUtilityFunc(state.addedItems, action.payload);
      state.subTotal = state.subTotal + action.payload?.price;
    },
    handleDecreaseQty: (state, action) => {
      state.addedItems = decreaseQuantityUtilityFunc(
        state.addedItems,
        action.payload
      );
      state.subTotal = state.subTotal - action.payload?.price;
    },
  },
});

export const { handleAdd, handleRemove, handleDecreaseQty } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
