import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";
import DrawerMain from "../components/DrawerMain";
import PortalDrawer from "../components/PortalDrawer";

const ImagePlaceholderIcon = styled.img`
  align-self: stretch;
  position: relative;
  border-radius: var(--br-xl) var(--br-xl) 0px 0px;
  max-width: 100%;
  overflow: hidden;
  height: 201px;
  flex-shrink: 0;
  object-fit: cover;
`;
const Image1 = styled.div`
  border-radius: var(--br-xl) var(--br-xl) 0px 0px;
  width: 315px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const NftName = styled.div`
  position: absolute;
  top: 19px;
  left: calc(50% - 98.5px);
  line-height: 140%;
  text-transform: capitalize;
  font-weight: 600;
  display: inline-block;
  width: 198px;
`;
const UseButton = styled(Button)`
  position: absolute;
  top: 67px;
  left: calc(50% - 66.5px);
`;
const Price1 = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  line-height: 110%;
`;
const Eth = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  line-height: 110%;
  color: var(--text);
`;
const Price = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-2xl) 0px 0px;
  gap: var(--gap-5xs);
`;
const HighestBid = styled.div`
  flex: 1;
  display: none;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: var(--gap-5xs);
  text-align: right;
`;
const AdditionalInfo = styled.div`
  position: absolute;
  top: 142px;
  left: 20px;
  width: 198px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  font-size: var(--caption-space-mono-size);
  color: var(--caption-label-text);
  font-family: var(--caption-space-mono);
`;
const NftInfo = styled.div`
  position: relative;
  width: 315px;
  height: 201px;
`;
const NftCard = styled.div`
  border-radius: var(--br-xl);
  background: linear-gradient(180deg, #2b2b2b, #0e1025);
  height: 402px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const NftCardsSection = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - 209px);
  right: 0%;
  left: 0%;
  background: linear-gradient(180deg, #2b2b2b, #0e1025);
  height: 615px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-11xl) 0px;
  box-sizing: border-box;
`;
const GladiusLevel1 = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 140%;
  text-transform: capitalize;
  font-weight: 600;
`;
const GuestGets = styled.div`
  align-self: stretch;
  position: relative;
  font-size: var(--text-large-size);
  line-height: 140%;
`;
const Contents = styled.div`
  width: 322px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  z-index: 0;
`;
const GroupIcon = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const MingcutemenuFill = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  margin: 0 !important;
  top: 19px;
  right: 23px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 1;
`;
const HeadlineSubhead = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 187.5px);
  background: linear-gradient(180deg, #2b2b2b, #0e1025);
  width: 375px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-lgi) var(--padding-4xl);
  box-sizing: border-box;
  text-align: left;
  font-size: var(--h4-work-sans-size);
`;
const MarketplaceRoot = styled.div`
  position: relative;
  background: linear-gradient(180deg, #0f1129, rgba(59, 59, 59, 0));
  width: 100%;
  height: 812px;
  overflow-y: auto;
  text-align: center;
  font-size: var(--h5-work-sans-size);
  color: var(--text);
  font-family: var(--basebody-work-sans);
`;

const Marketplace = () => {
  const [isDrawerMainOpen, setDrawerMainOpen] = useState(false);

  const openDrawerMain = useCallback(() => {
    setDrawerMainOpen(true);
  }, []);

  const closeDrawerMain = useCallback(() => {
    setDrawerMainOpen(false);
  }, []);

  return (
    <>
      <MarketplaceRoot>
        <NftCardsSection>
          <NftCard>
            <Image1>
              <ImagePlaceholderIcon alt="" src="/image-placeholder@2x.png" />
            </Image1>
            <NftInfo>
              <NftName>Spear</NftName>
              <UseButton
                sx={{ width: 135 }}
                color="secondary"
                variant="contained"
              >
                BUY
              </UseButton>
              <AdditionalInfo>
                <Price>
                  <Price1>Price</Price1>
                  <Eth>1.63 GLC</Eth>
                </Price>
                <HighestBid>
                  <Price1>Highest Bid</Price1>
                  <Eth>0.33 wGLC</Eth>
                </HighestBid>
              </AdditionalInfo>
            </NftInfo>
          </NftCard>
        </NftCardsSection>
        <HeadlineSubhead>
          <Contents>
            <GladiusLevel1>Gladius Level 1</GladiusLevel1>
            <GuestGets>
              Guest - gets the opportunity to choose a weapon on which further
              specialization depends. You can choose only one weapon, the long
              sword is the default for all players.
            </GuestGets>
          </Contents>
          <MingcutemenuFill onClick={openDrawerMain}>
            <GroupIcon alt="" src="/group.svg" />
          </MingcutemenuFill>
        </HeadlineSubhead>
      </MarketplaceRoot>
      {isDrawerMainOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeDrawerMain}
        >
          <DrawerMain onClose={closeDrawerMain} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Marketplace;
