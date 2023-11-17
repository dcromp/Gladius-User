/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Home } from "../../icons/Home";
import { HomeLinear2 } from "../../icons/HomeLinear2";
import { Storefront } from "../../icons/Storefront";
import { User3 } from "../../icons/User3";
import { User4 } from "../../icons/User4";
import { Wallet1 } from "../../icons/Wallet1";
import "./style.css";

export const NavigationBar = ({
  status,
  mode,
  className,
  icon = <User4 className="instance-node" />,
}) => {
  return (
    <div className={`navigation-bar ${className}`}>
      <div className={`navigation-menu-home status-${status}`}>
        {status === "home" && (
          <div className="frame">
            <Home className="home-1" />
          </div>
        )}

        {["marketplace", "profile", "wallet"].includes(status) && (
          <HomeLinear2 className="home-linear" />
        )}
      </div>
      <div className={`navigation-menu status-0-${status}`}>
        {["home", "marketplace", "profile"].includes(status) && (
          <Wallet1 className="instance-node" />
        )}

        {status === "wallet" && (
          <div className="div">
            <Wallet1 className="instance-node" />
          </div>
        )}
      </div>
      <div className={`navigation-menu-2 status-1-${status}`}>
        {["home", "profile", "wallet"].includes(status) && (
          <Storefront className="instance-node" />
        )}

        {status === "marketplace" && (
          <div className="div">
            <Storefront className="instance-node" />
          </div>
        )}
      </div>
      <div className={`navigation-menu-3 status-2-${status}`}>
        {["home", "marketplace", "wallet"].includes(status) && <>{icon}</>}

        {status === "profile" && (
          <div className="div">
            <User3 className="instance-node" />
          </div>
        )}
      </div>
    </div>
  );
};

NavigationBar.propTypes = {
  status: PropTypes.oneOf(["profile", "home", "wallet", "marketplace"]),
  mode: PropTypes.oneOf(["dark"]),
};
