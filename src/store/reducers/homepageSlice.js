import { createSlice } from "@reduxjs/toolkit";
// import { useGetHomepageDataQuery } from "../../features/apiSlice";

const initialState = {
  wallOfFamesData: [],
  aboutData: [],
  feedbackData: [],
  packagesData:[],
  isLoading: false,
  errorMsg: null,
};

const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    setDataInLocalState: (state, action) => {
      // action.payload.wallOfFamesData =======> in case of home array
      state.wallOfFamesData = action.payload[0].wallOfFames;
      state.feedbackData = action.payload[1].feedback;
      state.packagesData = action.payload[2].services;
      console.log("wall of famesFrom Reducer", action.payload[0].wallOfFames);
      console.log("feedback From Reducer", action.payload[1].feedback);
      console.log("packages from reducer" , action.payload[2].services)
    },
  },
});

export const homepageReducer = homepageSlice.reducer;
export const homepageActions = homepageSlice.actions;
