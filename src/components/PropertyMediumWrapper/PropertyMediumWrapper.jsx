/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Avatar } from "../Avatar";
import "./style.css";

export const PropertyMediumWrapper = ({ property1, className, avatarAvatarClassName }) => {
  return (
    <div className={`property-medium-wrapper ${className}`}>
      <Avatar className={avatarAvatarClassName} />
    </div>
  );
};

PropertyMediumWrapper.propTypes = {
  property1: PropTypes.oneOf(["small", "medium", "big"]),
};
