import React, { useState, useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaApple, FaLock, FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import { BsEyeSlash } from "react-icons/bs";
import { GoEye } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import validator from "validator";
import "./Register.css";
import { useRegisterUserMutation } from "../../../../services/authApi";
import { toast } from "react-toastify";

export default function Register() {
  // The state of the error message
  const [nameValue, setNameValue] = useState("");
  const [showPass, setShowPass] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [nameErrMsg, setNameErrMessage] = useState("");
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [phoneErrMsg, setPhoneErrMsg] = useState("");
  const [passErrMsg, setPassErrMsg] = useState("");
  // The state of the button to be abled or disapled according to the validation

  const [isDisabled, setDisabled] = useState(true);
  const passRef = useRef();
  const navigate = useNavigate();

  const validateValues = (event) => {
    const value = event.target.value;
    // console.log(formValues);
    if (event.target.name === "name") {
      if (validator.isAlpha(value)) {
        setNameErrMessage(`Welcome ${value} 🥰`);
        setNameValue(value);
      } else {
        setNameValue("");
        setNameErrMessage("Please enter a valid name!");
      }
    }
    if (event.target.name === "password") {
      if (validator.isStrongPassword(value)) {
        // if the email or username is valid
        setPassErrMsg(`Strong Password 💪`);
        setPassValue(value);
      } else {
        setPassValue("");
        setPassErrMsg(
          "Password should contain at least 8 characters with 1 special 1 uppercase 1 lowercase and 1 numeric!"
        );
      }
    }
    // if the email or username is invalid
    if (event.target.name === "email") {
      if (validator.isEmail(value)) {
        setEmailErrMsg("Accepted Email ✔");
        setEmailValue(value);
      } else {
        setEmailErrMsg("Please enter a valid Email!");
        setEmailValue("");
      }
    }
    if (event.target.name === "phone") {
      if (validator.isMobilePhone(value)) {
        setPhoneErrMsg("Accepted Mobile Phone ✔");
        setPhoneValue(value);
      } else {
        setPhoneValue("");
        setPhoneErrMsg("Please enter a valid phone number!");
        // setDisabled(true);
      }
    }
  };
  const [registerUser, { isError, isSuccess, error, isLoading }] =
    useRegisterUserMutation();
  useEffect(() => {
    const validData = passValue && emailValue && phoneValue && nameValue;
    if (validData) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [passValue, emailValue, phoneValue, phoneValue]);
  useEffect(() => {
    if (isSuccess) {
      toast.success("User registered successfully");
      navigate("/auth/verification");
    }

    if (isError) {
      console.log(error);
      if (Array.isArray(error.data)) {
        error.data.error.forEach((el) =>
          toast.error(el.message, {
            position: "top-right",
          })
        );
      } else {
        toast.error(error, {
          position: "top-right",
        });
      }
    }
  }, [isLoading]);
  const handleSubmit = (e) => {
    e.preventDefault();

    registerUser({
      name: nameValue,
      email: emailValue,
      password: passValue,
      phone: phoneValue,
    });
    console.log("submit");
  };
  const showPassword = () => {
    setShowPass((prevState) => !prevState);
    if (passRef.current.type === "password") {
      passRef.current.type = "text";
    } else {
      passRef.current.type = "password";
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <div className="main">
        <div className="centeredElement shadow-lg p-3 mb-2 bg-body ">
          <div className="auth">
            <h5 className="my-5">Sign up to Bookshouse</h5>
            <div className="mb-5">
              {/* if the user clicked outside the input the status of the error message will appear */}
              <InputGroup className="userInput">
                {/* user icon */}
                <InputGroup.Text id="basic-addon1" className="invalid">
                  <FaUserAlt />
                </InputGroup.Text>
                {/* username or email input */}
                <Form.Control
                  name="name"
                  onChange={(e) => validateValues(e)}
                  aria-label="name Input"
                  placeholder="Name"
                  style={{
                    borderLeft: nameErrMsg.includes("Welcome")
                      ? "4px solid green"
                      : nameErrMsg === ""
                      ? "none"
                      : "5px solid red",
                    boxShadow: "none",
                  }}
                />
              </InputGroup>
              {/* for displaying the status of the input */}
              {nameErrMsg && (
                <Form.Text
                  className="errorMsg h2 float-start fw-semibold"
                  style={{
                    color: nameErrMsg.includes("Welcome") ? "green" : "#d21313",
                  }}
                >
                  {nameErrMsg}
                </Form.Text>
              )}
            </div>
            <div className="mb-5">
              {/* if the user clicked outside the input the status of the error message will appear */}
              <InputGroup className="userInput">
                {/* user icon */}
                <InputGroup.Text id="basic-addon1" className="invalid">
                  <MdEmail />
                </InputGroup.Text>
                {/* username or email input */}
                <Form.Control
                  name="email"
                  onChange={(e) => validateValues(e)}
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
              {emailErrMsg && (
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
              <InputGroup className="userInput">
                {/* user icon */}
                <InputGroup.Text id="basic-addon1" className="invalid">
                  <FaPhoneAlt />
                </InputGroup.Text>
                {/* username or email input */}
                <Form.Control
                  name="phone"
                  type="number"
                  onChange={(e) => validateValues(e)}
                  aria-label="Phone Input"
                  placeholder="Mobile number"
                  style={{
                    borderLeft:
                      phoneErrMsg === "Accepted Mobile Phone ✔"
                        ? "4px solid green"
                        : phoneErrMsg === ""
                        ? "none"
                        : "5px solid red",
                    boxShadow: "none",
                  }}
                />
              </InputGroup>
              {/* for displaying the status of the input */}
              {phoneErrMsg && (
                <Form.Text
                  className="errorMsg text-small float-start fw-semibold"
                  style={{
                    color:
                      phoneErrMsg === "Accepted Mobile Phone ✔"
                        ? "green"
                        : "#d21313",
                  }}
                >
                  {phoneErrMsg}
                </Form.Text>
              )}
            </div>

            <div className="mb-5">
              {/* if the user clicked outside the input the status of the error message will appear */}
              <InputGroup className="userInput mb-2">
                {/* password icon */}
                <InputGroup.Text id="basic-addon2">
                  <FaLock />
                </InputGroup.Text>
                {/* Password input */}
                <Form.Control
                  type="password"
                  name="password"
                  ref={passRef}
                  onChange={(e) => validateValues(e)}
                  aria-label="Password Input"
                  placeholder="Password"
                  style={{
                    borderLeft:
                      passErrMsg === "Strong Password 💪"
                        ? "4px solid green"
                        : passErrMsg === ""
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
              {/* for displaying the status of the input */}
              {passErrMsg && (
                <Form.Text
                  className="errorMsg text-small float-start fw-semibold"
                  style={{
                    color:
                      passErrMsg === "Strong Password 💪" ? "green" : "#d21313",
                  }}
                >
                  {passErrMsg}
                </Form.Text>
              )}
            </div>
            {/*For loging in the website using email*/}

            <button
              className="btn btn-dark w-100 mb-4 mt-2 fw-semibold text-small"
              disabled={isDisabled}
              type="submit"
            >
              Sign up
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
            <button className="btn btn-outline-dark w-100 fw-semibold d-flex justify-content-center align-items-center text-small">
              <FaApple className="me-1" />
              Continue with Apple
            </button>
            <div className="divider acc mt-5">
              {/* If the user doesn`t have an account` */}
              <hr className="hrLeft text-small" />
              <Link to="/auth/signup">
                <a>Don`t have a Bookshouse account?</a>
              </Link>
              <hr className="hrRight" />
            </div>
            {/* SignUp button that will be disabled if the form is not valid */}
            <button
              className="btn btn-outline-dark mt-4 mb-4 fw-semibold text-small signUp "
              // onClick={signupHandler}
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </Form>
  );
}
