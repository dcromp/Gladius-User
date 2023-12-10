import { useState, useCallback } from "react";
import styled from "styled-components";
import DrawerMain from "../components/DrawerMain";
import PortalDrawer from "../components/PortalDrawer";

const Div = styled.div`
  position: relative;
  line-height: 140%;
  display: inline-block;
  width: 24px;
  flex-shrink: 0;
`;
const Artist = styled.div`
  flex: 1;
  position: relative;
  font-size: var(--caption-space-mono-size);
  line-height: 110%;
  text-align: left;
`;
const RankArtist = styled.div`
  width: 215px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const Exp = styled.div`
  align-self: stretch;
  position: relative;
  line-height: 110%;
`;
const Volume = styled.div`
  width: 100px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const StatsHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  text-align: left;
  font-size: var(--caption-space-mono-size);
`;
const TableHeaders = styled.div`
  width: 315px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px var(--padding-3xs);
  box-sizing: border-box;
`;
const TableHeader = styled.div`
  border-radius: var(--br-xl);
  width: 315px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-xs) 0px;
  box-sizing: border-box;
  font-size: var(--text-large-size);
`;
const Div1 = styled.div`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 6px);
  left: calc(50% - 4px);
  line-height: 110%;
  z-index: 0;
`;
const RankingNumber = styled.div`
  border-radius: var(--br-xl);
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
`;
const AvatarPlaceholderIcon = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: var(--br-101xl);
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Asset122 = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
`;
const Avatar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`;
const DishStudio = styled.div`
  flex: 1;
  position: relative;
  line-height: 140%;
`;
const ArtistCard = styled.div`
  border-radius: var(--br-xl);
  width: 167px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
  text-align: left;
  font-size: var(--text-large-size);
  color: var(--text);
  font-family: var(--h5-work-sans);
`;
const RankArtist1 = styled.div`
  width: 310px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-3xs);
`;
const Volume2 = styled.div`
  width: 80px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  color: var(--text);
`;
const TableItems1 = styled.div`
  width: 315px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px var(--padding-3xs);
  box-sizing: border-box;
`;
const TableItems = styled.div`
  border-radius: var(--br-xl);
  background: linear-gradient(180deg, #2b2b2b, #0e1025);
  width: 315px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) 0px;
  box-sizing: border-box;
`;
const RankingsList = styled.div`
  position: absolute;
  top: 126px;
  left: calc(50% - 187.5px);
  width: 375px;
  height: 686px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 0px;
  box-sizing: border-box;
  gap: 20px;
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
  height: 126px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-lgi) var(--padding-4xl);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  text-align: left;
  font-size: var(--h4-work-sans-size);
  color: var(--text);
  font-family: var(--h5-work-sans);
`;
const LeaderBoardRoot = styled.div`
  position: relative;
  background: linear-gradient(180deg, #2b2b2b, #0e1025);
  width: 100%;
  height: 812px;
  overflow: hidden;
  text-align: center;
  font-size: var(--caption-space-mono-size);
  color: var(--caption-label-text);
  font-family: var(--caption-space-mono);
`;

const LeaderBoard = () => {
  const [isDrawerMainOpen, setDrawerMainOpen] = useState(false);

  const openDrawerMain = useCallback(() => {
    setDrawerMainOpen(true);
  }, []);

  const closeDrawerMain = useCallback(() => {
    setDrawerMainOpen(false);
  }, []);

  return (
    <>
      <LeaderBoardRoot>
        <RankingsList>
          <TableHeader>
            <TableHeaders>
              <RankArtist>
                <Div>#</Div>
                <Artist>Player</Artist>
              </RankArtist>
              <StatsHeader>
                <Volume>
                  <Exp>Score</Exp>
                </Volume>
              </StatsHeader>
            </TableHeaders>
          </TableHeader>
          <TableItems>
            <TableItems1>
              <RankArtist1>
                <RankingNumber>
                  <Div1>1</Div1>
                </RankingNumber>
                <ArtistCard>
                  <Avatar>
                    <Asset122>
                      <AvatarPlaceholderIcon
                        alt=""
                        src="/avatar-placeholder1@2x.png"
                      />
                    </Asset122>
                  </Avatar>
                  <DishStudio>Zain Dokidis</DishStudio>
                </ArtistCard>
              </RankArtist1>
              <Volume2>
                <Exp>124 exp</Exp>
              </Volume2>
            </TableItems1>
          </TableItems>
          <TableItems>
            <TableItems1>
              <RankArtist1>
                <RankingNumber>
                  <Div1>2</Div1>
                </RankingNumber>
                <ArtistCard>
                  <Avatar>
                    <Asset122>
                      <AvatarPlaceholderIcon
                        alt=""
                        src="/avatar-placeholder1@2x.png"
                      />
                    </Asset122>
                  </Avatar>
                  <DishStudio>You</DishStudio>
                </ArtistCard>
              </RankArtist1>
              <Volume2>
                <Exp>104 exp</Exp>
              </Volume2>
            </TableItems1>
          </TableItems>
        </RankingsList>
        <HeadlineSubhead>
          <Contents>
            <GladiusLevel1>Leader Board</GladiusLevel1>
            <GuestGets>Bronze league</GuestGets>
          </Contents>
          <MingcutemenuFill onClick={openDrawerMain}>
            <GroupIcon alt="" src="/group.svg" />
          </MingcutemenuFill>
        </HeadlineSubhead>
      </LeaderBoardRoot>
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

export default LeaderBoard;
