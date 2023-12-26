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
} from "./Home";

const HomeService = ({ active }) => {
  return (
    <ButtonWrapper>
      <HomeSectionTextWrapper>
        <FadeToRight active={active}>Service</FadeToRight>
      </HomeSectionTextWrapper>

      <HomeSectionDescContainer>
        <Trail active={active}>
          <Home2Text1 />
          <Home2Text2 />
          <Home2Text3 />
        </Trail>
      </HomeSectionDescContainer>

      <BorderButton linkTo="/login">
        <StartText />
      </BorderButton>
    </ButtonWrapper>
  );
};

export default HomeService;
