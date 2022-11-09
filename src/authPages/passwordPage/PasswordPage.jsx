import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaLock } from "react-icons/fa";
import "./PasswordPage.css";
import validator from "validator";
import AuthFooter from "../AuthFooter/AuthFooter";

export default function PasswordPage() {
  //The state of the error message
  const [errorMessage, setErrorMessage] = useState("");
  // The state of the button to be abled or disapled according to the validation
  const [isDisabled, setDisabled] = useState(true);
  // for displaying the error message if the input is invalid
  const [displayErrorMsg, setDisplayErrorMsg] = useState(true);
  // npm validator to validate the password
  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      // if the password is valid
      setErrorMessage("Accepted password enjoy reading :)");
      setDisabled(false);
    } else {
      // if the password is invalid
      setErrorMessage("Week password");
    }
  };
  // function changes the state of displaying the error message
  const onDisplayErrorMsg = () => {
    setDisplayErrorMsg(false);
  };
  return (
    <>
      <div className="main">
        <div className="centeredElement">
          <div className="auth">
            <h4 className="my-4">Welcome</h4>
            <p className="text-small">placeholder@gmail.com</p>
            <div className="mb-5">
              {/* if the user clicked outside the input the status of the error message will appear */}
              <InputGroup className="userInput mb-2" onBlur={onDisplayErrorMsg}>
                {/* password icon */}
                <InputGroup.Text id="basic-addon1">
                  <FaLock />
                </InputGroup.Text>
                {/* Password input */}
                <Form.Control
                  type="password"
                  name="password"
                  onChange={(e) => validate(e.target.value)}
                  aria-label="Text input with checkbox"
                  placeholder="Password"
                  style={{ borderLeft: "none", boxShadow: "none" }}
                />
              </InputGroup>
              {/* for displaying the status of the input */}
              {displayErrorMsg || (
                <Form.Text
                  className="errorMsg text-small float-start fw-semibold"
                  style={{
                    color:
                      errorMessage === "Accepted password enjoy reading :)"
                        ? "green"
                        : "#d21313",
                  }}
                >
                  {errorMessage}
                </Form.Text>
              )}
            </div>
            {/* for checking if the user want the website keep him loggedin or not */}
            <Form className=" form fw-semibold text-small ">
              <div key="inline-checkbox " className="checkbox mb-3 d-inline">
                <Form.Check
                  inline
                  name="group1"
                  type="checkbox"
                  id="inline-checkbox"
                />
                <label>Keep me logged in</label>
              </div>
              {/* For navigating the user to change password page */}
              <a className="forgetPassword" href="#">
                Forget password?
              </a>
            </Form>
            {/* Login button that will be disabled if the form is not valid */}
            <button
              className="btn btn-dark mt-4 mb-2 fw-semibold logIn text-small"
              disabled={isDisabled}
            >
              Log in
            </button>
            <br></br>

            <a className="notYou text-dark fw-semibold text-small" href="#">
              Not you?
            </a>
          </div>
        </div>
      </div>
      <AuthFooter />
    </>
  );
}
