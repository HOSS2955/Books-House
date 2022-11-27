import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import customFetchBase from "../components/CustomFetchBaseAdmin";
import { setUserInState, logoutInState } from "../store/client/reducers/userSlice";
export const adminApiSlice = createApi({
  reducerPath: "adminApiSlice",
  baseQuery: customFetchBase,
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (credentials) => {
        return {
          url: "login",
          method: "POST",
          body: credentials,
          credentials: "include",
        };
      },
      transformResponse: (result) => result,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setUserInState(data));
        } catch (error) {
          console.log("failed login admin request ", error);
        }
      },
    }),
    forgetPassword: builder.mutation({
      query(data) {
        return {
          url: "forgetPassword",
          method: "POST",
          body: { ...data },
          credentials: "include",
        };
      },
    }),
    sendCode: builder.mutation({
      query(credientials) {
        return {
          url: "sendCode",
          method: "POST",
          body: { ...credientials },
        };
      },
    }),
    logoutAdmin: builder.mutation({
      query() {
        return {
          url: "logout",
          credentials: "include",
        };
      },
    }),
  }),
});
