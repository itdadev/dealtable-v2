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
import { FadeToRight, Trail } from "@/components/ui/react-spring";

const TextBox = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "7.2rem",

  fontSize: "2rem",

  [mq("desktop")]: {
    fontSize: "2.8rem",
  },
}));

const HomeSecurity = ({ active }) => {
  return (
    <ButtonWrapper smallGap>
      <HomeSectionTextWrapper>
        <FadeToRight active={active}>Security</FadeToRight>
      </HomeSectionTextWrapper>

      <HomeSectionDescWithLine>
        <hr />

        <TextBox>
          <div>
            <div>
              <Home5Text1Title />
            </div>

            <HomeSectionSmallDesc>
              <Trail active={active}>
                <Home5Text1Contents />
              </Trail>
            </HomeSectionSmallDesc>
          </div>

          <div>
            <div>
              <Home5Text2Title />
            </div>

            <HomeSectionSmallDesc>
              <Trail active={active}>
                <Home5Text2Contents />
              </Trail>
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
