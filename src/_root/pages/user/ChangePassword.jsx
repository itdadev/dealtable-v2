import React, { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { Divider, Flex } from "antd";

import { CustomForm } from "@/components/ui/form";
import {
  FieldGroup,
  FixedButtonContainer,
  FormDescription,
} from "@/components/ui/form/CustomForm";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { CHANGE_PW_API_URL } from "@/constants/apiUrls";
import {
  ConfirmPasswordField,
  NewPasswordField,
} from "@/components/ui/fields/Fields";
import { zodChangePassword } from "@/lib/react-hook-form/validation/zodValidation";
import {
  ChangePasswordText,
  FoundEmailAddressText,
  LoginLongText,
} from "@/util/language-setting/texts/TranslatedTexts";

const FoundEmailContainer = styled(Flex)(() => ({
  padding: "2rem 0 0",
  fontSize: "1.8rem",
}));

const ChangePassword = () => {
  const { state } = useLocation();
  console.log(state);

  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(zodChangePassword),
    mode: "onChange",
    defaultValues: {
      new_pw: "",
      password_confirm: "",
    },
  });

  const { mutate: changePasswordFunction } = useMutation(
    (data) =>
      axios.post(CHANGE_PW_API_URL, {
        ...data,
        enc_email: state?.encEmail,
        user_pw: data?.new_pw,
      }),
    {
      onSuccess: () => {
        navigate("/login", { state: { mutateStatus: "password" } });
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  const linkToLogin = useCallback(() => {
    navigate("/login", {
      state: {
        foundEmail: state?.foundEmail,
      },
    });
  }, [navigate, state?.foundEmail]);

  const changePasswordSubmit = useCallback(
    (data) => {
      changePasswordFunction(data);
    },
    [changePasswordFunction],
  );

  useEffect(() => {
    if (state === null || state?.enc_email === undefined) {
      navigate("/");
    }
  }, [navigate, state]);

  return (
    <CustomForm submitEvent={handleSubmit(changePasswordSubmit)} noGoBack>
      <div>
        <FormDescription>
          <FoundEmailAddressText />
        </FormDescription>

        <FoundEmailContainer align="center" justify="space-between">
          {state?.foundEmail}
        </FoundEmailContainer>
      </div>

      <Divider />

      <FieldGroup>
        <header>
          <ChangePasswordText />
        </header>

        <NewPasswordField control={control} />

        <ConfirmPasswordField control={control} />

        <FixedButtonContainer>
          <SecondaryButton
            buttonType="button"
            type="secondary"
            clickEvent={linkToLogin}
          >
            <LoginLongText />
          </SecondaryButton>

          <PrimaryButton buttonType="submit">
            <ChangePasswordText />
          </PrimaryButton>
        </FixedButtonContainer>
      </FieldGroup>
    </CustomForm>
  );
};

export default ChangePassword;
