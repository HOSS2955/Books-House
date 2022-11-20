import React from "react";

import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AlreadyUser = () => {
  const user = useSelector((state) => state.userState);
  // const admin = useSelector((state) => state.adminState);

  const location = useLocation();
  return user.token ? (
    
    <Navigate to="/home" state={{ from: location }} replace />
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
};

export default AlreadyUser;
