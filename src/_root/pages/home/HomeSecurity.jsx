import React from "react";

import { BorderButton } from "@/components/ui/buttons";
import {
  Home5Text1Contents,
  Home5Text2Contents,
  StartText,
} from "@/util/language-setting/texts/TranslatedTexts";
import { FadeToRight, Trail } from "@/components/ui/react-spring";

import {
  ButtonWrapper,
  HomeSectionDescWithLine,
  HomeSectionTextWrapper,
  StartButton,
} from "./Home";

const HomeSecurity = ({ active }) => {
  return (
    <ButtonWrapper>
      <HomeSectionTextWrapper>
        <FadeToRight active={active}>Deal DB</FadeToRight>
      </HomeSectionTextWrapper>

      <HomeSectionDescWithLine>
        <hr />

        <Trail active={active}>
          <Home5Text1Contents />

          <Home5Text2Contents />
        </Trail>
      </HomeSectionDescWithLine>

      <StartButton>
        <BorderButton linkTo="/login">
          <StartText />
        </BorderButton>
      </StartButton>
    </ButtonWrapper>
  );
};

export default HomeSecurity;
