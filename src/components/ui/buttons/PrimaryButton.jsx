import React from "react";
import styled from "@emotion/styled";
import { Button } from "antd";
import { mq } from "@/lib/react-responsive/mediaQuery";

export const defaultButtonStyle = {
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0 4.5rem",
  fontSize: "1.4rem",
  height: "auto",
  lineHeight: 1,
};

const Container = styled(Button)(({ fullwidth, theme }) => ({
  ...defaultButtonStyle,
  width: fullwidth === "true" ? "100%" : "fit-content",
  color: "white",
  borderRadius: "50rem",
  fontWeight: theme.fontWeight.regular,
  padding: "1.2rem 1.6rem",

  [mq("desktop")]: {
    padding: "1.2rem 2.4rem",
  },
}));

const PrimaryButton = ({
  children,
  linkTo,
  buttonType = "button",
  clickEvent,
  fullwidth,
  disabled,
}) => {
  return (
    <Container
      type="primary"
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

export default PrimaryButton;
