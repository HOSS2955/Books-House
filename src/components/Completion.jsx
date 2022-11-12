import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { clearCart, getTotals } from "../store/reducers/cartSlice";
import ConfettiModal from "./ui/ConfettiModel";

export default function Completion() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [windowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <>
      <ConfettiModal size={windowDimensions} />

      <Container>
        <h2>Checkout Successful</h2>
        <p>Your order might take some time to process.</p>
        <p>Check your order status at your profile after about 10mins.</p>
        <p>
          Incase of any inqueries contact the support at{" "}
          <strong>support@onlineshop.com</strong>
        </p>
      </Container>
    </>
  );
}
