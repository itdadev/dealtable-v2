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
  StartButton,
} from "./Home";

const HomeEasy = ({ active }) => {
  return (
    <ButtonWrapper>
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

      <StartButton>
        <BorderButton linkTo="/login">
          <StartText />
        </BorderButton>
      </StartButton>
    </ButtonWrapper>
  );
};

export default HomeEasy;
