import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  role: null,
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    logoutInState: () => initialState,
    setUserInState: (state, { payload }) => {
      console.log(payload);
      state.user = payload.user;
      state.token = payload.token;
      state.role = payload.allowedRole;
    },
  },
});

export default userSlice.reducer;

export const { logoutInState, setUserInState } = userSlice.actions;
