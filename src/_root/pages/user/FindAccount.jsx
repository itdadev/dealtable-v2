import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  CustomForm,
  PhoneVerificationFields,
  TextInput,
} from "@/components/ui/form";
import { FormTitle } from "@/components/ui/form/CustomForm";
import { PrimaryButton } from "@/components/ui/buttons";
import { zodFindAccount } from "@/lib/react-hook-form/validation/zodValidation";
import { namePH } from "@/lib/react-hook-form/validation/placeholderTexts";

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
    mode: "onSubmit",
    defaultValues: {
      name: "",
      phone: "",
      verification_code: "",
      phone_verified: false,
    },
  });

  const findAccountSubmit = useCallback(
    (data) => {
      if (data) {
        navigate("/change-password");
      }

      navigate("/find-account-fail");
    },
    [navigate]
  );

  return (
    <CustomForm submitEvent={handleSubmit(findAccountSubmit)}>
      <FormTitle>이메일 찾기 / 비밀번호 변경</FormTitle>

      <TextInput name="name" control={control} placeholder={namePH} />

      <PhoneVerificationFields
        control={control}
        clearErrors={clearErrors}
        setError={setError}
        resetField={resetField}
        setValue={setValue}
        watch={watch}
        errors={errors}
      />

      <PrimaryButton buttonType="submit" fullwidth>
        계정 찾기
      </PrimaryButton>
    </CustomForm>
  );
};

export default FindAccount;
