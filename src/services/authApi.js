import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUserInState } from "../store/client/reducers/userSlice";
// import { useSelector } from "react-redux";
const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `/user/`,
    // prepareHeaders: (headers, { getState }) => {
    //   // console.log(getState());
    //   const token = getState().auth.token;
    //   token && console.log(token);
    //   if (token) {
    //     headers.set("Authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query(credentials) {
        return {
          url: "signUp",
          method: "POST",
          body: credentials,
        };
      },
      transformResponse: (result) => result,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const data = await queryFulfilled;
          console.log(data);
        } catch (error) {
          console.log("failed register request ", error);
        }
      },
    }),
    loginUser: builder.mutation({
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
          const data = await queryFulfilled;
          dispatch(setUserInState(data.data.token));
        } catch (error) {
          console.log("failed login request ", error);
        }
      },
    }),
    verifyEmail: builder.mutation({
      query({ verificationCode }) {
        return {
          url: `confirmEmail/${verificationCode}`,
          method: "GET",
        };
      },
    }),
    logoutUser: builder.mutation({
      query() {
        return {
          url: "logout",
          credentials: "include",
        };
      },
    }),

    // protected: builder.mutation({
    //   query: () => "protected",
    // }),
  }),
});

export const {
  useVerifyEmailMutation,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = authApi;
