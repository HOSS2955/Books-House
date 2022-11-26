import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useGetUserMutation } from "../../../features/authApiSlice";

const initialState = {
   user: "admin",
   token: "assa",
   role: "user",
};

export const userSlice = createSlice({
   initialState,
   name: "userSlice",
   reducers: {
      logoutInState: () => initialState,
      setUserInState: (state, { payload }) => {
         const { allowedRole, user, token } = payload;
         state.user = user;
         state.token = token;
         state.role = allowedRole;
      },
   },
});

export default userSlice.reducer;

export const selectCurrentUser = (state) => state.userSlice.user;
export const selectCurrentToken = (state) => state.userSlice.token;

export const { logoutInState, setUserInState } = userSlice.actions;
