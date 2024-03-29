import React from "react";

import { BorderButton } from "@/components/ui/buttons";
import { FadeToRight, Trail } from "@/components/ui/react-spring";
import {
  Home2Text1,
  Home2Text2,
  Home2Text3,
  StartText,
} from "@/util/language-setting/texts/TranslatedTexts";

import {
  ButtonWrapper,
  HomeSectionDescContainer,
  HomeSectionTextWrapper,
  StartButton,
} from "./Home";

const HomeService = ({ active }) => {
  return (
    <ButtonWrapper>
      <HomeSectionTextWrapper>
        <FadeToRight active={active}>We are</FadeToRight>
      </HomeSectionTextWrapper>

      <HomeSectionDescContainer>
        <Trail active={active}>
          <Home2Text1 />

          <Home2Text2 />

          <Home2Text3 />
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

export default HomeService;
