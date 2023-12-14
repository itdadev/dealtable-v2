import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CustomForm } from "@/components/ui/form";
import { CHANGE_USER_PW_API_URL } from "@/constants/apiUrls";
import {
  ConfirmPasswordField,
  CurrentPasswordField,
  NewPasswordField,
} from "@/components/ui/fields/Fields";
import { FieldGroup, FormDescription } from "@/components/ui/form/CustomForm";
import { useUserContext } from "@/context/AuthContext";
import { PrimaryButton } from "@/components/ui/buttons";
import { zodChangeMyPassword } from "@/lib/react-hook-form/validation/zodValidation";
import Interceptor from "@/lib/axios/AxiosInterceptor";
import { ButtonWrapper } from "@/_root/pages/user/JoinComplete";

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

        if (error.response.status === 409) {
          setError("user_pw", {
            message: "현재 비밀번호와 변경하려는 비밀 번호가 같습니다.",
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
        <FormDescription>비밀번호 변경하기</FormDescription>

        <CurrentPasswordField control={control} />

        <NewPasswordField control={control} />

        <ConfirmPasswordField control={control} />
      </FieldGroup>

      <ButtonWrapper>
        <PrimaryButton buttonType="submit">비밀번호 변경하기</PrimaryButton>
      </ButtonWrapper>
    </CustomForm>
  );
};

export default ChangeMyPassword;
