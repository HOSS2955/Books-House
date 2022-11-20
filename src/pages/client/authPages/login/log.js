// import React, { useState, useEffect } from "react";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import { FaApple, FaLock, FaUserAlt } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import validator from "validator";
// import { useDispatch } from "react-redux";
// import "./Login.css";
// import ProtectedComponent from "../../../../features/ProtectedComponent";
// import { useLoginUserMutation } from "../../../../services/authApi";
// import { toast } from "react-toastify";

// export default function Login2() {
//   //The state of the error message
//   const [passErrMsg, setPassErrMessage] = useState("");
//   const [emailErrMsg, setEmailErrMsg] = useState("");
//   // The state of the button to be abled or disapled according to the validation
//   const [isDisabled, setDisabled] = useState(false);
//   // for displaying the error message if the input is invalid
//   const [emailValue, setEmailValue] = useState("");
//   const [passValue, setPassValue] = useState("");
//   // npm validator to validate the password
//   const navigate = useNavigate();

//   const validateEmail = (value) => {
//     // if (validator.isEmpty(value)) {
//     //   // if the email or username is empty
//     //   setEmailErrMsg("Email is required");
//     //   setDisabled(true);
//     // }
//     if (validator.isEmail(value)) {
//       // if the email or username is valid
//       setEmailErrMsg("Accepted Email ✔");
//       setEmailValue(value);
//     } else {
//       // if the email or username is invalid
//       setEmailErrMsg("Please enter a valid Email!");
//     }
//   };
//   const validatePass = (value) => {
//     // if (validator.isEmpty(value)) {
//     //   // if the email or username is empty
//     //   setPassErrMessage("Password is required");
//     //   setDisabled(true);
//     // }
//     if (validator.isStrongPassword(value)) {
//       // if the email or username is valid
//       setPassErrMessage("Strong Password ✔");
//       setPassValue(value);
//     } else {
//       // if the email or username is invalid
//       setPassErrMessage(
//         "Password should contain at least 8 characters with 1 special 1 uppercase 1 lowercase and 1 numeric!"
//       );
//     }
//   };
//   useEffect(() => {
//     if (
//       validator.isStrongPassword(passValue) &&
//       validator.isEmail(emailValue)
//     ) {
//       setDisabled(false);
//     } else {
//       setDisabled(true);
//     }
//   }, [emailValue, passValue]);

//   const location = useLocation();
//   const fromLocation = location.store?.from.pathname || "/profile";

//   const [loginUser, { isLoading, isError, error, isSuccess }] =
//     useLoginUserMutation();

//   useEffect(() => {
//     if (isSuccess) {
//       toast.success("User registered successfully");
//       navigate("/admin");
//     }

//     if (isError) {
//       console.log(error);
//       if (Array.isArray(error.data)) {
//         error.data.error.forEach((el) =>
//           toast.error(el.message, {
//             position: "top-right",
//           })
//         );
//       } else {
//         toast.error(error, {
//           position: "top-right",
//         });
//       }
//     }
//   }, [isLoading]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (
//       validator.isStrongPassword(passValue) &&
//       validator.isEmail(emailValue)
//     ) {
//       loginUser({
//         email: emailValue,
//         password: passValue,
//       });
//     } else {
//       toast.error("Please, Provide Data as required first!", {
//         position: "top-right",
//       });
//     }
//   };
//   const signupHandler = () => {
//     navigate("/auth/signup");
//   };
//   return (
//     <Form>
//       <div className="main">
//         <div className="centeredElement shadow-lg  bg-body">
//           <div className="auth">
//             <h5 className="my-5">Log in to Bookshouse</h5>
//             <div className="mb-5">
//               {/* if the user clicked outside the input the status of the error message will appear */}
//               <InputGroup className="userInput">
//                 {/* user icon */}
//                 <InputGroup.Text id="basic-addon1" className="invalid">
//                   <FaUserAlt />
//                 </InputGroup.Text>
//                 {/* username or email input */}
//                 <Form.Control
//                   name="email"
//                   // onBlur={onDisplayErrorMsg}
//                   onChange={(e) => validateEmail(e.target.value)}
//                   aria-label="Email Input"
//                   placeholder="Email"
//                   style={{
//                     borderLeft:
//                       emailErrMsg === "Accepted Email ✔"
//                         ? "4px solid green"
//                         : emailErrMsg === ""
//                         ? "none"
//                         : "5px solid red",
//                     boxShadow: "none",
//                   }}
//                 />
//               </InputGroup>
//               {/* for displaying the status of the input */}
//               {emailErrMsg && (
//                 <Form.Text
//                   className="errorMsg text-small float-start fw-semibold"
//                   style={{
//                     color:
//                       emailErrMsg === "Accepted Email ✔" ? "green" : "#d21313",
//                   }}
//                 >
//                   {emailErrMsg}
//                 </Form.Text>
//               )}
//             </div>
//             <div className="mb-5">
//               {/* if the user clicked outside the input the status of the error message will appear */}
//               <InputGroup className="userInput mb-2">
//                 {/* password icon */}
//                 <InputGroup.Text id="basic-addon2">
//                   <FaLock />
//                 </InputGroup.Text>
//                 {/* Password input */}
//                 <Form.Control
//                   type="password"
//                   name="password"
//                   onChange={(e) => validatePass(e.target.value)}
//                   aria-label="Password Input"
//                   placeholder="Password"
//                   style={{
//                     borderLeft:
//                       passErrMsg === "Strong Password ✔"
//                         ? "4px solid green"
//                         : passErrMsg === ""
//                         ? "none"
//                         : "5px solid red",
//                     boxShadow: "none",
//                   }}
//                 />
//               </InputGroup>
//               {/* for displaying the status of the input */}
//               {passErrMsg && (
//                 <Form.Text
//                   className="errorMsg text-small float-start fw-semibold"
//                   style={{
//                     color:
//                       passErrMsg === "Strong Password ✔" ? "green" : "#d21313",
//                   }}
//                 >
//                   {passErrMsg}
//                 </Form.Text>
//               )}
//             </div>
//             {/*For loging in the website using email*/}
//             {isLoading ? <h2>Esbor shwya!</h2> : ""}
//             <button
//               className="btn btn-dark w-100 mb-4 mt-2 fw-semibold text-small"
//               disabled={isDisabled}
//               onClick={handleSubmit}

//               // type="submit"
//             >
//               Log In
//             </button>
//             <div className="divider or mb-4">
//               <hr className="hrLeft" />
//               or
//               <hr className="hrRight" />
//             </div>
//             {/*For loging in the website using google account*/}
//             <button className="btn btn-primary w-100 mb-4 fw-semibold google text-small">
//               <FcGoogle className="googleSvg" />
//               Continue with Google
//             </button>
//             <br></br>
//             {/*For loging in the website using apple account*/}
//             <button className="btn btn-outline-dark w-100 fw-semibold d-flex justify-content-center align-items-center text-small">
//               <FaApple className="me-1" />
//               Continue with Apple
//             </button>
//             <div className="divider acc mt-5">
//               {/* If the user doesn`t have an account` */}
//               <hr className="hrLeft text-small" />
//               <Link to="/auth/signup">
//                 <a>Don`t have a Bookshouse account?</a>
//               </Link>
//               <hr className="hrRight" />
//             </div>
//             {/* SignUp button that will be disabled if the form is not valid */}
//             <button
//               className="btn btn-outline-dark mt-4 mb-4 fw-semibold text-small signUp "
//               onClick={signupHandler}
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//     </Form>
//   );
// }
