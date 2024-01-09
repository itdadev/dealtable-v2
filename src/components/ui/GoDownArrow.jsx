import React, { useCallback } from "react";
import styled from "@emotion/styled";

import { image } from "@/theme";
import { goTopArrowZIndex } from "@/constants/zIndex";
import { mq } from "@/lib/react-responsive/mediaQuery";

const GoDownArrowContainer = styled.button(({ fixed }) => ({
  position: fixed ? "fixed" : "static",
  left: fixed ? "2rem" : "0",
  bottom: fixed ? "8rem" : "0",
  width: "5rem",
  height: "5rem",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "white",
  zIndex: goTopArrowZIndex,

  [mq("desktop")]: {
    position: fixed ? "fixed" : "static",
    left: fixed ? "4rem" : "0",
    bottom: fixed ? "8rem" : "0",
    width: "8rem",
    height: "8rem",
  },
}));

const GoDownArrow = ({ swiper, idx, fixed }) => {
  const slideMove = useCallback(() => {
    if (swiper) {
      swiper.slideTo(idx, 1000);
    }
  }, [swiper, idx]);

  return (
    <GoDownArrowContainer type="button" onClick={slideMove} fixed={fixed}>
      <img src={image.homeArrowDown.default} alt="click to go down" />
    </GoDownArrowContainer>
  );
};

export default GoDownArrow;
