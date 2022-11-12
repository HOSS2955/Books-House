import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./reducers/bookSlice";
import { cartReducer } from "./reducers/cartSlice";
import { resReducer } from "./reducers/resSlice";

import { homepageReducer } from "./reducers/homepageSlice";
import { homepageApi } from "../features/apiSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    cart: cartReducer,
    res : resReducer,
    homepage: homepageReducer,
    [homepageApi.reducerPath]: homepageApi.reducer
  },
  middleware: (gDM) => gDM().concat(homepageApi.middleware),
});
