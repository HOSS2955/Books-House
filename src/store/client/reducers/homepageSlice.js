import { createSlice } from "@reduxjs/toolkit";
// import { useGetHomepageDataQuery } from "../../features/apiSlice";

const initialState = {
  wallOfFamesData: [],
  aboutData: [],
  clientsTestimonialsData: [],
  packagesData:[],
  headerData:[],
  isLoading: false,
  errorMsg: null,
};

const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    setDataInLocalState: (state, action) => {
      // action.payload.wallOfFamesData =======> in case of home array
      console.log("wall of famesFrom Reducer", action.payload);
      state.wallOfFamesData = action.payload[0].wallOfFames;
      state.clientsTestimonialsData = action.payload[1].clientsTestimonials;
      state.packagesData = action.payload[2].services;
      state.headerData = action.payload[3].header;
      
      console.log("wall of famesFrom Reducer", action.payload[0].wallOfFames);
      console.log("clientsTestimonials From Reducer", action.payload[1].clientsTestimonials);
      console.log("packages from reducer" , action.payload[2].services);
      console.log("Header from reducer" , action.payload[3].header);
    },
  },
});

export const homepageReducer = homepageSlice.reducer;
export const homepageActions = homepageSlice.actions;
