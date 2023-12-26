import React, { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

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
} from "./Home";

const HomeDifferent = ({ active }) => {
  return (
    <ButtonWrapper>
      <HomeSectionTextWrapper>
        <FadeToRight active={active}>Different</FadeToRight>
      </HomeSectionTextWrapper>

      <HomeSectionDescContainer>
        <Trail active={active}>
          <Home1Text1 />
          <Home1Text2 />
          <Home1Text3 />
        </Trail>
      </HomeSectionDescContainer>

      <BorderButton linkTo="/login">
        <StartText />
      </BorderButton>
    </ButtonWrapper>
  );
};

export default HomeDifferent;
