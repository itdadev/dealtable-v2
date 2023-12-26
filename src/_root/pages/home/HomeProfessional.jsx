import React from "react";

import { BorderButton } from "@/components/ui/buttons";
import { FadeToRight, Trail } from "@/components/ui/react-spring";
import {
  Home6Text1,
  Home6Text2,
  Home6Text3,
  Home6Text4,
  StartText,
} from "@/util/language-setting/texts/TranslatedTexts";

import {
  ButtonWrapper,
  HomeSectionDescContainer,
  HomeSectionTextWrapper,
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

          <Home6Text3 />

          <Home6Text4 />
        </Trail>
      </HomeSectionDescContainer>

      <BorderButton linkTo="/login">
        <StartText />
      </BorderButton>
    </ButtonWrapper>
  );
};

export default HomeProfessional;
