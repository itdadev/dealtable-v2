import React from "react";

import { BorderButton } from "@/components/ui/buttons";
import { FadeToRight, Trail } from "@/components/ui/react-spring";
import {
  Home6Text1,
  Home6Text2,
  StartText,
} from "@/util/language-setting/texts/TranslatedTexts";

import {
  ButtonWrapper,
  HomeSectionDescContainer,
  HomeSectionTextWrapper,
  StartButton,
} from "./Home";

const HomeProfessional = ({ active }) => {
  return (
    <ButtonWrapper>
      <HomeSectionTextWrapper>
        <FadeToRight active={active}>Professional</FadeToRight>
      </HomeSectionTextWrapper>

      <HomeSectionDescContainer>
        <Trail active={active}>
          <Home6Text1 />

          <Home6Text2 />
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

export default HomeProfessional;
