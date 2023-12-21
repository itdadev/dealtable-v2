import React from "react";

import { BorderButton } from "@/components/ui/buttons";

import {
  Home4Text1,
  Home4Text2,
  Home4Text3,
  StartText,
} from "@/util/language-setting/texts/TranslatedTexts";

import {
  ButtonWrapper,
  HomeSectionDescWithLine,
  HomeSectionTextWrapper,
} from "./Home";

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
            <Home4Text1 />
          </div>

          <div>
            <Home4Text2 />
          </div>

          <div>
            <Home4Text3 />
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
