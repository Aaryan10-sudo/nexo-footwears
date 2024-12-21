"use client";

import Lottie from "lottie-react";
import React from "react";
import mailAnimation from "../app/animations/mail.json";

// Define prop types
interface AnimatedMailProps {
  width?: number;
  height?: number;
  loop?: boolean;
}

const AnimatedMail: React.FC<AnimatedMailProps> = ({
  width = 100,
  height = 100,
  loop = false,
}) => {
  return (
    <div style={{ width, height }}>
      <Lottie animationData={mailAnimation} loop={loop} />
    </div>
  );
};

export default AnimatedMail;
