import React from "react";
import styled from "@emotion/styled";
import { Button } from "antd";

export const defaultButtonStyle = {
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0 4.5rem",
  padding: "1.5rem 6rem",
  fontSize: "1.8rem",
  height: "auto",
};

const Container = styled(Button)(({ fullwidth }) => ({
  ...defaultButtonStyle,
  width: fullwidth === "true" ? "100%" : "fit-content",
  color: "white",
}));

const PrimaryButton = ({
  children,
  linkTo,
  buttonType = "button",
  clickEvent,
  fullwidth,
}) => {
  return (
    <Container
      type="primary"
      href={linkTo ? linkTo : undefined}
      htmlType={buttonType}
      onClick={clickEvent ? clickEvent : undefined}
      fullwidth={fullwidth ? "true" : "false"}
    >
      {children}
    </Container>
  );
};

export default PrimaryButton;
