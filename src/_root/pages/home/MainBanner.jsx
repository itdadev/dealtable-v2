import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "@emotion/styled";

import GoDownArrow from "@/components/ui/GoDownArrow";
import { FadeToRight } from "@/components/ui/react-spring";
import { mq } from "@/lib/react-responsive/mediaQuery";

import { HomeSectionTextWrapper } from "./Home";

const ArrowTextContainer = styled.div(() => ({
  position: "relative",
  display: "flex",
  flexDirection: "column-reverse",
  marginTop: "3rem",
  gap: "6.8rem 2.4rem",
  color: "white",
  fontSize: "1.6rem",

  [mq("desktop")]: {
    flexDirection: "row",
    left: "-4rem",
    alignItems: "center",
    marginTop: "9.6rem",
  },
}));

const MainBanner = ({ active, swiper }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      <HomeSectionTextWrapper>
        {isMobile ? (
          <FadeToRight active={active}>
            <div>Get your</div>

            <div>M&A</div>

            <div>Deal list</div>

            <div>DEALTABLE</div>
          </FadeToRight>
        ) : (
          <FadeToRight active={active}>
            <div>Get your</div>

            <div>M&A Deal list</div>

            <div>DEALTABLE</div>
          </FadeToRight>
        )}
      </HomeSectionTextWrapper>

      <ArrowTextContainer>
        <GoDownArrow swiper={swiper} idx={1} />

        <div>
          <p>Any M&A participants can be a customer of DEALTABLE</p>
        </div>
      </ArrowTextContainer>
    </>
  );
};

export default MainBanner;
