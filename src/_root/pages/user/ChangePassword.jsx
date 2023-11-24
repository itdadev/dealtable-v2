import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import { useMutation } from "react-query";
import axios from "axios";
import { CHANGE_PW_API_URL } from "@/constants/apiUrls";

const FoundEmailContainer = styled.div(() => ({
  background: "lightblue",
  margin: "2rem 0",
  padding: "2rem",
  textAlign: "center",
  fontSize: "2rem",
}));

const ChangePassword = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(zodChangePassword),
    mode: "onSubmit",
    defaultValues: {
      new_pw: "",
      password_confirm: "",
    },
  });
  console.log(errors);

  const { mutate: changePasswordFunction } = useMutation(
    (data) =>
      axios.post(CHANGE_PW_API_URL, { ...data, enc_email: state?.encEmail }),
    {
      onSuccess: () => {
        navigate("/login", {
          state: {
            findAccountSuccess: true,
          },
        });
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const linktoLogin = useCallback(() => {
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
    [changePasswordFunction]
  );

  return (
    <CustomForm submitEvent={handleSubmit(changePasswordSubmit)}>
      <FieldGroup>
        <header>입력하신 정보와 일치하는 이메일입니다.</header>

        <p>가입하신 이메일은 아래와 같습니다.</p>

        <FoundEmailContainer>{state?.foundEmail}</FoundEmailContainer>

        <PrimaryButton clickEvent={linktoLogin} fullwidth>
          로그인 하기
        </PrimaryButton>
      </FieldGroup>

      <Divider />

      <FieldGroup>
        <header>비밀번호 변경하기</header>

        <TextInput
          name="user_pw"
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
