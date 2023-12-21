import React from "react";

import { BorderButton } from "@/components/ui/buttons";
import {
  Home1Text1,
  Home1Text2,
  Home1Text3,
  StartText,
} from "@/util/language-setting/texts/TranslatedTexts";

import {
  ButtonWrapper,
  HomeSectionDescContainer,
  HomeSectionTextWrapper,
} from "./Home";

const HomeDifferent = () => {
  return (
    <ButtonWrapper>
      <HomeSectionTextWrapper>
        <header>Different</header>
      </HomeSectionTextWrapper>

      <HomeSectionDescContainer>
        <div>
          <Home1Text1 />
        </div>

        <div>
          <Home1Text2 />
        </div>

        <div>
          <Home1Text3 />
        </div>
      </HomeSectionDescContainer>

      <BorderButton linkTo="/login">
        <StartText />
      </BorderButton>
    </ButtonWrapper>
  );
};

export default HomeDifferent;
