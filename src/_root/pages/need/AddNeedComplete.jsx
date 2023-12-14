import React from "react";
import styled from "@emotion/styled";

import { PrimaryButton } from "@/components/ui/buttons";
import { CustomForm } from "@/components/ui/form";
import { FormDescription } from "@/components/ui/form/CustomForm";

import { ButtonWrapper } from "../user/JoinComplete";

const Description = styled.div(({ theme }) => ({
  color: theme.color.grey,
  fontSize: "1.6rem",
}));

const AddNeedComplete = () => {
  return (
    <CustomForm>
      <div>
        <FormDescription>인수 니즈 생성 완료</FormDescription>

        <Description>
          <p>인수 니즈 생성이 완료되었습니다.</p>

          <p>3~5일 이내로 검토 후 연락드리겠습니다.</p>
        </Description>

        <ButtonWrapper>
          <PrimaryButton linkTo="/need">목록으로</PrimaryButton>
        </ButtonWrapper>
      </div>
    </CustomForm>
  );
};

export default AddNeedComplete;
