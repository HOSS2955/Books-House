import React, { useMemo } from "react";
import { useSelector } from "react-redux";

export default function useAuth(myRole) {
  const currentRole = useSelector((state) => `state.${myRole}State`);

  return useMemo(() => ({ currentRole }), [currentRole]);
}
