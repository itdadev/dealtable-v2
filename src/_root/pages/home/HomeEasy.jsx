import React from "react";

import { BorderButton } from "@/components/ui/buttons";

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
          <div>팔고 싶은 회사,</div>

          <div>사고 싶은 회사의 정보만</div>

          <div>입력하면 직접 탐색할 필요없이 매칭을 받을 수 있습니다.</div>
        </div>
      </HomeSectionDescWithLine>

      <BorderButton linkTo="/login">시작하기</BorderButton>
    </ButtonWrapper>
  );
};

export default HomeEasy;
