import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaApple, FaLock, FaUserAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import validator from "validator";
import { OTPBox } from "../otp/OtpPage";
import "./Verification.css";

export default function Verification() {
  //The state of the error message
  // const [passErrMsg, setPassErrMessage] = useState("");
  // const [emailErrMsg, setEmailErrMsg] = useState("");
  // // The state of the button to be abled or disapled according to the validation
  // const [isDisabled, setDisabled] = useState(true);
  // // for displaying the error message if the input is invalid
  // const [displayEmailErrorMsg, setDisplayEmailErrorMsg] = useState(false);
  // const [displayPassErrorMsg, setDisplayPassErrorMsg] = useState(false);
  // // npm validator to validate the password
  // const navigate = useNavigate();

  // const validateEmail = (value) => {
  //   if (validator.isEmpty(value)) {
  //     // if the email or username is empty
  //     setEmailErrMsg("Email is required");
  //     setDisabled(true);
  //   }
  //   if (validator.isEmail(value)) {
  //     // if the email or username is valid
  //     setEmailErrMsg("Accepted Email ✔");
  //     setDisabled(false);
  //   } else {
  //     // if the email or username is invalid
  //     setEmailErrMsg("Please enter a valid Email!");
  //     setDisabled(true);
  //   }
  // };
  // const validatePass = (value) => {
  //   if (validator.isEmpty(value)) {
  //     // if the email or username is empty
  //     setPassErrMessage("Password is required");
  //     setDisabled(true);
  //   }
  //   if (validator.isStrongPassword(value)) {
  //     // if the email or username is valid
  //     setPassErrMessage("Strong Password ✔");
  //     setDisabled(false);
  //   } else {
  //     // if the email or username is invalid
  //     setPassErrMessage(
  //       "Password should contain at least 8 characters with 1 special 1 uppercase 1 lowercase and 1 numeric!"
  //     );
  //     setDisabled(true);
  //   }
  // };
  // function changes the state of displaying the error message
  // const onDisplayErrorMsg = (e) => {
  //   console.log(e.target.value);
  //   if (e.target.name == "password") {
  //     setDisplayPassErrorMsg(true);
  //   } else if (e.target.name == "email") {
  //     setDisplayEmailErrorMsg(true);
  //   }
  // };
  // const handleSubmit = async (e) => {
  //   e.prevent.default();
  // };
  // const signupHandler = () => {
  //   navigate("/auth/signup");
  // };
  const myArr = [new Array(6).fill("")];
  const [otp, setOtp] = useState(...myArr);
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, i) => (i === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(otp.join(""));
  };
  // const handleVerification = (e) => {
  //   // e.preventDefault();

  //   console.log("Your OTP is ");
  // };
  return (
    <Form className="mt-5 " onSubmit={handleSubmit}>
      <div className="main">
        <div className="centeredElement shadow-lg p-3 mb-5 bg-body ">
          <div className="auth ">
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
                    onClick={(e) => setOtp([...otp.map((v) => "")])}
                  >
                    Clear
                  </button>
                  <button className="btn btn-primary w-50" type="submit">
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
                  Didn't recieve OTP yet?{" "}
                  <span className="text-primary">Resend it</span>
                </a>
              </Link>
              <hr className="hrRight" />
            </div>
            {/* if the user clicked outside the input the status of the error message will appear */}

            {/* for displaying the status of the input */}
            {/* {displayPassErrorMsg && (
                <Form.Text
                  className="errorMsg text-small float-start fw-semibold"
                  style={{
                    color:
                      passErrMsg === "Strong Password ✔" ? "green" : "#d21313",
                  }}
                >
                  {passErrMsg}
                </Form.Text>
              )} */}
          </div>
          {/*For loging in the website using email*/}
        </div>
      </div>
    </Form>
  );
}
