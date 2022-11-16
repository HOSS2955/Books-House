import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const packageApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005/" }),
  reducerPath: "packageApi",
  endpoints: (build) => ({
    getPackageData: build.query({
      query: () => "services",
      providesTags:[{title:"Package",id:"LIST"}]
    })
  })
});

export const { useGetPackageDataQuery} = packageApi;