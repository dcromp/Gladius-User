/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Button } from "../Button";
import "./style.css";

export const NftCard = () => {
  return (
    <div className="NFT-card">
      <div className="image">
        <img
          className="img"
          alt="Image placeholder"
          src="/img/image-placeholder.png"
        />
      </div>
      <div className="NFT-info">
        <div className="NFT-name">Spear</div>
        <Button
          className="use-button"
          divClassName="button-instance"
          hasLeftIcon={false}
          property1="primary-filled"
          text="BUY"
        />
        <div className="additional-info">
          <div className="price">
            <div className="div">Price</div>
            <div className="element-ETH">1.63 GLC</div>
          </div>
        </div>
      </div>
    </div>
  );
};
