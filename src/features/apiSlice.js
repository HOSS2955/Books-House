import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const homepageApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005/" }),
  reducerPath: "homepageApi",
  endpoints: (build) => ({
    getHomepageData: build.query({
      query: () => "sliders",
    }),
  }),
});

export const { useGetHomepageDataQuery } = homepageApi;
