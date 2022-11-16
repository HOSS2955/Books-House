import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkAuth: false,
};
const checkAuthSlice = createSlice({
  name: "checkAuth",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.count += 1;
    },
    decrease: (state, action) => {
      state.count -= 1;
    },
  },
});

export const checkAuthReducer = checkAuthSlice.reducer;
export const checkAuthActions = checkAuthSlice.actions;