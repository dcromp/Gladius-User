import React from "react";
import MaskGroup from "../../img/mask-group.png";
import "./style.css";

export const StatBox = ({ className }) => {
  return (
    <div className={`stat-box ${className}`}>
      <div className="level">Total Trainings</div>
      <div className="text-wrapper">345</div>
      <img className="mask-group" alt="Mask group" src={MaskGroup} />
    </div>
  );
};
