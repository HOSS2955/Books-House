import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    logoutInState: () => initialState,
    setUserInState: (state, { payload }) => {
      state.user = payload;
      state.token = payload;
    },
  },
});

export default userSlice.reducer;

export const { logoutInState, setUserInState } = userSlice.actions;
