import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { CustomForm, PhoneVerificationFields } from "@/components/ui/form";
import { FormDescription } from "@/components/ui/form/CustomForm";
import { UserNameField } from "@/components/ui/fields/Fields";
import { PrimaryButton } from "@/components/ui/buttons";
import { FIND_ACCOUNT_API_URL } from "@/constants/apiUrls";
import { zodFindAccount } from "@/lib/react-hook-form/validation/zodValidation";
import { ButtonWrapper } from "./JoinComplete";
import {
  ChangeEmailPasswordText,
  FindAccountText,
} from "@/util/language-setting/texts/TranslatedTexts";

const FindAccount = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    resetField,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(zodFindAccount),
    mode: "onChange",
    defaultValues: {
      user_name: "",
      phone: "",
      auth_code: "",
      phone_verified: false,
    },
  });

  const { mutate: findAccountFunction } = useMutation(
    async (data) => {
      const { status, data: result } = await axios.post(
        FIND_ACCOUNT_API_URL,
        data,
      );

      if (status === 200) {
        return result.data;
      }
    },
    {
      onSuccess: (data) => {
        navigate("/change-password", {
          state: { foundEmail: data.email, encEmail: data.enc_email },
        });
      },
      onError: (error) => {
        console.log(error);
        navigate("/find-account-fail");
      },
    },
  );

  const findAccountSubmit = useCallback(
    (data) => {
      findAccountFunction(data);
    },
    [findAccountFunction],
  );

  return (
    <CustomForm submitEvent={handleSubmit(findAccountSubmit)}>
      <FormDescription>
        <ChangeEmailPasswordText />
      </FormDescription>

      <UserNameField control={control} />

      <PhoneVerificationFields
        control={control}
        clearErrors={clearErrors}
        setError={setError}
        resetField={resetField}
        setValue={setValue}
        watch={watch}
        errors={errors}
        findAccount
      />

      <ButtonWrapper>
        <PrimaryButton buttonType="submit">
          <FindAccountText />
        </PrimaryButton>
      </ButtonWrapper>
    </CustomForm>
  );
};

export default FindAccount;
