import React from "react";
import { Divider, Flex } from "antd";
import styled from "@emotion/styled";

import { image } from "@/theme";
import {
  BrandNameText,
  CEONameText,
  CEONumberText,
  CompanyAddressText,
} from "@/util/language-setting/texts/TranslatedTexts";
import { useMediaQuery } from "react-responsive";
import { mq } from "@/lib/react-responsive/mediaQuery";

const FooterContainer = styled.footer(({ theme, showFooter }) => ({
  display: showFooter ? "flex" : "none",
  width: "100%",
  height: "18.8rem",
  padding: "2rem",
  background: theme.color.grey,
  color: "white",
  fontSize: "1.2rem",

  [mq("desktop")]: {
    padding: "4rem",
  },
}));

const CompanyName = styled.div(() => ({
  fontSize: "1.6rem",
}));

const Footer = ({ showFooter }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <FooterContainer showFooter={showFooter}>
      <Flex
        align={isDesktop ? "center" : "flex-start"}
        justify="space-between"
        style={{ width: "100%" }}
        vertical={!isDesktop}
      >
        <Flex vertical gap="small">
          <CompanyName>
            <BrandNameText />
          </CompanyName>

          <div>
            <CEONameText />

            <Divider
              type="vertical"
              style={{
                borderInlineStart: "1px solid rgba(255, 255, 255, 0.5)",
              }}
            />

            <CompanyAddressText />
          </div>

          <div>
            email: mmp@mmp.co.kr
            <Divider
              type="vertical"
              style={{
                borderInlineStart: "1px solid rgba(255, 255, 255, 0.5)",
              }}
            />
            <CEONumberText />
          </div>
        </Flex>

        <img src={image.whiteLogo.default} alt="" width={120} height={13} />
      </Flex>
    </FooterContainer>
  );
};

export default Footer;
