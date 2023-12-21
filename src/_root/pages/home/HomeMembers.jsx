import React from "react";

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

const HomeMembers = () => {
  return (
    <ButtonWrapper>
      <HomeSectionTextWrapper>
        <header>Members</header>
      </HomeSectionTextWrapper>

      <HomeSectionDescContainer>
        <div>
          <Home3Text1 />
        </div>

        <div>
          <Home3Text2 />
        </div>

        <div>
          <Home3Text3 />
        </div>
      </HomeSectionDescContainer>

      <BorderButton linkTo="/login">
        <StartText />
      </BorderButton>
    </ButtonWrapper>
  );
};

export default HomeMembers;
