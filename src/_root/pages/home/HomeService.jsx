import React from "react";

import { BorderButton } from "@/components/ui/buttons";

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
        <div>DEALTABLE은</div>

        <div>최적의 M&A 상대를 매칭해드리는</div>

        <div>서비스입니다.</div>
      </HomeSectionDescContainer>

      <BorderButton linkTo="/login">시작하기</BorderButton>
    </ButtonWrapper>
  );
};

export default HomeService;
