// import React from "react";
// import { useRef, useState, useEffect } from "react";
// import {
//   faCheck,
//   faTimes,
//   faInfoCircle,
// } from "@fortawesome/free-solid-svg-icons";
// import "./form.css";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import UserInputs from "../../Hooks/userInputs";

// const USER_REGEX = /^[a-zA-Z]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

// function Register() {
//   let formIsValid = false;
//   const {
//     value: nameInput,
//     isTouched: nameTouched,
//     isValid: enteredNameIsValid,
//     hasErr: nameInputHasError,
//     valueChangeHandler: nameChangeHandller,
//     inputBlurHandler: nameBlurHandler,
//     inputFocusHandler: nameFocusHandler,
//     reset: resetNameHandler,
//   } = UserInputs((value) => USER_REGEX.test(value));
//   const {
//     value: emailInput,
//     isTouched: emailTouched,
//     isValid: enteredEmailIsValid,
//     hasErr: emailInputHasError,
//     valueChangeHandler: emailChangeHandler,
//     inputBlurHandler: emailBlurHandler,
//     inputFocusHandler: emailFocusHandler,
//     reset: resetEmailHandler,
//   } = UserInputs((value) => value.includes("@"));
//   if (enteredNameIsValid && enteredEmailIsValid) {
//     formIsValid = true;
//   }
//   const nameInputClasses = nameInputHasError
//     ? "form-control invalid"
//     : "form-control";
//   const emailInputClasses = emailInputHasError
//     ? "form-control invalid"
//     : "form-control";
//   const submitFormHandler = (event) => {
//     event.preventDefault();
//     if (!formIsValid) {
//       return;
//     }
//     resetNameHandler();
//     resetEmailHandler();
//   };
//   return (
//     <Form onSubmit={submitFormHandler}>
//       <Form.Group className={` mb-3`} controlId="formBasicName">
//         <Form.Label>Full Name</Form.Label>
//         <Form.Control
//           required
//           onChange={nameChangeHandller}
//           onBlur={nameBlurHandler}
//           onFocus={nameFocusHandler}
//           type="text"
//           placeholder="Enter Full Name"
//         />
//         {nameInputHasError && (
//           <Form.Text className="text-danger">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         )}
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//           onChange={emailChangeHandler}
//           onBlur={emailBlurHandler}
//           onFocus={emailFocusHandler}
//           type="email"
//           placeholder="Enter email"
//         />
//         {emailInputHasError && (
//           <Form.Text className="alert ">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         )}
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button
//         variant="primary"
//         type="submit"
//         disabled={formIsValid ? true : false}
//       >
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default Register;
