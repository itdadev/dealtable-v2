import React from "react";
import { FadeToRight, Trail } from "@/components/ui/react-spring";
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

const HomeEasy = ({ active }) => {
  return (
    <ButtonWrapper smallGap>
      <HomeSectionTextWrapper>
        <FadeToRight active={active}>Easy</FadeToRight>
      </HomeSectionTextWrapper>

      <HomeSectionDescWithLine>
        <hr />

        <Trail active={active}>
          <Home4Text1 />

          <Home4Text2 />

          <Home4Text3 />
        </Trail>
      </HomeSectionDescWithLine>

      <BorderButton linkTo="/login">
        <StartText />
      </BorderButton>
    </ButtonWrapper>
  );
};

export default HomeEasy;
