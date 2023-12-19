import React from "react";
import { Alert } from "antd";
import styled from "@emotion/styled";

const Container = styled(Alert)(({ theme }) => ({
  color: theme.color.error,
  borderRadius: 0,
}));

const AntdAlert = ({ message, type }) => {
  return <Container message={message} type={type} />;
};

export default AntdAlert;
