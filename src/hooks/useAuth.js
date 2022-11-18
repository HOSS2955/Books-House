import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../store/client/reducers/x";
export default function useAuth() {
  const user = useSelector(selectCurrentUser);

  return useMemo(() => ({ user }), [user]);
}
