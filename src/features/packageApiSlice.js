import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const packageApi = createApi({
   baseQuery: fetchBaseQuery({ baseUrl: "/package" }),
   reducerPath: "packageApi",
   endpoints: (build) => ({
      getPackageData: build.query({
         query: () => "/getall",
         providesTags: [{ title: "Package", id: "LIST" }],
      }),
   }),
});

export const { useGetPackageDataQuery } = packageApi;
