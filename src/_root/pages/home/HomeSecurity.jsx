import React from "react";
import { HomeSectionDescContainer, HomeSectionTextWrapper } from "./Home";

const HomeSecurity = () => {
  return (
    <>
      <HomeSectionTextWrapper>
        <header>Security</header>
      </HomeSectionTextWrapper>

      <HomeSectionDescContainer>
        <div>공개 제한</div>

        <div>NDA 계약 체결</div>
      </HomeSectionDescContainer>
    </>
  );
};

export default HomeSecurity;
