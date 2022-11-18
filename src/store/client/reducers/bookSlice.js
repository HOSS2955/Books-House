import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  books: [],
  bookCart: [],
  isLoading: false,
  bookDetails: null,
};

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (_, thunckAPI) => {
    const { rejectWithValue } = thunckAPI;
    try {
      const response = await axios.get("/books");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
      state.isLoading = false;
    },
  },
});

export const booksReducer = booksSlice.reducer;
export const booksActions = booksSlice.actions;
