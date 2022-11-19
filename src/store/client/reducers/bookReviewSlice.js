import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  bookReviews: [],
};
export const getBookReviews = createAsyncThunk(
  "/bookreview/getall",
  async (_, thunckAPI) => {
    const { rejectWithValue } = thunckAPI;
    try {
      const response = await axios.get("/bookreview/getall");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const bookReviewSlice = createSlice({
  name: "bookReviews",
  initialState,
  reducers: {},
  extraReducers: {
    [getBookReviews.fulfilled]: (state, action) => {
      state.bookReviews = action.payload;
    },
  },
});

export const bookReviewReducer = bookReviewSlice.reducer;
export const bookReviewActions = bookReviewSlice.actions;
