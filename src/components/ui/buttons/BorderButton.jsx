import React from "react";
import { Button } from "antd";
import styled from "@emotion/styled";

import { buttonZIndex } from "@/constants/zIndex";

import { defaultButtonStyle } from "./PrimaryButton";
import { mq } from "@/lib/react-responsive/mediaQuery";

const Container = styled(Button)(({ theme, fullwidth }) => ({
  width: fullwidth === "true" ? "100%" : "fit-content",
  zIndex: buttonZIndex,
  color: "white",
  borderRadius: 0,
  border: "1px solid white",
  padding: "1.2rem 1.6rem",

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

  [mq("desktop")]: {
    padding: "1.5rem 6rem",
    fontSize: "1.8rem",
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
