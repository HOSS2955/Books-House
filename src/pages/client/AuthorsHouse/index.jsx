import React, { useState } from "react";
import "./authorshouse.css";
import Pricing from "../Home/Package";
import { useEffect } from "react";
import "../../../assets/css/Home.css";
import { useGetHomepageDataQuery } from "../../../features/homeApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { homepageActions } from "../../../store/client/reducers/homepageSlice";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import ConfettiModal from "../../../components/client/ui/ConfettiModel";
import { Button } from "react-bootstrap";
import Modalnew from "../../../components/client/form-modal/Modal";
import AuthorForm from "../../../components/client/author-form/AuthorForm";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../../components/client/ChecoutForm/CheckoutForm";

export default function AuthorsHouse() {
  const { data, isError, isLoading } = useGetHomepageDataQuery();
  const dispatch = useDispatch();
  const { setDataInLocalState } = homepageActions;
  const { wallOfFamesData, feedbackData, packagesData } = useSelector(
    (state) => state.homepage
  );
  useEffect(() => {
    console.log(data);
    if (data) {
      dispatch(setDataInLocalState(data));
      console.log(data);
    }
  }, [dispatch, data]);

  // stripe code and forms
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("form");
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [windowDimensions] = useState({
    width: window.innerWidth,
    height: 2200,
  });
  const [confetti, setConfetti] = useState(false);

  const [packages, setPackages] = useState(null);
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
    if (packages !== null) {
      console.log(packages);
      axios.post("/create-payment-intent", packages).then(async (result) => {
        var { clientSecret } = await result.data;
        console.log(clientSecret);
        setClientSecret(clientSecret);
      });
    }
    console.log(confetti);
  }, [packages, confetti]);

  return (
    <div className="mt-5">
      {/* <ConfettiModal /> */}

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
      {/* SERVICE NAME AND DESCRIPTION */}
      <div className="mb-5">
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex flex-column justify-content-center align-items-center">
              <h1 className="mb-3">Authors House</h1>
              <p>
                You’re in the right place.No matter how you publish your book
                Give us your book and we will provide you with real reviews
                about your book
              </p>
              <div>
                <button className="px-4 btn btn-outline-dark rounded-0">
                  Packages
                </button>
              </div>
            </div>
            <div className="col-6 p-5">
              <img src="./images/hero_1.jpg" className="col-12" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* OUR SERVIECS GALLERY */}
      <div className="gallery mb-5">
        <h2 className="text-center my-5">Our Services Gallery</h2>
        <div className="row container mx-auto">
          <div className="col-8 row">
            <div className="col-6">
              <img className="col-12 py-2" src="./images/hero_1.jpg" alt="" />
            </div>
            <div className="col-6 py-2">
              <img className="col-12" src="./images/hero_2.jpg" alt="" />
            </div>
            <div className="col-12 py-2">
              <img className="col-12" src="./images/hero_3.jpg" alt="" />
            </div>
          </div>
          <div className="col-4 py-2">
            <img className="w-100 h-100  " src="./images/hero_2.jpg" alt="" />
          </div>
        </div>
      </div>
      <div>
        {confetti === true && <ConfettiModal size={windowDimensions} />}
        {/* PACKAGES */}
        <Pricing
          pricingArray={packagesData}
          handleShow={handleShow}
          setPackages={setPackages}
        />
      </div>
    </div>
  );
}
