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
import { ChangePasswordText } from "@/util/language-setting/texts/TranslatedTexts";
import {
  currentPasswordInvalid,
  samePasswordEntered,
} from "@/lib/react-hook-form/validation/inputErrorMessage";

const ChangeMyPassword = () => {
  const navigate = useNavigate();

  const { logoutUser } = useUserContext();

  const { control, handleSubmit, setError } = useForm({
    resolver: zodResolver(zodChangeMyPassword),
    mode: "onChange",
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
            message: currentPasswordInvalid,
          });
        }

        if (error.response.status === 409) {
          setError("new_pw", {
            message: samePasswordEntered,
          });
        }
      },
    },
  );

  const changePasswordSubmit = useCallback(
    (data) => {
      changeMyPasswordFunction(data);
    },
    [changeMyPasswordFunction],
  );

  return (
    <CustomForm submitEvent={handleSubmit(changePasswordSubmit)}>
      <FieldGroup>
        <FormDescription>
          <ChangePasswordText />
        </FormDescription>

        <CurrentPasswordField control={control} />

        <NewPasswordField control={control} />

        <ConfirmPasswordField control={control} />
      </FieldGroup>

      <ButtonWrapper>
        <PrimaryButton buttonType="submit">
          <ChangePasswordText />
        </PrimaryButton>
      </ButtonWrapper>
    </CustomForm>
  );
};

export default ChangeMyPassword;
