import React from "react";
import styled from "@emotion/styled";

import { PrimaryButton } from "@/components/ui/buttons";
import { CustomForm } from "@/components/ui/form";
import { FormDescription } from "@/components/ui/form/CustomForm";
import {
  NeedsAddComplete1Text,
  NeedsAddComplete2Text,
  NeedsAddCompleteText,
  ToTheListText,
} from "@/util/language-setting/texts/TranslatedTexts";

import { ButtonWrapper } from "../user/JoinComplete";

const Description = styled.div(({ theme }) => ({
  color: theme.color.grey,
  fontSize: "1.6rem",
}));

const AddNeedComplete = () => {
  return (
    <CustomForm>
      <div>
        <FormDescription>
          <NeedsAddCompleteText />
        </FormDescription>

        <Description>
          <p>
            <NeedsAddComplete1Text />
          </p>

          <p>
            <NeedsAddComplete2Text />
          </p>
        </Description>

        <ButtonWrapper>
          <PrimaryButton linkTo="/need">
            <ToTheListText />
          </PrimaryButton>
        </ButtonWrapper>
      </div>
    </CustomForm>
  );
};

export default AddNeedComplete;
