import { createSlice } from "@reduxjs/toolkit";
import { useGetHomepageDataQuery } from "../../features/apiSlice";

const initialState = {
  sliderData: [],
  aboutData: [],
  feedbackData: [],
  isLoading: false,
  errorMsg: null,
};

const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    setDataInLocalState: (state, action) => {
      state.sliderData = action.payload;
      console.log("From Reducer", action.payload);
    },
  },
});

export const homepageReducer = homepageSlice.reducer;
export const homepageActions = homepageSlice.actions;
