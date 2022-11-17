import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { useSelector } from "react-redux";

export const authApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://test-api.storexweb.com/api/",
    prepareHeaders: (headers, { getState }) => {
      // console.log(getState());
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => {
        return {
          url: "login",
          method: "POST",
          body: credentials,
        };
      },
    }),
    protected: builder.mutation({
      query: () => "protected",
    }),
  }),
});

export const { useLoginMutation, useProtectedMutation } = authApi;
