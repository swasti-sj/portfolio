// src/components/SpinningGradient.jsx
import React from "react";
 // CSS file we will add next

const SpinningGradient = ({ children, className = "" }) => {
  return (
    <div className={`sg-wrapper ${className}`}>
      <span className="sg-gradient" />
      <div className="sg-content">{children}</div>
    </div>
  );
};

export default SpinningGradient;
