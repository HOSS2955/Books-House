import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

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
    },
  },
  extraReducers: {},
});

export const homepageReducer = homepageSlice.reducer;
export const homepageActions = homepageSlice.actions;
