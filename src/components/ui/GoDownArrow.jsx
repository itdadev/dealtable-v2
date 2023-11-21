import React, { useCallback } from "react";
import styled from "@emotion/styled";

import { image } from "@/theme";
import { borderZIndex } from "@/constants/zIndex";

const GoDownArrowContainer = styled.button(({ fixed }) => ({
  position: fixed ? "fixed" : "static",
  left: fixed ? "4rem" : "0",
  bottom: fixed ? "8rem" : "0",
  width: "8rem",
  height: "8rem",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "white",
  zIndex: borderZIndex,
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
