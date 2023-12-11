import React from "react";

import { BorderButton } from "@/components/ui/buttons";

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
        <div>회사를 팔고 싶고, 회사를 사고 싶어도</div>

        <div>조건에 맞는 대상을 찾는 것은</div>

        <div>매우 어려운 일이다</div>
      </HomeSectionDescContainer>

      <BorderButton linkTo="/login">시작하기</BorderButton>
    </ButtonWrapper>
  );
};

export default HomeDifferent;
