import { React, useState } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaUserAlt } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc'
import validator from 'validator';
import "./Login.css"

export default function Login() {
  //The state of the error message
  const [errorMessage, setErrorMessage] = useState('');
  // The state of the button to be abled or disapled according to the validation
  const [isDisabled, setDisabled] = useState(true);
  // for displaying the error message if the input is invalid
  const [displayErrorMsg, setDisplayErrorMsg] = useState(true);
  // npm validator to validate the password
  const validate = (value) => {

    if (validator.isEmpty(value)) {
      // if the email or username is empty
      setErrorMessage('This field is required')
      setDisabled(true)
    }
    if (validator.isEmail(value) || validator.isAlpha(value, 'en-US')) {
      // if the email or username is valid
      setErrorMessage('Accepted input enjoy :)')
      setDisabled(false)
    }
    else {
      // if the email or username is invalid
      setErrorMessage('Please enter a valid user name or password')
      setDisabled(true)
    }
  }
  // function changes the state of displaying the error message
  const onDisplayErrorMsg = () => {
    setDisplayErrorMsg(false)
  }


  return (
    <>
      <div className="main">
        <div className="centeredElement">
          <div className="auth">
            <h5 className="my-5">Log in to Bookshouse</h5>
            <div className="mb-5">
              {/* if the user clicked outside the input the status of the error message will appear */}
              <InputGroup className="userInput" onBlur={onDisplayErrorMsg}>
                {/* user icon */}
                <InputGroup.Text id="basic-addon1"><FaUserAlt /></InputGroup.Text>
                {/* username or email input */}
                <Form.Control name="userName" onChange={(e) => validate(e.target.value)} aria-label="Text input with checkbox" placeholder="Username or Email" style={{ borderLeft: 'none', boxShadow: 'none' }} />
              </InputGroup>
              {/* for displaying the status of the input */}
              {displayErrorMsg || (<Form.Text className='errorMsg text-small float-start fw-semibold' style={{ color: errorMessage === "Accepted input enjoy :)" ? "green" : "#d21313" }}>
                {errorMessage}
              </Form.Text>)}
            </div>
            {/*For loging in the website using email*/}
            <button className="btn btn-dark w-100 mb-4 fw-semibold text-small">Continue with Email</button>
            <div className="divider or mb-4">
              <hr className="hrLeft" />or<hr className="hrRight" />
            </div>
            {/*For loging in the website using google account*/}
            <button className="btn btn-primary w-100 mb-4 fw-semibold google text-small">
             <FcGoogle className="googleSvg"/>
              Continue with Google</button>
            <br></br>
            {/*For loging in the website using apple account*/}
            <button className="btn btn-outline-dark w-100 mb-5 fw-semibold d-flex justify-content-center align-items-center text-small"><FaApple className="me-1" />Continue with Apple</button>
            <div className="divider acc">
              {/* If the user doesn`t have an account` */}
              <hr className="hrLeft text-small" /><a href="#">Don`t have a Bookshouse account?</a><hr className="hrRight" />
            </div>
            {/* SignUp button that will be disabled if the form is not valid */}
            <button className="btn btn-outline-dark mt-4 mb-4 fw-semibold text-small signUp " disabled={isDisabled}>Sign Up</button>

          </div>
        </div>
      </div>
      
    </>
  )
}
