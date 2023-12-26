import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.footer(({ theme, showFooter }) => ({
  display: showFooter ? "block" : "none",
  width: "100%",
  height: "18.8rem",
  background: "pink",
  color: "white",
}));

const Footer = ({ showFooter }) => {
  return <FooterContainer showFooter={showFooter}>Footer</FooterContainer>;
};

export default Footer;
