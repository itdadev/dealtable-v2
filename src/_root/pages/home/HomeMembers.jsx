import React from "react";

import { FadeToRight, Trail } from "@/components/ui/react-spring";
import { BorderButton } from "@/components/ui/buttons";
import {
  Home3Text1,
  Home3Text2,
  Home3Text3,
  StartText,
} from "@/util/language-setting/texts/TranslatedTexts";

import {
  ButtonWrapper,
  HomeSectionDescContainer,
  HomeSectionTextWrapper,
} from "./Home";

const HomeMembers = ({ active }) => {
  return (
    <ButtonWrapper>
      <HomeSectionTextWrapper>
        <FadeToRight active={active}>M&A Buy side</FadeToRight>
      </HomeSectionTextWrapper>

      <HomeSectionDescContainer>
        <Trail active={active}>
          <Home3Text1 />

          <Home3Text2 />

          <Home3Text3 />
        </Trail>
      </HomeSectionDescContainer>

      <BorderButton linkTo="/login">
        <StartText />
      </BorderButton>
    </ButtonWrapper>
  );
};

export default HomeMembers;
