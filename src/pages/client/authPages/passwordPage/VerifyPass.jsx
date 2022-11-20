import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaLock } from "react-icons/fa";
import { GoEye } from "react-icons/go";
import { BsEyeSlash } from "react-icons/bs";
import "./PasswordPage.css";
import validator from "validator";
// import AuthFooter from "../AuthFooter/AuthFooter";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useVerifyEmailMutation } from "../../../../services/authApi";

export default function VerifyPass() {
  //The state of the error message
  const [equalPass, setEqualPass] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [displayPassErrMsg, setDisplayPassErrMsg] = useState("");
  const [displayRePassErrMsg, setDisplayRePassErrMsg] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const [verifyEmail, { isLoading, isError, error, isSuccess, data }] =
    useVerifyEmailMutation();
  const myArr = [new Array(6).fill("")];
  const [otp, setOtp] = useState(...myArr);
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, i) => (i === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message, {
        position: "top-right",
      });
      navigate("/auth/login");
    }
    if (isError) {
      if (Array.isArray(error.data)) {
        error.data.error.forEach((el) =>
          toast.error(el.message, {
            position: "top-right",
          })
        );
      } else {
        toast.error(error.data.message, {
          position: "top-right",
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);
  const validOTPLength = otp.join("").length == 6;
  useEffect(() => {
    if (validOTPLength && repassRef && equalValues) {
      setEqualPass(true);
      setIsDisabled(false);
    } else {
      setEqualPass(false);
      setIsDisabled(true);
    }
  }, [validOTPLength]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validOTPLength) {
      verifyEmail(otp.join(""));
    } else {
      toast.error("Enter a valid OTP", {
        position: "top-right",
      });
    }
  };
  const passRef = useRef(null);
  const repassRef = useRef(null);
  const equalValues = passRef?.current?.value === repassRef?.current?.value;

  const validatePass = (event) => {
    const value = event.target.value;

    if (validator.isStrongPassword(value)) {
      // if the email or username is valid
      setDisplayPassErrMsg("Strong Password ✔");
    } else {
      // if the email or username is invalid
      setDisplayPassErrMsg(
        "Password should contain at least 8 characters with 1 special 1 uppercase 1 lowercase and 1 numeric!"
      );
    }
  };
  const validateRePass = (event) => {
    if (equalValues) {
      setDisplayRePassErrMsg("Matched Password ✔");
    } else {
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
      <div className="main mt-3">
        <div className="centeredElement shadow-lg p-3 mb-2 bg-body">
          <div className="auth">
            <p className="h4 my-5 text-center">Check Your Email</p>
            <div className="row">
              <p className="h4">Enter The OTP sent to your Email.</p>
              <div className="col d-flex flex-row text-center " method="post">
                {otp.map((data, index) => (
                  <input
                    className="text-center fw-bold m-1 w-25 h-100 p-2 "
                    key={index}
                    value={data}
                    name="otp"
                    onChange={(e) => handleChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    type="text"
                    maxLength="1"
                  />
                ))}
              </div>
              <div className="mt-4 text-center">
                <p>OTP Entered: {otp.join("")}</p>
                <div className="d-flex flex-row ">
                  <button
                    className="btn btn-secondary w-50 m-1"
                    type="button"
                    onClick={(e) => setOtp([...otp.map((v) => "")])}
                  >
                    Clear
                  </button>
                  <button
                    className="btn btn-primary w-50"
                    type="submit"
                    disabled={isDisabled}
                  >
                    Verify
                  </button>
                </div>
              </div>
            </div>

            <div className="divider acc mt-2">
              {/* If the user doesn`t have an account` */}
              <hr className="hrLeft text-small" />
              <Link to="/auth/verification">
                <a>
                  Didn't recieve OTP yet?
                  <span className="text-primary">Resend it</span>
                </a>
              </Link>
              <hr className="hrRight" />
            </div>

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
