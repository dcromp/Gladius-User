import PropTypes from "prop-types";
import React from "react";
import { PropertyMediumWrapper } from "../PropertyMediumWrapper";
import ImagePlaceholder from "../../img/image-placeholder.png";
import "./style.css";

export const CoverProfileImage = ({ className, imagePlaceholderClassName }) => {
  return (
    <div className={`cover-profile-image ${className}`}>
      <img
        className={`image-placeholder ${imagePlaceholderClassName}`}
        alt=" placeholder"
        src={ImagePlaceholder}
      />
      <div className="profile-image">
        <PropertyMediumWrapper
          avatarAvatarClassName="design-component-instance-node"
          className="avatar-instance"
          property1="big"
        />
      </div>
    </div>
  );
};

CoverProfileImage.propTypes = {
  imagePlaceholder: PropTypes.string,
};
