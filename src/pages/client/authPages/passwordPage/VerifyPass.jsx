import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaLock } from "react-icons/fa";
import { object, string, TypeOf } from "zod";

import { LoadingButton as _LoadingButton } from "@mui/lab";
import { GoEye } from "react-icons/go";
import { BsEyeSlash } from "react-icons/bs";
import "./PasswordPage.css";
import validator from "validator";
// import AuthFooter from "../AuthFooter/AuthFooter";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useVerifyEmailMutation } from "../../../../services/authApi";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { styled } from "@mui/material/styles";




const LoadingButton = styled(_LoadingButton)`
padding: 0.6rem 0;
background-color: #212529;
color: #fff;
font-weight: 500;
border-radius: 50px;

&:hover {
  background-color: #000000;
  transform: translateY(-1px);
}
`;

export default function VerifyPass() {
  //The state of the error message
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();

  const myArr = [new Array(6).fill("")];
  const [otp, setOtp] = useState(...myArr);
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, i) => (i === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };
  // const validOTPLength = (num)=>{num.join("").length == 6;} 

  const validOTPLength =otp.join("").length == 6;

const passwordSchema = object ({
  password: string()
  .regex(
    new RegExp("(?=.*[0-9])"),
    "Password must have at least one numeric character!"
  )
  .regex(
    new RegExp("(?=.*[!@#$%^&*])"),
    "Password must have at least one special character!"
  )
  .regex(
    new RegExp("(?=.*[A-Z])"),
    "Password must have at least one uppercase character!"
  )
  .regex(
    new RegExp("(?=.*[a-z])"),
    "Password must have at least one lowercase character!"
  )
  .min(1, "Password is required")
  .min(8, "Password must be more than 8 characters")
  .max(32, "Password must be less than 32 characters"),
passwordConfirm: string().min(1, "Please confirm your password"),

}).refine((data) => data.password === data.passwordConfirm, {
path: ["passwordConfirm"],
message: "Passwords do not match",

})
const methods = useForm({
  reValidateMode: "onSubmit",
  resolver: zodResolver(passwordSchema),
});

const {
  reset,
  handleSubmit,
  register,

  formState: { isSubmitSuccessful, errors },
} = methods;

const deletePasswords= (e) => {
  setOtp([...otp.map((v) => "")])
  reset();
}

useEffect(() => {
  if (isSubmitSuccessful) {
    reset();
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [isSubmitSuccessful]);

useEffect(()=>{
if(validOTPLength){
  setIsDisabled(false)
}
else{setIsDisabled(true)}
},[validOTPLength])

const onSubmitHandler = (values) => {
  // ? Executing the RegisterUser Mutation
  // registerUser(values);
  console.log({...values, otp:otp.join("")})
  

};

  // const [verifyEmail, { isLoading, isError, error, isSuccess, data }] =
  //   useVerifyEmailMutation();




  // useEffect(() => {
  //   if (isSuccess) {
  //     toast.success(data?.message, {
  //       position: "top-right",
  //     });
  //     navigate("/auth/login");
  //   }
  //   if (isError) {
  //     if (Array.isArray(error.data)) {
  //       error.data.error.forEach((el) =>
  //         toast.error(el.message, {
  //           position: "top-right",
  //         })
  //       );
  //     } else {
  //       toast.error(error.data.message, {
  //         position: "top-right",
  //       });
  //     }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isLoading]);
  // const validOTPLength = otp.join("").length == 6;
  // useEffect(() => {
  //   if (validOTPLength && repassRef && equalValues) {
  //     setEqualPass(true);
  //     setIsDisabled(false);
  //   } else {
  //     setEqualPass(false);
  //     setIsDisabled(true);
  //   }
  // }, [validOTPLength]);



  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validOTPLength) {
  //     verifyEmail(otp.join(""));
  //   } else {
  //     toast.error("Enter a valid OTP", {
  //       position: "top-right",
  //     });
  //   }
  // };





  // const passRef = useRef(null);
  // const repassRef = useRef(null);
  // const equalValues = passRef?.current?.value === repassRef?.current?.value;

  // const validatePass = (event) => {
  //   const value = event.target.value;

  //   if (validator.isStrongPassword(value)) {
  //     // if the email or username is valid
  //     setDisplayPassErrMsg("Strong Password ✔");
  //   } else {
  //     // if the email or username is invalid
  //     setDisplayPassErrMsg(
  //       "Password should contain at least 8 characters with 1 special 1 uppercase 1 lowercase and 1 numeric!"
  //     );
  //   }
  // };
  // const validateRePass = (event) => {
  //   if (equalValues) {
  //     setDisplayRePassErrMsg("Matched Password ✔");
  //   } else {
  //     setDisplayRePassErrMsg("Unmatched Passwords!");
  //   }
  // };
  // const showPassword = () => {
  //   setShowPass((prevState) => !prevState);
  //   if (passRef.current.type === "password") {
  //     passRef.current.type = "text";
  //     repassRef.current.type = "text";
  //   } else {
  //     passRef.current.type = "password";
  //     repassRef.current.type = "password";
  //   }
  // };

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


                 {/* if the user clicked outside the input the status of the error message will appear */}
          <FormProvider {...methods}>
            <Form onSubmit={handleSubmit(onSubmitHandler)}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <InputGroup className="userInput mb-2">
                  <InputGroup.Text id="basic-addon2">
                    <FaLock />
                  </InputGroup.Text>
                  <Form.Control
                    type="password"
                    {...register("password")}
                    name="password"
                    aria-label="Password Input"
                    placeholder="Password"
                  />
                </InputGroup>
                {errors.password && (
                  <Form.Text className="text-danger">
                    {errors.password.message}
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <InputGroup className="userInput mb-2">
                  <InputGroup.Text id="basic-addon2">
                    <FaLock />
                  </InputGroup.Text>
                  <Form.Control
                    type="password"
                    {...register("passwordConfirm")}
                    name="passwordConfirm"
                    aria-label="Confirm Password"
                    placeholder="Confirm Password"
                  />
                </InputGroup>
                {errors.passwordConfirm && (
                  <Form.Text className="text-danger">
                    {errors.passwordConfirm.message}
                  </Form.Text>
                )}
              </Form.Group>
              <div className="d-flex flex-row ">

                  <button
                    className="btn btn-secondary w-50 m-1"
                    type="button"
                    onClick={deletePasswords}
                  >
                    Clear
                  </button>
                  <button
                    className="btn btn-primary w-50"
                    type="submit"
                    disabled={isDisabled}
                    // onClick={submitMyInputs}
                  >
                    Verify
                  </button>
                </div>
            </Form>
          </FormProvider>
                
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

            

            

          </div>
        </div>
      </div>
    </>
  );
}
