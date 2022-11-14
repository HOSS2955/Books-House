import React from "react";
import PayButton from "../ui/PayButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faMinus,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../store/client/reducers/cartSlice";
import "../../assets/css/Cart.css";
import { Link } from "react-router-dom";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="h-100 h-custom ">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-12 ">
            <div className="card card-registration card-registration-2 ">
              <div className="card-body p-0">
                <div className="row g-0 ">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5 ">
                        <h1 className="fw-bold mb-0 text-black">
                          Shopping Cart
                        </h1>
                      </div>
                      {cart.cartItems.length === 0 ? (
                        <div className="cart-empty">
                          <p>Your cart is currently empty</p>
                          <div className="start-shopping">
                            <Link to="/books">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="bi bi-arrow-left"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                />
                              </svg>
                              <span>Start Shopping</span>
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <div>
                          {cart.cartItems &&
                            cart.cartItems.map((cartItem) => (
                              <div>
                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                  <div className="col-md-2 col-lg-2 col-xl-2">
                                    <img
                                      src={cartItem.imageSrc}
                                      className="img-fluid rounded-3"
                                      alt={cartItem.name}
                                    />
                                  </div>
                                  <div className="col-md-3 col-lg-3 col-xl-3">
                                    <h6 className="text-muted">
                                      {cartItem.name}
                                    </h6>
                                    <p>{cartItem.desc}</p>
                                  </div>
                                  <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                    <button
                                      className="btn btn-link px-2"
                                      onClick={() =>
                                        handleDecreaseCart(cartItem)
                                      }
                                    >
                                      <FontAwesomeIcon
                                        className="text-dark fs-5"
                                        icon={faMinus}
                                      />
                                    </button>

                                    <div className="count mt-1">
                                      {cartItem.cartQuantity}
                                    </div>

                                    <button
                                      className="btn btn-link px-2"
                                      onClick={() => handleAddToCart(cartItem)}
                                    >
                                      <FontAwesomeIcon
                                        className="text-dark fs-5"
                                        icon={faPlus}
                                      />
                                    </button>
                                  </div>
                                  <div className="col-md-1 col-lg-1 col-xl-1 offset-lg-1">
                                    <div className="mb-0">
                                      ${cartItem.price}
                                    </div>
                                  </div>
                                  <div className="col-md-3 col-lg-2 col-xl-2 ">
                                    Total: $
                                    {cartItem.price * cartItem.cartQuantity}
                                  </div>
                                  <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                    <button
                                      className="btn btn-link px-2"
                                      onClick={() =>
                                        handleRemoveFromCart(cartItem)
                                      }
                                    >
                                      <FontAwesomeIcon
                                        className="text-dark fs-5"
                                        icon={faTimes}
                                      />
                                    </button>
                                  </div>
                                </div>

                                <hr className="my-4" />
                              </div>
                            ))}
                        </div>
                      )}

                      <div className="pt-5">
                        <button
                          className="btn clear-btn text-danger mb-2"
                          onClick={() => handleClearCart()}
                        >
                          Clear Cart
                        </button>
                        <h6 className="mb-0">
                          <a href="/books" className="text-body text-center">
                            <FontAwesomeIcon
                              className="text-dark mx-2 "
                              icon={faArrowLeftLong}
                            />
                            Back to shop
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-color position-relative">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>

                      {/* <div className="d-flex justify-content-between mb-4">
                      <h5 className="text-uppercase">items 3</h5>
                      <h5>€ 132.00</h5>
                    </div> */}

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>${cart.cartTotalAmount}</h5>
                      </div>
                      <hr className="my-4" />
                      <h5>
                        This Price without Shipping We Will Add Shipping On
                        Payment
                      </h5>
                      <div className="mb-5 w-75 position-absolute bottom-0 start-50 translate-middle-x">
                        <PayButton cartItems={cart.cartItems} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
