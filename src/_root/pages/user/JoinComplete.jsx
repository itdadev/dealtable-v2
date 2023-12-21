import React from "react";

import { PrimaryButton } from "@/components/ui/buttons";
import { CustomForm } from "@/components/ui/form";
import { FormDescription } from "@/components/ui/form/CustomForm";
import styled from "@emotion/styled";
import { mq } from "@/lib/react-responsive/mediaQuery";

const Description = styled.div(({ theme }) => ({
  color: theme.color.grey,
  fontSize: "1.6rem",
}));

export const ButtonWrapper = styled.div(() => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "3.2rem",
  gap: "0 0.8rem",

  [mq("desktop")]: {
    marginTop: "6.4rem",
  },
}));

const JoinComplete = () => {
  return (
    <CustomForm noGoBack>
      <div>
        <FormDescription>회원가입 신청완료</FormDescription>

        <Description>
          <p>회원가입 신청이 완료 되었습니다.</p>

          <p>3~5일 이내로 승인이 완료됩니다.</p>
        </Description>

        <ButtonWrapper>
          <PrimaryButton linkTo="/" key="home">
            메인으로
          </PrimaryButton>
        </ButtonWrapper>
      </div>
    </CustomForm>
  );
};

export default JoinComplete;
