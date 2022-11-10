import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./reducers/bookSlice";
import { cartReducer } from "./reducers/cartSlice";
import { resReducer } from "./reducers/resSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    cart: cartReducer,
    res : resReducer
  },
});
