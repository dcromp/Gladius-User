import { useCallback, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

const animationSlideInLeft = keyframes`
    0% {
        transform: translateX(-200px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
  `;
const SolidIcon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const Calendar = styled.div`
  flex: 1;
  position: relative;
  font-size: var(--text-large-size);
  line-height: 24px;
  font-family: var(--text-large);
  color: var(--text);
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const SolidIconParent = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-xl);
  background-color: var(--color-gray-100);
  align-self: stretch;
  border-radius: var(--br-7xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-lg);
`;
const DrawerMainRoot = styled.div`
  background-color: var(--color-gray-100);
  width: 230px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  opacity: 0;
  max-width: 90%;
  overflow: auto;
  &.animate {
    animation: 0.25s ease 0s 1 normal forwards ${animationSlideInLeft};
  }
`;

const DrawerMain = ({ onClose }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/leader-board");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/wallet");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  return (
    <DrawerMainRoot data-animate-on-scroll>
      <SolidIconParent onClick={onFrameButtonClick}>
        <SolidIcon alt="" src="/solidicon.svg" />
        <Calendar>Calendar</Calendar>
      </SolidIconParent>
      <SolidIconParent onClick={onFrameButton1Click}>
        <SolidIcon alt="" src="/solidicon1.svg" />
        <Calendar>Leaderboard</Calendar>
      </SolidIconParent>
      <SolidIconParent onClick={onFrameButton2Click}>
        <SolidIcon alt="" src="/solidicon2.svg" />
        <Calendar>Wallet</Calendar>
      </SolidIconParent>
      <SolidIconParent onClick={onFrameButton3Click}>
        <SolidIcon alt="" src="/solidicon3.svg" />
        <Calendar>Marketplace</Calendar>
      </SolidIconParent>
      <SolidIconParent>
        <SolidIcon alt="" src="/solidicon4.svg" />
        <Calendar>Sign Out</Calendar>
      </SolidIconParent>
    </DrawerMainRoot>
  );
};

export default DrawerMain;
