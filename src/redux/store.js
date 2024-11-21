import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/products";
import shoppingCart from "../redux/reducers/shoppingCart";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: shoppingCart,
  },
});

export default store;
