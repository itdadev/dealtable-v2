import React from "react";
import { Spin } from "antd";
import styled from "@emotion/styled";

const Container = styled.div(() => ({
  minHeight: "5.2rem",
}));

const LoadingSpinner = () => {
  return (
    <Container>
      <Spin />
    </Container>
  );
};

export default LoadingSpinner;
