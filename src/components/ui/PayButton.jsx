import axios from "axios";
import "../../assets/css/PayButton.css";
// import { useSelector } from "react-redux";
// import { url } from "../slices/api";

const PayButton = ({ cartItems }) => {
  console.log(cartItems);
  const handleCheckout = () => {
    axios
      .post("/create-checkout-session", { cartItems })
      .then((response) => {
        if (response.data.url) {
          console.log(response);
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button
        className="btn w-100 bg-button fs-5"
        onClick={() => handleCheckout()}
      >
        Check out
      </button>
    </>
  );
};

export default PayButton;
