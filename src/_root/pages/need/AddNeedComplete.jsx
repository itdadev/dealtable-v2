import React, { useEffect } from "react";
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
import { useLocation, useNavigate } from "react-router-dom";

const Description = styled.div(({ theme }) => ({
  color: theme.color.grey,
  fontSize: "1.6rem",
  lineHeight: 1.5,
}));

const AddNeedComplete = () => {
  const navigate = useNavigate();

  const { state } = useLocation();

  useEffect(() => {
    if (state === null || !state?.correctAccess) {
      navigate("/");
    }
  }, [navigate, state]);

  return (
    <CustomForm noGoBack>
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
