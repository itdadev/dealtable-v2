import React, { useEffect } from "react";
import styled from "@emotion/styled";

import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { CustomForm } from "@/components/ui/form";
import { FormDescription } from "@/components/ui/form/CustomForm";
import {
  ChangeAccountPasswordText,
  FindAccountFailDesc1Text,
  FindAccountFailDesc2Text,
  FindAccountFailText,
  LoginLongText,
} from "@/util/language-setting/texts/TranslatedTexts";

import { ButtonWrapper } from "./JoinComplete";
import { useLocation, useNavigate } from "react-router-dom";

const Description = styled.div(({ theme }) => ({
  color: theme.color.grey,
  fontSize: "1.6rem",
  lineHeight: 1.5,
}));

const FindAccountFail = () => {
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
          <FindAccountFailText />
        </FormDescription>

        <Description>
          <p>
            <FindAccountFailDesc1Text />
          </p>

          <p>
            <FindAccountFailDesc2Text />
          </p>
        </Description>

        <ButtonWrapper>
          <SecondaryButton type="primary" linkTo="/login">
            <LoginLongText />
          </SecondaryButton>

          <PrimaryButton type="primary" linkTo="/find-account">
            <ChangeAccountPasswordText />
          </PrimaryButton>
        </ButtonWrapper>
      </div>
    </CustomForm>
  );
};

export default FindAccountFail;
