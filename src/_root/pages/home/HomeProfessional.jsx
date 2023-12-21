import React from "react";

import { BorderButton } from "@/components/ui/buttons";
import {
  Home5Text1,
  Home5Text2,
  Home5Text3,
  Home5Text4,
  StartText,
} from "@/util/language-setting/texts/TranslatedTexts";

import {
  ButtonWrapper,
  HomeSectionDescContainer,
  HomeSectionTextWrapper,
} from "./Home";

const HomeProfessional = () => {
  return (
    <ButtonWrapper>
      <HomeSectionTextWrapper>
        <header>Professional</header>
      </HomeSectionTextWrapper>

      <HomeSectionDescContainer>
        <div>
          <Home5Text1 />
        </div>

        <div>
          <Home5Text2 />
        </div>

        <div>
          <Home5Text3 />
        </div>

        <div>
          <Home5Text4 />
        </div>
      </HomeSectionDescContainer>

      <BorderButton linkTo="/login">
        <StartText />
      </BorderButton>
    </ButtonWrapper>
  );
};

export default HomeProfessional;
