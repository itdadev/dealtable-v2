import React from "react";

import { BorderButton } from "@/components/ui/buttons";
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

const HomeProfessional = () => {
  return (
    <ButtonWrapper>
      <HomeSectionTextWrapper>
        <header>Professional</header>
      </HomeSectionTextWrapper>

      <HomeSectionDescContainer>
        <div>
          <Home6Text1 />
        </div>

        <div>
          <Home6Text2 />
        </div>

        <div>
          <Home6Text3 />
        </div>

        <div>
          <Home6Text4 />
        </div>
      </HomeSectionDescContainer>

      <BorderButton linkTo="/login">
        <StartText />
      </BorderButton>
    </ButtonWrapper>
  );
};

export default HomeProfessional;
