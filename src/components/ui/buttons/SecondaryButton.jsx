import React from "react";
import styled from "@emotion/styled";
import { Button } from "antd";

import { mq } from "@/lib/react-responsive/mediaQuery";

import { defaultButtonStyle } from "./PrimaryButton";

const Container = styled(Button)(({ fullwidth, theme }) => ({
  width: fullwidth === "true" ? "100%" : "fit-content",
  color: theme.color.primary,

  border: `1px solid ${theme.color.primary}`,
  borderRadius: "50rem",
  fontSize: "1.6rem",

  padding: "1.2rem 1.6rem",

  [mq("desktop")]: {
    padding: "1.2rem 2.4rem",
  },
}));

const SecondaryButton = ({
  children,
  linkTo,
  buttonType = "button",
  clickEvent,
  fullwidth,
  disabled,
}) => {
  return (
    <Container
      style={defaultButtonStyle}
      href={linkTo ? linkTo : undefined}
      htmlType={buttonType}
      onClick={clickEvent ? clickEvent : undefined}
      fullwidth={fullwidth ? "true" : "false"}
      disabled={disabled}
    >
      {children}
    </Container>
  );
};

export default SecondaryButton;
