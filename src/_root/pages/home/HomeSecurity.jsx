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
  Home5Text1Contents,
  Home5Text1Title,
  Home5Text2Contents,
  Home5Text2Title,
  StartText,
} from "@/util/language-setting/texts/TranslatedTexts";

const TextBox = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "7.2rem",

  fontSize: "2rem",

  [mq("desktop")]: {
    fontSize: "2.8rem",
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
              <Home5Text1Title />
            </div>

            <HomeSectionSmallDesc>
              <Home5Text1Contents />
            </HomeSectionSmallDesc>
          </div>

          <div>
            <div>
              <Home5Text2Title />
            </div>

            <HomeSectionSmallDesc>
              <Home5Text2Contents />
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
