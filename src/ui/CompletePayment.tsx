import React from "react";

const CompletePayment = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="96"
        height="96"
        viewBox="0 0 24 24"
      >
        <mask id="lineMdCircleFilledToConfirmCircleFilledTransition0">
          <g
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              fill="#fff"
              d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"
            />
            <path
              stroke="#000"
              stroke-dasharray="14"
              stroke-dashoffset="14"
              d="M8 12l3 3l5 -5"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.8s"
                values="14;0"
              />
            </path>
          </g>
        </mask>
        <rect
          width="24"
          height="24"
          fill="#7c3aed"
          mask="url(#lineMdCircleFilledToConfirmCircleFilledTransition0)"
        />
      </svg>
    </div>
  );
};

export default CompletePayment;
