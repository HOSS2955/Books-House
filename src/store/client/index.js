import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./reducers/bookSlice";
import { cartReducer } from "./reducers/cartSlice";
import { resReducer } from "./reducers/resSlice";
// import { authReducer } from "./reducers/authSlice";
import { homepageReducer } from "./reducers/homepageSlice";
import { homepageApi } from "../../features/homeApiSlice";
import { authorReducer } from "./reducers/authorSlice";
import { packageApi } from "../../features/packageApiSlice";
import { packageReducer } from "./reducers/packageSlice";
// import { checkAuthReducer } from "./reducers/checkAuth";
import userReducer from "./reducers/userSlice";
import adminReducer from "./reducers/adminSlice";
import { userApi } from "../../services/userApi";
import { authApi } from "../../services/authApi";
import { adminAuthApi } from "../../services/adminAuthApi";
import { bookReviewReducer } from "./reducers/bookReviewSlice";
import { profilePackageReducer } from "./reducers/profilePaymet";
export const clientStore = configureStore({
  reducer: {
    books: booksReducer,
    cart: cartReducer,
    res: resReducer,
    author: authorReducer,
    homepage: homepageReducer,
    // checkAuth: checkAuthReducer,
    [homepageApi.reducerPath]: homepageApi.reducer,
    package: packageReducer,
    [packageApi.reducerPath]: packageApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [adminAuthApi.reducerPath]: adminAuthApi.reducer,
    // adminState: adminReducer,
    userState: userReducer,
    //  auth: authReducer,
    //  [authApi.reducerPath]: authApi.reducer,
    bookReviews: bookReviewReducer,
    ProfilePayment: profilePackageReducer,
  },
  middleware: (gDM) =>
    gDM().concat(
      homepageApi.middleware,
      packageApi.middleware,
      authApi.middleware,
      adminAuthApi.middleware,
      userApi.middleware
      // authApi.middleware
    ),
});
