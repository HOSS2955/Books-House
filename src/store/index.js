import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./reducers/bookSlice";
import { cartReducer } from "./reducers/cartSlice";
import { homepageReducer } from "./reducers/homepageSlice";
import { userReducer } from "./reducers/userSlice";
import { homepageApi } from "../features/apiSlice";
export const store = configureStore({
  reducer: {
    books: booksReducer,
    cart: cartReducer,
    user: userReducer,
    homepage: homepageReducer,
    [homepageApi.reducerPath]: homepageApi.reducer,
  },
  middleware: (gDM) => gDM().concat(homepageApi.middleware),
});
