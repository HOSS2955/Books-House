import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaApple, FaLock, FaUserAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import validator from "validator";
import "./Login.css";

export default function Login() {
  //The state of the error message
  const [passErrMsg, setPassErrMessage] = useState("");
  const [emailErrMsg, setEmailErrMsg] = useState("");
  // The state of the button to be abled or disapled according to the validation
  const [isDisabled, setDisabled] = useState(true);
  // for displaying the error message if the input is invalid
  const [displayEmailErrorMsg, setDisplayEmailErrorMsg] = useState(false);
  const [displayPassErrorMsg, setDisplayPassErrorMsg] = useState(false);
  // npm validator to validate the password
  const validateEmail = (value) => {
    if (validator.isEmpty(value)) {
      // if the email or username is empty
      setEmailErrMsg("Email is required");
      setDisabled(true);
    }
    if (validator.isEmail(value)) {
      // if the email or username is valid
      setEmailErrMsg("Accepted Email ✔");
      setDisabled(false);
    } else {
      // if the email or username is invalid
      setEmailErrMsg("Please enter a valid Email!");
      setDisabled(true);
    }
  };
  const validatePass = (value) => {
    if (validator.isEmpty(value)) {
      // if the email or username is empty
      setPassErrMessage("Password is required");
      setDisabled(true);
    }
    if (validator.isStrongPassword(value)) {
      // if the email or username is valid
      setPassErrMessage("Strong Password ✔");
      setDisabled(false);
    } else {
      // if the email or username is invalid
      setPassErrMessage(
        "Password should contain at least 8 characters with 1 special 1 uppercase 1 lowercase and 1 numeric!"
      );
      setDisabled(true);
    }
  };
  // function changes the state of displaying the error message
  const onDisplayErrorMsg = (e) => {
    console.log(e.target.value);
    if (e.target.name == "password") {
      setDisplayPassErrorMsg(true);
    } else if (e.target.name == "email") {
      setDisplayEmailErrorMsg(true);
    }
  };

  return (
    <>
      <div className="main">
        <div className="centeredElement">
          <div className="auth">
            <h5 className="my-5">Log in to Bookshouse</h5>
            <div className="mb-5">
              {/* if the user clicked outside the input the status of the error message will appear */}
              <InputGroup className="userInput">
                {/* user icon */}
                <InputGroup.Text id="basic-addon1" className="invalid">
                  <FaUserAlt />
                </InputGroup.Text>
                {/* username or email input */}
                <Form.Control
                  name="email"
                  onBlur={onDisplayErrorMsg}
                  onChange={(e) => validateEmail(e.target.value)}
                  aria-label="Email Input"
                  placeholder="Email"
                  style={{
                    borderLeft:
                      emailErrMsg === "Accepted Email ✔"
                        ? "4px solid green"
                        : emailErrMsg === ""
                        ? "none"
                        : "5px solid red",
                    boxShadow: "none",
                  }}
                />
              </InputGroup>
              {/* for displaying the status of the input */}
              {displayEmailErrorMsg && (
                <Form.Text
                  className="errorMsg text-small float-start fw-semibold"
                  style={{
                    color:
                      emailErrMsg === "Accepted Email ✔" ? "green" : "#d21313",
                  }}
                >
                  {emailErrMsg}
                </Form.Text>
              )}
            </div>
            <div className="mb-5">
              {/* if the user clicked outside the input the status of the error message will appear */}
              <InputGroup className="userInput mb-2" onBlur={onDisplayErrorMsg}>
                {/* password icon */}
                <InputGroup.Text id="basic-addon2">
                  <FaLock />
                </InputGroup.Text>
                {/* Password input */}
                <Form.Control
                  type="password"
                  name="password"
                  onChange={(e) => validatePass(e.target.value)}
                  aria-label="Password Input"
                  placeholder="Password"
                  style={{
                    borderLeft:
                      passErrMsg === "Strong Password ✔"
                        ? "4px solid green"
                        : passErrMsg === ""
                        ? "none"
                        : "5px solid red",
                    boxShadow: "none",
                  }}
                />
              </InputGroup>
              {/* for displaying the status of the input */}
              {displayPassErrorMsg && (
                <Form.Text
                  className="errorMsg text-small float-start fw-semibold"
                  style={{
                    color:
                      passErrMsg === "Strong Password ✔" ? "green" : "#d21313",
                  }}
                >
                  {passErrMsg}
                </Form.Text>
              )}
            </div>
            {/*For loging in the website using email*/}
            <button className="btn btn-dark w-100 mb-4 mt-3 fw-semibold text-small">
              Continue with Email
            </button>
            <div className="divider or mb-4">
              <hr className="hrLeft" />
              or
              <hr className="hrRight" />
            </div>
            {/*For loging in the website using google account*/}
            <button className="btn btn-primary w-100 mb-4 fw-semibold google text-small">
              <FcGoogle className="googleSvg" />
              Continue with Google
            </button>
            <br></br>
            {/*For loging in the website using apple account*/}
            <button className="btn btn-outline-dark w-100 mb-5 fw-semibold d-flex justify-content-center align-items-center text-small">
              <FaApple className="me-1" />
              Continue with Apple
            </button>
            <div className="divider acc">
              {/* If the user doesn`t have an account` */}
              <hr className="hrLeft text-small" />
              <a href="#">Don`t have a Bookshouse account?</a>
              <hr className="hrRight" />
            </div>
            {/* SignUp button that will be disabled if the form is not valid */}
            <button
              className="btn btn-outline-dark mt-4 mb-4 fw-semibold text-small signUp "
              disabled={isDisabled}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
