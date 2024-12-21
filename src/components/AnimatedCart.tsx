"use client";

import Lottie from "lottie-react";
import React from "react";
import cartAnimation from "../app/animations/cart.json";

// Define prop types
interface AnimatedCartProps {
  width?: number;
  height?: number;
  loop?: boolean;
}

const AnimatedCart: React.FC<AnimatedCartProps> = ({
  width = 250,
  height = 250,
  loop = false,
}) => {
  return (
    <div style={{ width, height }}>
      <Lottie animationData={cartAnimation} loop={loop} />
    </div>
  );
};

export default AnimatedCart;
