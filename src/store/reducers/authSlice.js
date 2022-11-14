import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../features/userApiSlice";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.MatchFullFilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
      }
    );
  },
});
export const homepageReducer = homepageSlice.reducer;
export const homepageActions = homepageSlice.actions;
