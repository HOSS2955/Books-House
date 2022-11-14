import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaLock } from "react-icons/fa";
import { GoEye } from "react-icons/go";
import { BsEyeSlash } from "react-icons/bs";
import "./PasswordPage.css";
import validator from "validator";
import AuthFooter from "../AuthFooter/AuthFooter";

import { useNavigate } from "react-router-dom";
export default function PasswordPage() {
  //The state of the error message
  const [equalPass, setEqualPass] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [isDisabled, setDisabled] = useState(true);
  const [displayPassErrMsg, setDisplayPassErrMsg] = useState("");
  const [displayRePassErrMsg, setDisplayRePassErrMsg] = useState("");
  // npm validator to validate the password
  const navigate = useNavigate();
  const passRef = useRef(null);
  const repassRef = useRef(null);
  const equalValues = passRef?.current?.value === repassRef?.current?.value;
  const checkEqual = () => {
    if (repassRef && equalValues) {
      setEqualPass(true);
      setDisabled(false);
    } else {
      setEqualPass(false);
      setDisabled(true);
    }
  };
  const validatePass = (event) => {
    const value = event.target.value;

    if (validator.isStrongPassword(value)) {
      // if the email or username is valid
      setDisplayPassErrMsg("Strong Password ✔");
      checkEqual();
    } else {
      // if the email or username is invalid
      setDisplayPassErrMsg(
        "Password should contain at least 8 characters with 1 special 1 uppercase 1 lowercase and 1 numeric!"
      );
      checkEqual();
    }
  };
  const validateRePass = (event) => {
    if (equalValues) {
      setDisplayRePassErrMsg("Matched Password ✔");
      checkEqual();
    } else {
      checkEqual();

      setDisplayRePassErrMsg("Unmatched Passwords!");
    }
  };
  const showPassword = () => {
    setShowPass((prevState) => !prevState);
    if (passRef.current.type === "password") {
      passRef.current.type = "text";
      repassRef.current.type = "text";
    } else {
      passRef.current.type = "password";
      repassRef.current.type = "password";
    }
  };

  // const onDisplayErrorMsg = (e) => {
  //   console.log(e.target.value);
  //   if (e.target.name == "password") {
  //     setDisplayPassErrorMsg(true);
  //   } else if (e.target.name == "repass") {
  //     setDisplayEmailErrorMsg(true);
  //   }
  // };

  return (
    <>
      <div className="main">
        <div className="centeredElement shadow-lg p-3 mb-2 bg-body">
          <div className="auth">
            <h4 className="my-4">Forget Password</h4>
            <p className="text-small">placeholder@gmail.com</p>
            <div className="mb-5">
              <InputGroup className="userInput mb-2">
                <InputGroup.Text id="basic-addon2">
                  <FaLock />
                </InputGroup.Text>
                <Form.Control
                  ref={passRef}
                  type="password"
                  name="password"
                  // onBlur={(e) => onDisplayErrorMsg(e)}
                  onChange={(e) => validatePass(e)}
                  aria-label="Password Input"
                  placeholder="Password"
                  style={{
                    borderLeft:
                      displayPassErrMsg === "Strong Password ✔"
                        ? "4px solid green"
                        : displayPassErrMsg === ""
                        ? "none"
                        : "5px solid red",
                    boxShadow: "none",
                  }}
                />
                <InputGroup.Text
                  onClick={showPassword}
                  style={{ cursor: "pointer" }}
                >
                  {showPass ? <GoEye /> : <BsEyeSlash />}
                </InputGroup.Text>
              </InputGroup>
              {displayPassErrMsg && (
                <Form.Text
                  className="errorMsg text-small float-start fw-semibold"
                  style={{
                    color:
                      displayPassErrMsg === "Strong Password ✔"
                        ? "green"
                        : "#d21313",
                  }}
                >
                  {displayPassErrMsg}
                </Form.Text>
              )}
            </div>
            <div className="mb-5">
              {/* if the user clicked outside the input the status of the error message will appear */}
              <InputGroup className="userInput mb-2">
                {/* password icon */}
                <InputGroup.Text id="basic-addon1">
                  <FaLock />
                </InputGroup.Text>
                {/* Password input */}
                <Form.Control
                  type="password"
                  ref={repassRef}
                  name="repass"
                  onChange={(e) => validateRePass(e)}
                  onBlur={checkEqual}
                  aria-label="Text input with checkbox"
                  placeholder="Re-enter Password"
                  style={{ borderLeft: "none", boxShadow: "none" }}
                />
              </InputGroup>
              {/* for displaying the status of the input */}
              {displayRePassErrMsg && (
                <Form.Text
                  className="errorMsg text-small float-start fw-semibold"
                  style={{
                    color:
                      displayRePassErrMsg === "Matched Password ✔"
                        ? "green"
                        : "#d21313",
                  }}
                >
                  {displayRePassErrMsg}
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
              Reset Password
            </button>
            <br></br>

            <a className="notYou text-dark fw-semibold text-small" href="#">
              Not you?
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
