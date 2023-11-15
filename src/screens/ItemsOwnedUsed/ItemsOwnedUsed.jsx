import React from "react";
import { Button } from "../../components/Button";
import { CoverProfileImage } from "../../components/CoverProfileImage";
import { NftCard } from "../../components/NftCard";
import { Copy1 } from "../../icons/Copy1";
import "./style.css";

export const ItemsOwnedUsed = () => {
  return (
    <div className="items-owned-used">
      <CoverProfileImage avatar="/img/avatar.svg" className="cover-profile-image-instance" />
      <div className="artist-info">
        <div className="div-2">
          <div className="artist-name">Keepitreal</div>
          <div className="CT-as">
            <Button
              className="wallet-button"
              icon={<Copy1 className="copy" />}
              property1="secondary-filled"
              text="0xc0E3...B79C"
            />
          </div>
        </div>
      </div>
      <div className="tab-bar">
        <img className="line" alt="Line" src="/img/line-2.svg" />
        <div className="frame">
          <div className="tabs">
            <div className="tab">
              <div className="created">Owned</div>
            </div>
            <div className="tab">
              <div className="created-2">Spent</div>
            </div>
          </div>
        </div>
      </div>
      <div className="NFT-cards-section">
        <div className="div-2">
          <NftCard />
        </div>
        <NftCard />
      </div>
    </div>
  );
};
