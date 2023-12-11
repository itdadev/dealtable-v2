import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.footer(({ theme, showFooter }) => ({
  display: showFooter ? "block" : "none",
  height: "18.8rem",
  background: theme.color.grey,
  color: "white",
}));

const Footer = ({ showFooter }) => {
  return <FooterContainer showFooter={showFooter}>Footer</FooterContainer>;
};

export default Footer;
