import React from "react";
import { Spin } from "antd";
import styled from "@emotion/styled";

const Container = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  minHeight: "4rem",
}));

const LoadingSpinner = () => {
  return (
    <Container>
      <Spin />
    </Container>
  );
};

export default LoadingSpinner;
