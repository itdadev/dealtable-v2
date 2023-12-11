import React from "react";
import {
  ButtonWrapper,
  HomeSectionDescContainer,
  HomeSectionTextWrapper,
} from "./Home";
import { BorderButton } from "@/components/ui/buttons";

const HomeProfessional = () => {
  return (
    <ButtonWrapper>
      <HomeSectionTextWrapper>
        <header>Professional</header>
      </HomeSectionTextWrapper>

      <HomeSectionDescContainer>
        <div>DEALTABLE은 매각 및 인수 주관/자문, 기업가치평가 등</div>

        <div>Deal 전문 서비스를 제공하며 10만개 이상의</div>

        <div>기업DB를 축적한 중소기업 전문</div>

        <div>Deal Advisory, MMP가 만들고 운영합니다.</div>
      </HomeSectionDescContainer>

      <BorderButton linkTo="/login">시작하기</BorderButton>
    </ButtonWrapper>
  );
};

export default HomeProfessional;
