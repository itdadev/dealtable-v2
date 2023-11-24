import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CustomForm, TextInput } from "@/components/ui/form";
import { FieldGroup, FormTitle } from "@/components/ui/form/CustomForm";
import { PrimaryButton } from "@/components/ui/buttons";
import { zodChangeMyPassword } from "@/lib/react-hook-form/validation/zodValidation";
import {
  currentPasswordPH,
  newPasswordPH,
  passwordConfirmPH,
} from "@/lib/react-hook-form/validation/placeholderTexts";
import { useMutation } from "react-query";
import Interceptor from "@/lib/axios/AxiosInterceptor";
import { CHANGE_USER_PW_API_URL } from "@/constants/apiUrls";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "@/context/AuthContext";

const ChangeMyPassword = () => {
  const navigate = useNavigate();

  const { logoutUser } = useUserContext();

  const { control, handleSubmit, setError } = useForm({
    resolver: zodResolver(zodChangeMyPassword),
    mode: "onSubmit",
    defaultValues: {
      user_pw: "",
      new_pw: "",
      password_confirm: "",
    },
  });

  const { mutate: changeMyPasswordFunction } = useMutation(
    (data) => Interceptor.patch(CHANGE_USER_PW_API_URL, data),
    {
      onSuccess: () => {
        logoutUser();

        navigate("/login", { state: { mutateStatus: "password" } });
      },
      onError: (error) => {
        if (error.response.status === 400) {
          setError("user_pw", {
            message: "현재 비밀번호와 일치하지 않습니다.",
          });
        }
      },
    }
  );

  const changePasswordSubmit = useCallback(
    (data) => {
      changeMyPasswordFunction(data);
    },
    [changeMyPasswordFunction]
  );

  return (
    <CustomForm submitEvent={handleSubmit(changePasswordSubmit)}>
      <FieldGroup>
        <FormTitle>비밀번호 변경하기</FormTitle>

        <TextInput
          name="user_pw"
          control={control}
          type="password"
          placeholder={currentPasswordPH}
        />

        <TextInput
          name="new_pw"
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
      </FieldGroup>

      <PrimaryButton fullwidth buttonType="submit">
        비밀번호 변경하기
      </PrimaryButton>
    </CustomForm>
  );
};

export default ChangeMyPassword;
