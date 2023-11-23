import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { Divider } from "antd";

import { CustomForm, TextInput } from "@/components/ui/form";
import { FieldGroup } from "@/components/ui/form/CustomForm";
import { PrimaryButton } from "@/components/ui/buttons";
import { zodChangePassword } from "@/lib/react-hook-form/validation/zodValidation";
import {
  newPasswordPH,
  passwordConfirmPH,
} from "@/lib/react-hook-form/validation/placeholderTexts";

const FoundEmailContainer = styled.div(() => ({
  background: "lightblue",
  margin: "2rem 0",
  padding: "2rem",
  textAlign: "center",
  fontSize: "2rem",
}));

const ChangePassword = () => {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(zodChangePassword),
    mode: "onSubmit",
    defaultValues: {
      password: "",
      password_confirm: "",
    },
  });

  const linktoLogin = useCallback(() => {
    navigate("/login", {
      state: {
        foundEmail: "email@email.com",
      },
    });
  }, [navigate]);

  const changePasswordSubmit = useCallback(
    (data) => {
      if (data) {
        navigate("/login", {
          state: {
            findAccountSuccess: true,
          },
        });
      }
    },
    [navigate]
  );

  return (
    <CustomForm submitEvent={handleSubmit(changePasswordSubmit)}>
      <FieldGroup>
        <header>입력하신 정보와 일치하는 이메일입니다.</header>

        <p>가입하신 이메일은 아래와 같습니다.</p>

        <FoundEmailContainer>email@email.com</FoundEmailContainer>

        <PrimaryButton clickEvent={linktoLogin} fullwidth>
          로그인 하기
        </PrimaryButton>
      </FieldGroup>

      <Divider />

      <FieldGroup>
        <header>비밀번호 변경하기</header>

        <TextInput
          name="password"
          control={control}
          type="password"
          placeholder={newPasswordPH}
        />

        <TextInput
          name="password_confirm"
          control={control}
          type="password"
          placeholder={passwordConfirmPH}
        />

        <PrimaryButton fullwidth buttonType="submit">
          비밀번호 변경하기
        </PrimaryButton>
      </FieldGroup>
    </CustomForm>
  );
};

export default ChangePassword;
