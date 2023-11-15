/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Rocketlaunch2 } from "../../icons/Rocketlaunch2";
import "./style.css";

export const Button = ({
  hasLeftIcon = true,
  hasText = true,
  text = "Button",
  property1,
  className,
  icon = <Rocketlaunch2 className="rocket-launch" color="white" />,
  divClassName,
}) => {
  return (
    <button className={`button ${property1} ${className}`}>
      {hasLeftIcon && <>{icon}</>}

      {hasText && <div className={`text-wrapper ${divClassName}`}>{text}</div>}
    </button>
  );
};

Button.propTypes = {
  hasLeftIcon: PropTypes.bool,
  hasText: PropTypes.bool,
  text: PropTypes.string,
  property1: PropTypes.oneOf([
    "primary-filled",
    "secondary-outlined",
    "primary-outlined",
    "tertiary-filled",
    "tertiary-outlined",
    "secondary-filled",
  ]),
};
