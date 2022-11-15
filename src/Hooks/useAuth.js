import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/reducers/authSlice";

export default function useAuth() {
  const user = useSelector(selectCurrentUser);

  return useMemo(() => ({ user }), [user]);
}