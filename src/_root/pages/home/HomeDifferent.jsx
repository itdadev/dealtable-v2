import React from "react";
import styled from "@emotion/styled";

import { image } from "@/theme";
import { BorderButton } from "@/components/ui/buttons";

import { HomeSectionDescContainer, HomeSectionTextWrapper } from "./Home";

const ButtonWrapper = styled.div(() => ({
  marginTop: "14rem",
}));

const HomeDifferent = () => {
  return (
    <>
      <HomeSectionTextWrapper>
        <header>Different</header>
      </HomeSectionTextWrapper>

      <HomeSectionDescContainer>
        <div>회사를 팔고 싶고, 회사를 사고 싶어도</div>

        <div>조건에 맞는 대상을 찾는 것은</div>

        <div>매우 어려운 일이다</div>
      </HomeSectionDescContainer>

      <ButtonWrapper>
        <BorderButton linkTo="/service">
          <p>서비스 보기</p>

          <img src={image.rightLinkArrow.default} alt="" />
        </BorderButton>
      </ButtonWrapper>
    </>
  );
};

export default HomeDifferent;
