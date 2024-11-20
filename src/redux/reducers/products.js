import allItems from '../../assets/data.json';
import { createSlice } from '@reduxjs/toolkit';
import { filterItem, sortItems } from '../../utils/productUtilityFunc';

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState: {
    products: allItems, 
  },
  reducers: {
    handleSizeSelect: (state, action) => {
      const data = filterItem(allItems, action.payload)
      state.products = data
    },
   handleOrderBy: (state, action) => {
    const data = sortItems(allItems, action.payload)
    state.products = data;
   }
  },
});

export const { handleSizeSelect, handleOrderBy } = productsSlice.actions;

export default productsSlice.reducer;