import React from "react";
import styled from "@emotion/styled";

import {
  HomeSectionDescWithLine,
  HomeSectionSmallDesc,
  HomeSectionTextWrapper,
} from "./Home";

const TextBox = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "7.2rem",
}));

const HomeSecurity = () => {
  return (
    <>
      <HomeSectionTextWrapper>
        <header>Security</header>
      </HomeSectionTextWrapper>

      <HomeSectionDescWithLine>
        <hr />

        <TextBox>
          <div>
            <div>공개 제한</div>

            <HomeSectionSmallDesc>
              내가 선택한 상대방에게만 Deal 정보가 공개됩니다.
            </HomeSectionSmallDesc>
          </div>

          <div>
            <div>NDA 계약 체결</div>

            <HomeSectionSmallDesc>
              내가 선택한 상대방에게만 Deal 정보가 공개됩니다.
            </HomeSectionSmallDesc>
          </div>
        </TextBox>
      </HomeSectionDescWithLine>
    </>
  );
};

export default HomeSecurity;
