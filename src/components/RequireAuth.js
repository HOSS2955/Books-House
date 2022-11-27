import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import React from "react";
import useAuth from "../Hooks/useAuth";
import { useLoginUserMutation } from "../features/authApiSlice";

//allowedRoles={['admin']}
function RequireAuth({ allowedRoles }) {
   const [cookies] = useCookies(["jwt"]);
   const user = useSelector((state) => state.userState);

   const [login, { isLoading }] = useLoginUserMutation();

   // const user = useSelector((state) => state.userState);
   // const admin = useSelector((state) => state.adminState);

   const location = useLocation();
   return (cookies.jwt || user?.token) && allowedRoles.includes(user?.role) ? (
      <Outlet />
   ) : cookies.jwt || user?.token ? (
      <Navigate to="/unauthorized" state={{ from: location }} replace />
   ) : (
      <Navigate to="/auth/login" state={{ from: location }} replace />
   );
}

export default RequireAuth;

// import { useCookies } from "react-cookie";

// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { userApi } from "../redux/api/userApi";
// import FullScreenLoader from "./FullScreenLoader";

// const RequireUser = ({ allowedRoles }) => {
//   const [cookies] = useCookies(["logged_in"]);
//   const location = useLocation();

//   const { isLoading, isFetching } = userApi.endpoints.getMe.useQuery(null, {
//     skip: false,
//     refetchOnMountOrArgChange: true,
//   });

//   const loading = isLoading || isFetching;

//   const user = userApi.endpoints.getMe.useQueryState(null, {
//     selectFromResult: ({ data }) => data,
//   });

//   if (loading) {
//     return <FullScreenLoader />;
//   }

//   return cookies.logged_in || user ? (
//     <Outlet />
//   ) : cookies.logged_in && user ? (
//     <Navigate to="/unauthorized" state={{ from: location }} replace />
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   );
// };

// export default RequireUser;
