import React, { useState } from "react";
const UserInputs = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTocuhed] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const [hasErr, setHasErr] = useState(false);
  const USER_REGEX = /^[a-zA-Z]{3,23}$/;
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    if (isTouched && !validateValue(event.target.value)) {
      setHasErr(true);
    } else {
      setHasErr(false);
    }
  };
  const inputFocusHandler = (event) => {
    setIsTocuhed(true);
  };
  const inputBlurHandler = (event) => {
    if (isTouched && !validateValue(event.target.value)) {
      setHasErr(true);
    } else {
      setHasErr(false);
    }
  };
  const reset = () => {
    setEnteredValue("");
    setIsTocuhed(false);
  };

  return {
    value: enteredValue,
    isTouched,
    isValid: valueIsValid,
    hasErr,
    valueChangeHandler,
    inputBlurHandler,
    inputFocusHandler,
    reset,
  };
};
export default UserInputs;
