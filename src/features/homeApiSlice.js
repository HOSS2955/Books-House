import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const homepageApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  reducerPath: "homepageApi",
  endpoints: (build) => ({
    getHomepageData: build.query({
      query: () => "home",
      providesTags: [{ title: "Home", id: "LIST" }],
    }),
  }),
});

export const { useGetHomepageDataQuery } = homepageApi;