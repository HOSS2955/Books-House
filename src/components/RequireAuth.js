import React from "react";
import { authApiSlice } from "../features/authApiSlice";
import { useState, useEffect } from "react";
import { selectCurrentUser } from "../store/client/reducers/userSlice";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../features/authApiSlice";
import FullScreenLoader from "./FullScreenLoader";
import { useCookies } from "react-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";
function RequireAuth({ allowedRoles }) {
  //   const user = useSelector(selectCurrentUser);
  const [cookies] = useCookies(["logged_in"]);
  const location = useLocation();
  const { isLoading, isFetching } = authApiSlice.endpoints.getUser.useQuery(
    null,
    {
      skip: false,
      refetchOnMountOrArgChange: true,
    }
  );

  const user = authApiSlice.endpoints.getMe.useQueryState(null, {
    selectFromResult: ({ data }) => data,
  });

  const loading = isLoading || isFetching;

  if (loading) {
    return <FullScreenLoader />;
  }

  return (cookies.logged_in || user) &&
    allowedRoles.includes(user?.allowedRole) ? (
    <Outlet />
  ) : cookies.logged_in && user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;
