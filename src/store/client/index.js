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
import { stripePackagesReducer } from "./reducers/stripePackagesSlice";
import { stripeOrdersReducer } from "./reducers/stripeOrdersSlice";
import { profilePackageReducer } from "./reducers/profilePaymet";
import { userDataReducer } from "./reducers/userDataSlice";
import { wishlistReducer } from "./reducers/wishlistSlice";
import { bookApiSlice } from "../../features/bookApiSlice";
import { bookReviewApiSlice } from "../../features/bookReviewApiSlice";
export const clientStore = configureStore({
   reducer: {
      books: booksReducer,
      cart: cartReducer,
      res: resReducer,
      author: authorReducer,
      homepage: homepageReducer,
      // checkAuth: checkAuthReducer,
      stripePackages: stripePackagesReducer,
      stripeOrders: stripeOrdersReducer,
      [homepageApi.reducerPath]: homepageApi.reducer,
      package: packageReducer,
      [packageApi.reducerPath]: packageApi.reducer,
      [authApi.reducerPath]: authApi.reducer,
      [userApi.reducerPath]: userApi.reducer,
      [adminAuthApi.reducerPath]: adminAuthApi.reducer,
      [bookReviewApiSlice.reducerPath]: bookReviewApiSlice.reducer,
      [bookApiSlice.reducerPath]: bookApiSlice.reducer,
      // adminState: adminReducer,
      userState: userReducer,
      //  auth: authReducer,
      //  [authApi.reducerPath]: authApi.reducer,
      bookReviews: bookReviewReducer,
      userData: userDataReducer,
      ProfilePayment: profilePackageReducer,
      WishList: wishlistReducer,
   },
   middleware: (gDM) =>
      gDM().concat(
         homepageApi.middleware,
         packageApi.middleware,
         authApi.middleware,
         adminAuthApi.middleware,
         userApi.middleware,
         bookApiSlice.middleware,
         bookReviewApiSlice.middleware
         // authApi.middleware
      ),
});
