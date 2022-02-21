import React from "react";
import "./customBadge.scss";

const CustomBadge = ({ children, ...otherProps }) => {
  return (
    <div className="custom-badge" {...otherProps}>
      {children}
    </div>
  );
};

export default CustomBadge;
