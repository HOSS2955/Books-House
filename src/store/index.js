import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./reducers/bookSlice";
import { cartReducer } from "./reducers/cartSlice";
import { homepageReducer } from "./reducers/homepageSlice";
import { userReducer } from "./reducers/userSlice";
import { homepageApi } from "../features/homeApiSlice";
import { authReducer } from "./reducers/authSlice";
import { authApi } from "../features/authApiSlice";
export const store = configureStore({
  reducer: {
    books: booksReducer,
    cart: cartReducer,
    user: userReducer,
    homepage: homepageReducer,
    auth: authReducer,
    [homepageApi.reducerPath]: homepageApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (gDM) => gDM().concat(homepageApi.middleware, authApi.middleware),
});
