import React from "react";
import { Divider, Flex } from "antd";
import styled from "@emotion/styled";

import { image } from "@/theme";

const FooterContainer = styled.footer(({ theme, showFooter }) => ({
  display: showFooter ? "flex" : "none",
  width: "100%",
  height: "18.8rem",
  padding: "4rem",
  background: theme.color.grey,
  color: "white",
  fontSize: "1.2rem",
}));

const CompanyName = styled.div(() => ({
  fontSize: "1.6rem",
}));

const Footer = ({ showFooter }) => {
  return (
    <FooterContainer showFooter={showFooter}>
      <Flex align="center" justify="space-between" style={{ width: "100%" }}>
        <Flex vertical gap="small">
          <CompanyName>(주)딜테이블</CompanyName>

          <div>
            대표: 김테이블
            <Divider
              type="vertical"
              style={{
                borderInlineStart: "1px solid rgba(255, 255, 255, 0.5)",
              }}
            />
            주소: 서울시 강남구 강남대로 123
          </div>

          <div>
            email: mmp@mmp.co.kr
            <Divider
              type="vertical"
              style={{
                borderInlineStart: "1px solid rgba(255, 255, 255, 0.5)",
              }}
            />
            대표번호: 02-1234-5678
          </div>
        </Flex>

        <img src={image.whiteLogo.default} alt="" width={120} height={13} />
      </Flex>
    </FooterContainer>
  );
};

export default Footer;
