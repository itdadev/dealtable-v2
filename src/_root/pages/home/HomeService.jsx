import React from "react";

import { BorderButton } from "@/components/ui/buttons";
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

const HomeService = () => {
  return (
    <ButtonWrapper>
      <HomeSectionTextWrapper>
        <header>Members</header>
      </HomeSectionTextWrapper>

      <HomeSectionDescContainer>
        <div>
          <Home2Text1 />
        </div>

        <div>
          <Home2Text2 />
        </div>

        <div>
          <Home2Text3 />
        </div>
      </HomeSectionDescContainer>

      <BorderButton linkTo="/login">
        <StartText />
      </BorderButton>
    </ButtonWrapper>
  );
};

export default HomeService;
