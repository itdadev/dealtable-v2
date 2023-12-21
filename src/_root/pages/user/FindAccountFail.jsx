import React from "react";

import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { CustomForm } from "@/components/ui/form";
import { FormDescription } from "@/components/ui/form/CustomForm";
import styled from "@emotion/styled";
import { ButtonWrapper } from "./JoinComplete";

const Description = styled.div(({ theme }) => ({
  color: theme.color.grey,
  fontSize: "1.6rem",
}));

const FindAccountFail = () => {
  return (
    <CustomForm noGoBack>
      <div
        title="이메일 찾기 / 비밀번호 변경"
        subTitle="해당 정보로 가입된 계정을 찾을 수 없습니다.
        정보를 다시 확인하고 시도해 주세요."
      >
        <FormDescription>계정 찾기 실패</FormDescription>
        <Description>
          <p>해당 정보로 가입된 계정을 찾을 수 없습니다.</p>

          <p>정보를 다시 확인하고 시도해 주세요.</p>
        </Description>

        <ButtonWrapper>
          <SecondaryButton type="primary" key="console" linkTo="/login">
            로그인 하기
          </SecondaryButton>

          <PrimaryButton type="primary" key="console" linkTo="/find-account">
            계정 및 비밀번호 변경
          </PrimaryButton>
        </ButtonWrapper>
      </div>
    </CustomForm>
  );
};

export default FindAccountFail;
