import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const homepageApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005/" }),
  reducerPath: "homepageApi",
  endpoints: (build) => ({
    getHomepageData: build.query({
      query: () => "slider",
      providesTags:[{title:"Slider",id:"LIST"}]
    }),
    updateHomepageData:build.mutation({
      query(slide){

        return {url:`slider/${slide.id}` , method:"PUT" , body:slide}
      },
      invalidatesTags:[{title:"Slider",id:"LIST"}]
    }),
    addNewSliderHomepageData:build.mutation({
        query(user){
    
          return {url:`slider` , method:"POST" , body:user}
        },
        invalidatesTags:[{title:"Slider",id:"LIST"}]
      })
  })
});

export const { useGetHomepageDataQuery , useUpdateHomepageDataMutation , useAddNewSliderHomepageDataMutation } = homepageApi;