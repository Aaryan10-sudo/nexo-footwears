"use client"; // Make sure to use 'use client' if this component is rendered on the client-side.

import Lottie from "lottie-react";
import React from "react";
import tickAnimation from "../app/animations/tick.json";

// Define prop types
interface AnimatedTickProps {
  width?: number; // Optional prop with default value
  height?: number; // Optional prop with default value
  loop?: boolean; // Optional prop with default value
}

const AnimatedTick: React.FC<AnimatedTickProps> = ({
  width = 100,
  height = 100,
  loop = false,
}) => {
  return (
    <div style={{ width, height }}>
      <Lottie animationData={tickAnimation} loop={loop} />
    </div>
  );
};

export default AnimatedTick;
