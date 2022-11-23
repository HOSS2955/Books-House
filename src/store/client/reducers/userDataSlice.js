import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { user: {} };

export const getUserData = createAsyncThunk(
   "users/getUserData",
   async (_, thunckAPI) => {
      const { rejectWithValue } = thunckAPI;
      try {
         const response = await axios.get("/user/getallusers");
         return response.data;
      } catch (error) {
         return rejectWithValue(error.message);
      }
   }
);

export const userDataSlice = createSlice({
   name: "userData",
   initialState,
   reducers: {},
   extraReducers: {
      [getUserData.fulfilled]: (state, action) => {
         state.user = action.payload[1];
      },
   },
});

export const userDataReducer = userDataSlice.reducer;
export const userDataActions = userDataSlice.actions;
