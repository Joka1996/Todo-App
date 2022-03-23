import React from "react";
// a simple restart solution
export const Restart: React.FC = (props) => {
  const restart = () => {
    window.location.reload();
  };

  return (
    <button className="delete" onClick={restart}>
      Empty list
    </button>
  );
};
