import React from "react";
import styled from "@emotion/styled";
import { Button } from "antd";

export const defaultButtonStyle = {
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0 4.5rem",
  height: "auto",
};

const Container = styled(Button)(({ fullwidth }) => ({
  ...defaultButtonStyle,
  width: fullwidth === "true" ? "100%" : "fit-content",
  color: "white",
  borderRadius: "50rem",
  padding: "1.2rem 2.4rem",
  fontSize: "1.6rem",
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
