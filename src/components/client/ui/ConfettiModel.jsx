import React from "react";

import ReactConfetti from "react-confetti";

export default function ConfettiModal({ size }) {
  console.log(size);
  return (
    <ReactConfetti
      width={size.width}
      height={size.height}
      tweenDuration={1000}
    />
  );
}
