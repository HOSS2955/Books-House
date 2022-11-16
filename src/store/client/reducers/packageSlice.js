import { createSlice } from "@reduxjs/toolkit";
// import { useGetHomepageDataQuery } from "../../features/apiSlice";

const initialState = {
    packageData:[],
    packageLoading: false,
  packageError: null,
};

const packageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
    setDataInLocalState: (state, action) => {
      console.log(" package Reducer", action.payload);
      state.packageData = action.payload
      
      console.log("package From Reducer", action.payload)
    },
  },
});

export const packageReducer = packageSlice.reducer;
export const packageActions = packageSlice.actions;
