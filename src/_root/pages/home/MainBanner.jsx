import React from "react";
import styled from "@emotion/styled";

import GoDownArrow from "@/components/ui/GoDownArrow";
import { mq } from "@/lib/react-responsive/mediaQuery";

import { HomeSectionTextWrapper } from "./Home";
import FadeToTop from "../../../components/ui/react-spring/FadeToTop";

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
  return (
    <>
      <HomeSectionTextWrapper>
        <FadeToTop active={active}>
          <header>Get your</header>

          <header>M&A Deal list</header>

          <header>DEALTABLE</header>
        </FadeToTop>
      </HomeSectionTextWrapper>

      <ArrowTextContainer>
        <GoDownArrow swiper={swiper} idx={1} />

        <div>
          <p>Any M&A participant</p>

          <p>I'm a customer of dealtable</p>
        </div>
      </ArrowTextContainer>
    </>
  );
};

export default MainBanner;
