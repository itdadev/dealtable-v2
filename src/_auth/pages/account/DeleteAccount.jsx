import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CustomForm, TextInput } from "@/components/ui/form";
import { FieldGroup, FormTitle } from "@/components/ui/form/CustomForm";
import { PrimaryButton } from "@/components/ui/buttons";
import { zodDeleteAccount } from "@/lib/react-hook-form/validation/zodValidation";
import { currentPasswordPH } from "@/lib/react-hook-form/validation/placeholderTexts";

const DeleteAccount = () => {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(zodDeleteAccount),
    mode: "onSubmit",
    defaultValues: {
      password: "",
      password_confirm: "",
    },
  });

  const deleteAccountSubmit = useCallback(() => {}, []);

  return (
    <CustomForm submitEvent={handleSubmit(deleteAccountSubmit)}>
      <FieldGroup>
        <FormTitle>회원 탈퇴하기</FormTitle>

        <TextInput
          name="password"
          control={control}
          type="password"
          placeholder={currentPasswordPH}
        />
      </FieldGroup>

      <PrimaryButton fullwidth buttonType="submit">
        탈퇴하기
      </PrimaryButton>
    </CustomForm>
  );
};

export default DeleteAccount;
