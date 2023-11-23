import React from "react";

import { HomeSectionDescWithLine, HomeSectionTextWrapper } from "./Home";

const HomeEasy = () => {
  return (
    <>
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
    </>
  );
};

export default HomeEasy;
