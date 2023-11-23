import React from "react";
import styled from "@emotion/styled";
import { Button } from "antd";

import { defaultButtonStyle } from "./PrimaryButton";

const Container = styled(Button)(({ fullwidth, theme }) => ({
  width: fullwidth === "true" ? "100%" : "fit-content",
  color: theme.color.primary,
}));

const SecondaryButton = ({
  children,
  linkTo,
  buttonType = "button",
  clickEvent,
  fullwidth,
}) => {
  return (
    <Container
      style={defaultButtonStyle}
      href={linkTo ? linkTo : undefined}
      htmlType={buttonType}
      onClick={clickEvent ? clickEvent : undefined}
      fullwidth={fullwidth ? "true" : "false"}
    >
      {children}
    </Container>
  );
};

export default SecondaryButton;
