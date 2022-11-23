import { authApi } from "../services/authApi";
import {
  logoutInState,
  setUserInState,
} from "../store/client/reducers/userSlice";
export const authApiSlice = authApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (credentials) => ({
        url: "signUp",
        method: "POST",
        body: { ...credentials },
      }),
      transformResponse: (result) => result,
    }),

    loginUser: builder.mutation({
      query: (credentials) => {
        return {
          url: "login",
          method: "POST",
          body: { ...credentials },
        };
      },
      transformResponse: (result) => result,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUserInState(data));
          console.log("done added user to state");
        } catch (error) {
          console.log(
            "Error Inside onQueryStarted RTK QUERY FROM LOGIN : ",
            error
          );
        }
      },
    }),

    verifyEmail: builder.mutation({
      query({ verificationCode }) {
        return {
          url: `confirmEmail/${verificationCode}`,
          method: "GET",
        };
      },
    }),
    logoutUser: builder.mutation({
      query() {
        return {
          url: `logoutMe`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useVerifyEmailMutation,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = authApiSlice;
