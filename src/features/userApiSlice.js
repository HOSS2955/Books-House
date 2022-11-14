import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useSelector } from "react-redux";
// import {authSliceState}
// const headers = { 'Content-Type' };
export const authApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005/",
    prepareHeaders: (headers, { getState }) => {
      // State >>>>>>> Redux
      //   const token = useSelector(state=> state.token) *
    },
  }),
  endpoints: (build) => ({
    getUsersData: build.query({
      query: () => "users",
      providesTags: [{ title: "Users", id: "USERS_LIST" }],
    }),
    setUserData: build.mutation({
      query(user) {
        return {
          url: "users",
          method: "POST",
          body: {
            user,
          },
        };
      },
    }),
  }),
});

export const { useGetUsersDataQuery } = userApi;
