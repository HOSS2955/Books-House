import { configureStore } from "@reduxjs/toolkit";
import { authorReducer } from "./reducers/authorSlice";
import { booksReducer } from "./reducers/bookSlice";
import { cartReducer } from "./reducers/cartSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    cart: cartReducer,
    author: authorReducer,
  },
});
