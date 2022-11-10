import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  sliderData: [],
  aboutData: [],
  feedbackData: [],
  isLoading: false,
  errorMsg: null,
};

const getHomepageData = createAsyncThunk(
  "homepage/get",
  async (homeData, _thunkApi) => {
    const { rejectWithValue, getState } = _thunkApi;
    try {
      const response = await axios.get(process.env.REACT_APP_API_KEY);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const homepageSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // setDataInLocalState: (state, action) => {
    //   state.sliderData.push(action.payload.slider);
    //   state.aboutData.push(action.payload.aboutData);
    //   state.sliderData = action.payload;
    // },
  },
  extraReducers: {
    [getHomepageData.pending]: (state, action) => {
      state.status = "pending";
      state.isLoading = true;
    },
    [getHomepageData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.sliderData = action.payload;
    },
    [getHomepageData.rejected]: (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload;
    },
  },
});

export const homepageReducer = homepageSlice.reducer;
export const homepageActions = homepageSlice.actions;
