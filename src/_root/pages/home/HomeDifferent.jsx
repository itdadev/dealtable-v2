import React from "react";

import { BorderButton } from "@/components/ui/buttons";
import {
  Home1Text1,
  Home1Text2,
  Home1Text3,
  StartText,
} from "@/util/language-setting/texts/TranslatedTexts";
import { FadeToRight, Trail } from "@/components/ui/react-spring";

import {
  ButtonWrapper,
  HomeSectionDescContainer,
  HomeSectionTextWrapper,
  StartButton,
} from "./Home";

const HomeDifferent = ({ active }) => {
  return (
    <ButtonWrapper>
      <HomeSectionTextWrapper>
        <FadeToRight active={active}>Difficult</FadeToRight>
      </HomeSectionTextWrapper>

      <HomeSectionDescContainer>
        <Trail active={active}>
          <Home1Text1 />
          <Home1Text2 />
          <Home1Text3 />
        </Trail>
      </HomeSectionDescContainer>

      <StartButton>
        <BorderButton linkTo="/login">
          <StartText />
        </BorderButton>
      </StartButton>
    </ButtonWrapper>
  );
};

export default HomeDifferent;
