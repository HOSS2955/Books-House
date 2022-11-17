import React, { useEffect, useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Button } from "react-bootstrap";
import AuthorForm from "../../../components/client/author-form/AuthorForm";
import CheckoutForm from "../../../components/client/ChecoutForm/CheckoutForm";
import Modalnew from "../../../components/client/form-modal/Modal";
import ConfettiModal from "../../../components/client/ui/ConfettiModel";

export default function Service() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("form");
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [packages, setPackages] = useState({
    id: 1,
    name: "package1",
    price: 70,
  });
  const [windowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [confetti, setConfetti] = useState(false);
  // const { authorData } = useSelector((state) => state.author);

  const handlePay = () => setActive("pay");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios.get("/config").then(async (r) => {
      const { publishableKey } = await r.data;
      console.log(publishableKey);
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    axios.post("/create-payment-intent", packages).then(async (result) => {
      var { clientSecret } = await result.data;
      console.log(clientSecret);
      setClientSecret(clientSecret);
    });
  }, [packages]);

  return (
    <div>
      {confetti === true && <ConfettiModal size={windowDimensions} />}
      {/* <ConfettiModal /> */}
      <Button variant="primary" onClick={handleShow}>
        model
      </Button>
      {/* <Elements stripe={stripePromise} options={{ clientSecret }}>
        <CheckoutForm packages={packages} />
      </Elements> */}
      <Modalnew show={show} handleClose={handleClose} packages={packages}>
        {active === "form" && (
          <AuthorForm active={active} handlePay={handlePay} />
        )}
        {clientSecret && stripePromise && active === "pay" && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm packages={packages} confetti={setConfetti} />
          </Elements>
        )}
      </Modalnew>
    </div>
  );
}
