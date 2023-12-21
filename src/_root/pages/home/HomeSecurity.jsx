import React from "react";
import styled from "@emotion/styled";

import {
  ButtonWrapper,
  HomeSectionDescWithLine,
  HomeSectionSmallDesc,
  HomeSectionTextWrapper,
} from "./Home";
import { mq } from "@/lib/react-responsive/mediaQuery";
import { BorderButton } from "@/components/ui/buttons";
import {
  Home4Text1Contents,
  Home4Text1Title,
  Home4Text2Contents,
  Home4Text2Title,
  StartText,
} from "@/util/language-setting/texts/TranslatedTexts";

const TextBox = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "7.2rem",

  fontSize: "2rem",

  [mq("desktop")]: {
    fontSize: "3.2rem",
  },
}));

const HomeSecurity = () => {
  return (
    <ButtonWrapper smallGap>
      <HomeSectionTextWrapper>
        <header>Security</header>
      </HomeSectionTextWrapper>

      <HomeSectionDescWithLine>
        <hr />

        <TextBox>
          <div>
            <div>
              <Home4Text1Title />
            </div>

            <HomeSectionSmallDesc>
              <Home4Text1Contents />
            </HomeSectionSmallDesc>
          </div>

          <div>
            <div>
              <Home4Text2Title />
            </div>

            <HomeSectionSmallDesc>
              <Home4Text2Contents />
            </HomeSectionSmallDesc>
          </div>
        </TextBox>
      </HomeSectionDescWithLine>

      <BorderButton linkTo="/login">
        <StartText />
      </BorderButton>
    </ButtonWrapper>
  );
};

export default HomeSecurity;
