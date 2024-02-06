import React, { useEffect } from "react";
import styled from "@emotion/styled";

import { PrimaryButton } from "@/components/ui/buttons";
import { CustomForm } from "@/components/ui/form";
import { FormDescription } from "@/components/ui/form/CustomForm";
import {
  GoToMainText,
  JoinRequestCompleteDesc1Text,
  JoinRequestCompleteDesc2Text,
  JoinRequestCompleteText,
} from "@/util/language-setting/texts/TranslatedTexts";
import { useLocation, useNavigate } from "react-router-dom";

const Description = styled.div(({ theme }) => ({
  color: theme.color.grey,
  fontSize: "1.6rem",
  lineHeight: 1.5,
}));

export const ButtonWrapper = styled.div(() => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "3.2rem",
  gap: "0 0.8rem",
}));

const JoinComplete = () => {
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
          <JoinRequestCompleteText />
        </FormDescription>

        <Description>
          <p>
            <JoinRequestCompleteDesc1Text />
          </p>

          <p>
            <JoinRequestCompleteDesc2Text />
          </p>
        </Description>

        <ButtonWrapper>
          <PrimaryButton linkTo="/" key="home">
            <GoToMainText />
          </PrimaryButton>
        </ButtonWrapper>
      </div>
    </CustomForm>
  );
};

export default JoinComplete;
