import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./reducers/bookSlice";
import { cartReducer } from "./reducers/cartSlice";
import { homepageReducer } from "./reducers/homepageSlice";
import { userReducer } from "./reducers/userSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    cart: cartReducer,
    user: userReducer,
    homepage: homepageReducer,
  },
});
