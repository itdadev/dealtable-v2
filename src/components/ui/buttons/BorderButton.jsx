import React from "react";
import { Button } from "antd";
import styled from "@emotion/styled";

import { buttonZIndex } from "@/constants/zIndex";

import { defaultButtonStyle } from "./PrimaryButton";

const Container = styled(Button)(({ theme, fullwidth }) => ({
  width: fullwidth === "true" ? "100%" : "fit-content",
  zIndex: buttonZIndex,
  color: "white",

  ":hover": {
    border: `1px solid ${theme.color.primary}`,

    ":before": {
      width: "100%",
    },
  },

  ":before": {
    content: '""',
    position: "absolute",
    inset: 0,
    zIndex: -1,
    width: 0,
    background: theme.color.primary,
    height: "100%",
    transition: "all 0.3s",
  },
}));

const BorderButton = ({
  children,
  linkTo,
  buttonType = "button",
  clickEvent,
  fullwidth,
}) => {
  return (
    <Container
      style={defaultButtonStyle}
      type="link"
      href={linkTo ? linkTo : undefined}
      htmlType={buttonType}
      onClick={clickEvent ? clickEvent : undefined}
      fullwidth={fullwidth ? "true" : "false"}
    >
      {children}
    </Container>
  );
};

export default BorderButton;
