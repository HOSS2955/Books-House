import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./reducers/bookSlice";
import { cartReducer } from "./reducers/cartSlice";
import { resReducer } from "./reducers/resSlice";

import { homepageReducer } from "./reducers/homepageSlice";
import { homepageApi } from "../../features/homeApiSlice";
import { authorReducer } from "./reducers/authorSlice";
import { packageApi } from "../../features/packageApiSlice";
import { packageReducer } from "./reducers/packageSlice";
import { checkAuthReducer } from "./reducers/checkAuth";

export const clientStore = configureStore({
   reducer: {
      books: booksReducer,
      cart: cartReducer,
      res: resReducer,
      author: authorReducer,
      homepage: homepageReducer,
      checkAuth: checkAuthReducer,
      [homepageApi.reducerPath]: homepageApi.reducer,
      package : packageReducer,
      [packageApi.reducerPath] : packageApi.reducer
   },
   middleware: (gDM) => gDM().concat(homepageApi.middleware , packageApi.middleware)
});
