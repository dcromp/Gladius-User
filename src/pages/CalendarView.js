import { useState, useCallback } from "react";
import styled from "styled-components";
import DrawerMain from "../components/DrawerMain";
import PortalDrawer from "../components/PortalDrawer";

const InstanceChild = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: var(--br-mini);
  background: linear-gradient(180deg, #2b2b2b, #0e1025);
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.04);
`;
const IconlyboldarrowDown3 = styled.img`
  position: absolute;
  height: 38.1%;
  width: 7.25%;
  top: 30.16%;
  right: 4.83%;
  bottom: 31.75%;
  left: 87.92%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const May2022 = styled.div`
  position: absolute;
  top: 46.03%;
  left: 15.71%;
`;
const StartDate = styled.div`
  position: absolute;
  top: 25.4%;
  left: 15.71%;
  font-size: var(--font-size-4xs);
`;
const VuesaxbulkcalendarIcon = styled.img`
  position: absolute;
  height: 38.1%;
  width: 7.25%;
  top: 30.16%;
  right: 87.92%;
  bottom: 31.75%;
  left: 4.83%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 161px;
  left: calc(50% - 170px);
  width: 331px;
  height: 63px;
  font-size: var(--lexend-deca-semi-bold-14-size);
`;
const Description = styled.div`
  position: absolute;
  top: 112px;
  left: calc(50% - 167px);
`;
const AdultsGroupOf = styled.div`
  position: absolute;
  top: 135px;
  left: calc(50% - 167px);
  font-size: 11px;
`;
const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-mini);
  background: linear-gradient(180deg, #2b2b2b, #0e1025);
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.04);
  width: 331px;
  height: 63px;
`;
const FrameItem = styled.img`
  position: absolute;
  top: 19px;
  left: 16px;
  width: 24px;
  height: 24px;
`;
const Group = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
`;
const Adults = styled.div`
  position: absolute;
  top: 13px;
  left: 0px;
  font-size: var(--lexend-deca-semi-bold-14-size);
  font-weight: 600;
`;
const GroupParent = styled.div`
  position: absolute;
  top: 16px;
  left: 48px;
  width: 45px;
  height: 31px;
`;
const IconlyboldarrowDown31 = styled.img`
  position: absolute;
  top: 19px;
  left: 291px;
  width: 24px;
  height: 24px;
`;
const Frame = styled.div`
  position: absolute;
  top: 24px;
  left: calc(50% - 170px);
  width: 331px;
  height: 63px;
  overflow: hidden;
`;
const Contents = styled.div`
  position: absolute;
  top: 127px;
  left: calc(50% - 187.5px);
  width: 376px;
  height: 685px;
  overflow: hidden;
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
const Contents1 = styled.div`
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
  left: calc(50% - 186.5px);
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
  font-size: var(--h4-work-sans-size);
  font-family: var(--h5-work-sans);
`;
const CalendarViewRoot = styled.div`
  position: relative;
  background-color: var(--color-gray-100);
  width: 100%;
  height: 812px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-4xs);
  color: var(--text);
  font-family: var(--lexend-deca-semi-bold-14);
`;

const CalendarView = () => {
  const [isDrawerMainOpen, setDrawerMainOpen] = useState(false);

  const openDrawerMain = useCallback(() => {
    setDrawerMainOpen(true);
  }, []);

  const closeDrawerMain = useCallback(() => {
    setDrawerMainOpen(false);
  }, []);

  return (
    <>
      <CalendarViewRoot>
        <Contents>
          <RectangleParent>
            <InstanceChild />
            <IconlyboldarrowDown3 alt="" src="/iconlyboldarrow--down-3.svg" />
            <May2022>01 May, 2022</May2022>
            <StartDate>Start Date</StartDate>
            <VuesaxbulkcalendarIcon alt="" src="/vuesaxbulkcalendar.svg" />
          </RectangleParent>
          <Description>Description</Description>
          <AdultsGroupOf>Adults group of Gladius Club</AdultsGroupOf>
          <Frame>
            <FrameChild />
            <FrameItem alt="" src="/group-7.svg" />
            <GroupParent>
              <Group>Group</Group>
              <Adults>Adults</Adults>
            </GroupParent>
            <IconlyboldarrowDown31 alt="" src="/iconlyboldarrow--down-31.svg" />
          </Frame>
        </Contents>
        <HeadlineSubhead>
          <Contents1>
            <GladiusLevel1>Calendar</GladiusLevel1>
            <GuestGets>Events</GuestGets>
          </Contents1>
          <MingcutemenuFill onClick={openDrawerMain}>
            <GroupIcon alt="" src="/group.svg" />
          </MingcutemenuFill>
        </HeadlineSubhead>
      </CalendarViewRoot>
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

export default CalendarView;
