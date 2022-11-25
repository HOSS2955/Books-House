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
        body: credentials,
      }),
      transformResponse: (result) => result,
    }),

    loginUser: builder.mutation({
      query: (credentials) => {
        return {
          url: "login",
          method: "POST",
          body: credentials,
          credientials: 'include'
        };
      },
      transformResponse: (result) => result,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("user data", data);
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
    forgetPassword: builder.mutation({
      query(credientials) {
        return {
          url: "forgetPassword",
          method: "POST",
          body: { ...credientials },
          credentials: "include",
        };
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
    updateProfile: builder.mutation({
      query() {
        return {
          url: `updateProfile`,
          method: "POST",
          credentials: "include",
        };
      },
    }),
    getUser: builder.mutation({
      query() {
        return {
          url: `profile`,
          method: "POST",
          credentials: "include",
        };
      },
    }),
    logoutUser: builder.mutation({
      query() {
        return {
          url: `logoutMe`,
          method: "DELETE",
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useGetUserMutation,
  useVerifyEmailMutation,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useForgetPasswordMutation,
  useUpdateProfileMutation,
} = authApiSlice;
