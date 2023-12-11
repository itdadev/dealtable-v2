import React, { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { Divider } from "antd";

import { CustomForm } from "@/components/ui/form";
import { FieldGroup } from "@/components/ui/form/CustomForm";
import { PrimaryButton } from "@/components/ui/buttons";
import { CHANGE_PW_API_URL } from "@/constants/apiUrls";
import {
  ConfirmPasswordField,
  NewPasswordField,
} from "@/components/ui/fields/Fields";
import { zodChangePassword } from "@/lib/react-hook-form/validation/zodValidation";

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

  const { control, handleSubmit } = useForm({
    resolver: zodResolver(zodChangePassword),
    mode: "onSubmit",
    defaultValues: {
      new_pw: "",
      password_confirm: "",
    },
  });

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

        <NewPasswordField control={control} />

        <ConfirmPasswordField control={control} />

        <PrimaryButton fullwidth buttonType="submit">
          비밀번호 변경하기
        </PrimaryButton>
      </FieldGroup>
    </CustomForm>
  );
};

export default ChangePassword;
