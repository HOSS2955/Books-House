import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./reducers/bookSlice";
import { cartReducer } from "./reducers/cartSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    cart: cartReducer,
  },
});
