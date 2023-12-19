import React from "react";
import styled from "@emotion/styled";

import {
  ButtonWrapper,
  HomeSectionDescWithLine,
  HomeSectionSmallDesc,
  HomeSectionTextWrapper,
} from "./Home";
import { mq } from "@/lib/react-responsive/mediaQuery";
import { BorderButton } from "@/components/ui/buttons";

const TextBox = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "7.2rem",

  fontSize: "2rem",

  [mq("desktop")]: {
    fontSize: "3.2rem",
  },
}));

const HomeSecurity = () => {
  return (
    <ButtonWrapper smallGap>
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
              매칭 된 상대방의 정보를 확인하기 위해서는 전자NDA계약 동의가
              필수입니다.
            </HomeSectionSmallDesc>
          </div>
        </TextBox>
      </HomeSectionDescWithLine>

      <BorderButton linkTo="/login">시작하기</BorderButton>
    </ButtonWrapper>
  );
};

export default HomeSecurity;
