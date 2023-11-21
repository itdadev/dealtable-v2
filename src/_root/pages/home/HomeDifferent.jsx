import React from "react";

import { HomeSectionDescContainer, HomeSectionTextWrapper } from "./Home";

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
    </>
  );
};

export default HomeDifferent;
