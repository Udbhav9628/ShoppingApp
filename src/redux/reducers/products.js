import allItems from '../../assets/data.json';
import { createSlice } from '@reduxjs/toolkit';
import { filterItem, sortItems } from '../../utils/productUtilityFunc';

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState: {
    selectedSize: '',
    products: allItems,
  },
  reducers: {
    handleSizeSelect: (state, action) => {
      const data = filterItem(allItems, action.payload);
      state.selectedSize = action.payload;
      state.products = data;
    },
    handleOrderBy: (state, action) => {
      const orderedItem = sortItems(allItems, action.payload);
      if (state.selectedSize?.length > 0) {
        const data = filterItem(orderedItem, state.selectedSize);
        state.products = data;
      } else {
        state.products = orderedItem;
      }
    },
  },
});

export const { handleSizeSelect, handleOrderBy } = productsSlice.actions;

export default productsSlice.reducer;
