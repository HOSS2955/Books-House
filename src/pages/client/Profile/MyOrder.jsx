import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getprofileOrder } from "../../../store/client/reducers/profilePaymet";
import OrderCard from "./OrderCard";

export default function MyOrder() {
  const dispatch = useDispatch();
  const email = "hoss2955@gmail.com";
  const { profileOrder } = useSelector((state) => state.ProfilePayment);
  useEffect(() => {
    dispatch(getprofileOrder(email));
  }, []);

  return (
    <div>
      {profileOrder &&
        profileOrder?.map((item, index) => (
          <OrderCard key={index} data={item} />
        ))}
    </div>
  );
}
