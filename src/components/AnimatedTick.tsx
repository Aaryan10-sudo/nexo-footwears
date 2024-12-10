"use client";

import Lottie from "lottie-react";
import React from "react";
import tickAnimation from "../app/animations/tick.json";

// Define prop types
interface AnimatedTickProps {
  width?: number;
  height?: number;
  loop?: boolean;
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
