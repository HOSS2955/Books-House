import axios from "axios";
// import { useSelector } from "react-redux";
// import { url } from "../slices/api";

const PayButton = ({ cartItems }) => {
  //   const user = useSelector((state) => state.auth);
  console.log(cartItems);
  const handleCheckout = () => {
    // axios
    //   .post("/create-checkout-session-cart", { cartItems })
    //   .then((response) => {
    //     if (response.data.url) {
    //       window.location.href = response.data.url;
    //     }
    //   })
    //   .catch((err) => console.log(err.message));

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
      <button onClick={() => handleCheckout()}>Check out</button>
    </>
  );
};

export default PayButton;
