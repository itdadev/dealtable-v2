import React from "react";
import styled from "@emotion/styled";

import { overlayZIndex } from "@/constants/zIndex";

const NormalOverlayContainer = styled.div(() => ({
  position: "absolute",
  background: "rgba(0, 0, 0, 60%)",
  zIndex: overlayZIndex,
  width: "100%",
  height: "100%",
}));

const NormalOverlay = () => {
  return <NormalOverlayContainer />;
};

export default NormalOverlay;
