import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sliderData: [],
  aboutData: [],
  feedbackData: [],
};

const homepageSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setDataInLocalState: (state, action) => {
      state.sliderData = action.payload;
    },
  },
});

export const homepageReducer = homepageSlice.reducer;
export const homepageActions = homepageSlice.actions;
