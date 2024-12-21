import React from "react";

interface LoaderProps {
  letter: string;
}

const Loader: React.FC<LoaderProps> = ({ letter }) => {
  return (
    <div className="loader">
      <svg viewBox="0 0 80 80">
        <rect x="8" y="8" width="64" height="64" />
        <text
          x="50%"
          y="60%"
          textAnchor="middle"
          fill="black"
          fontSize="24"
          fontWeight="bold"
        >
          {letter}
        </text>
      </svg>
    </div>
  );
};

const Loading: React.FC = () => {
  const letters = ["N", "E", "X", "O"];

  return (
    <div className="flex justify-center items-center h-screen text-violet-600">
      {letters.map((letter, index) => (
        <Loader key={index} letter={letter} />
      ))}
    </div>
  );
};

export default Loading;
``;
