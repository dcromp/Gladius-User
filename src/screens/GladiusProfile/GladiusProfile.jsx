import React from "react";
import { CoverProfileImage } from "../../components/CoverProfileImage";
import { NavigationBar } from "../../components/NavigationBar";
import { StatBox } from "../../components/StatBox";
import { User5 } from "../../icons/User5";
import "./style.css";

export const GladiusProfile = () => {
  return (
    <div className="gladius-profile">
      <div className="div-2">
        <div className="group">
          <div className="stats-box">
            <StatBox className="stat-box-instance" />
            <StatBox className="stat-box-2" />
            <StatBox className="stat-box-3" />
            <StatBox className="stat-box-4" />
          </div>
          <div className="text-wrapper-2">Statistics</div>
        </div>
        <div className="transfer-button">
          <div className="overlap-group">
            <div className="text-wrapper-3">Transfer</div>
          </div>
        </div>
        <div className="text-wrapper-4">Alexey</div>
        <div className="level-2">Level 1</div>
        <CoverProfileImage
          className="cover-profile-image-instance"
          imagePlaceholder="/img/image-placeholder-1.png"
          imagePlaceholderClassName="cover-profile-image-2"
        />
        <NavigationBar
          className="navigation-bar-instance"
          icon={<User5 className="user" />}
          mode="dark"
          status="home"
        />
      </div>
    </div>
  );
};
