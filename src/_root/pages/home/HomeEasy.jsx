import React from "react";

import { BorderButton } from "@/components/ui/buttons";

import {
  ButtonWrapper,
  HomeSectionDescWithLine,
  HomeSectionTextWrapper,
} from "./Home";
import {
  Home3Text1,
  Home3Text2,
  Home3Text3,
  StartText,
} from "@/util/language-setting/texts/TranslatedTexts";

const HomeEasy = () => {
  return (
    <ButtonWrapper smallGap>
      <HomeSectionTextWrapper>
        <header>Easy</header>
      </HomeSectionTextWrapper>

      <HomeSectionDescWithLine>
        <hr />

        <div>
          <div>
            <Home3Text1 />
          </div>

          <div>
            <Home3Text2 />
          </div>

          <div>
            <Home3Text3 />
          </div>
        </div>
      </HomeSectionDescWithLine>

      <BorderButton linkTo="/login">
        <StartText />
      </BorderButton>
    </ButtonWrapper>
  );
};

export default HomeEasy;
