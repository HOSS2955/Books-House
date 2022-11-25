// import React, { useState } from "react";
// import "./OtpPage.css";
// export const OTPBox = () => {
//   const [otp, setOtp] = useState(new Array(6).fill(""));
//   const handleChange = (element, index) => {
//     if (isNaN(element.value)) return false;
//     setOtp([...otp.map((d, i) => (i === index ? element.value : d))]);
//     if (element.nextSibling) {
//       element.nextSibling.focus();
//     }
//   };
//   return (
//     <div className="row">
//       <p className="h4">Enter The OTP sent to your Email.</p>
//       <div className="col d-flex flex-row text-center ">
//         {otp.map((data, index) => (
//           <input
//             className="text-center fw-bold m-1 w-25 h-100 p-2 "
//             key={index}
//             value={data}
//             name="otp"
//             onChange={(e) => handleChange(e.target, index)}
//             onFocus={(e) => e.target.select()}
//             type="text"
//             maxLength="1"
//           />
//         ))}
//       </div>
//       <div className="mt-4 text-center">
//         <p>OTP Entered: {otp.join("")}</p>
//         <button
//           className="btn btn-secondary w-25"
//           onClick={(e) => setOtp([...otp.map((v) => "")])}
//         >
//           Reset
//         </button>
//         <button
//           className="btn btn-primary m-3 w-50"

//         >
//           Verify
//         </button>
//       </div>
//     </div>
//   );
// };
