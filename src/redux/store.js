import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/products'

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
