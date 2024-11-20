import { createSlice } from '@reduxjs/toolkit';

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: {
    addedItems: [], 
    subTotal:0
  },
  reducers: {
    handleAdd:(state, action)=> {
      state.addedItems = [...state.addedItems, action.payload];
      state.subTotal = state.subTotal + action.payload?.price
    },
    handleRemove:(state, action)=> {
      state.addedItems = state.addedItems.filter(item=> item.id != action.payload)
      state.subTotal = state.subTotal - action.payload?.price
    }
  },
});

export const { handleAdd, handleRemove } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;