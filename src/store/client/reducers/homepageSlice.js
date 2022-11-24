import { createSlice } from "@reduxjs/toolkit";
// import { useGetHomepageDataQuery } from "../../features/apiSlice";

const initialState = {
  wallOfFamesData: [],
  aboutData: [],
  clientsTestimonialsData: [],
  serviceData:[],
  isLoading: false,
  errorMsg: null,
};

const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    setDataInLocalState: (state, action) => {
      // action.payload.wallOfFamesData =======> in case of home array
      console.log("wall of fames From Reducer", action.payload[0].wallOfFames);
      console.log("clients testimonials" , action.payload[0].clientsTestimonials)
      console.log("ServiceData" , action.payload[0].services)
      state.wallOfFamesData = action.payload[0].wallOfFames;
      state.clientsTestimonialsData = action.payload[0].clientsTestimonials;
      state.serviceData = action.payload[0].services;
    },
  },
});

export const homepageReducer = homepageSlice.reducer;
export const homepageActions = homepageSlice.actions;