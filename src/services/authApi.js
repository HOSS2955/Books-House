import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setAdminState } from "../store/client/reducers/adminSlice";
import {
  setUserInState,
  logoutInState,
} from "../store/client/reducers/userSlice";

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT;
const baseQuery = fetchBaseQuery({
  credentials: "include",
  baseUrl: `/user/`,

  prepareHeaders: (headers, { getState }) => {
    console.log("headers", headers);

    const token = getState().userState?.token;
    console.log(token);
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  console.log(result.error.originalStatus, "Result inside custome base query");
  if (result?.error?.originalStatus === 403) {
    console.log("Sending refresh token!");
    const refreshResult = await baseQuery("/refreshMe", api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      const user = api.getState().userSlice.user;
      api.dispatch(setUserInState({ ...refreshResult.data, user }));
      let result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logoutInState());
      console.log("logout me -- we should call dispatch logoutUser");
    }
  }
  return result;
};
export const authApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
