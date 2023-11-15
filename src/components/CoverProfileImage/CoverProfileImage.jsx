/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CoverProfileImage = ({ className, avatar = "/img/avatar-1.svg" }) => {
  return (
    <div className={`cover-profile-image ${className}`}>
      <img className="image-placeholder" alt="Image placeholder" src="/img/image-placeholder-4.png" />
      <div className="profile-image">
        <img className="avatar" alt="Avatar" src={avatar} />
      </div>
    </div>
  );
};

CoverProfileImage.propTypes = {
  avatar: PropTypes.string,
};
