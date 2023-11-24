import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  CustomForm,
  PhoneVerificationFields,
  SelectAllCheckBoxes,
  TextInput,
} from "@/components/ui/form";
import { PrimaryButton } from "@/components/ui/buttons";
import { FieldGroup, FormTitle } from "@/components/ui/form/CustomForm";
import {
  corpNamePH,
  emailPH,
  namePH,
  passwordConfirmPH,
  passwordPH,
  positionPH,
} from "@/lib/react-hook-form/validation/placeholderTexts";
import { zodJoin } from "@/lib/react-hook-form/validation/zodValidation";
import { useMutation } from "react-query";
import axios from "axios";
import { JOIN_API_URL } from "@/constants/apiUrls";

const Join = () => {
  const navigate = useNavigate();

  const termOptions = [
    { label: "이용 약관 동의 [필수]", value: "use_term" },
    { label: "개인정보 처리 방침 동의 [필수]", value: "privacy_policy" },
    { label: "개인정보 처리 방침 동의 [선택]", value: "personal_info" },
  ];

  const [checkedList, setCheckedList] = useState([]);

  const {
    control,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    resetField,
    setValue,
    setFocus,
    formState: { isSubmitted, errors },
  } = useForm({
    resolver: zodResolver(zodJoin),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      user_pw: "",
      password_confirm: "",
      user_name: "",
      phone: "",
      auth_code: "",
      company_name: "",
      user_position: "",
      phone_verified: false,
    },
  });

  const { mutate: userJoinFunction } = useMutation(
    (data) => axios.post(JOIN_API_URL, data),
    {
      onSuccess: () => {
        navigate("/join-complete");
      },
      onError: (error) => {
        if (error.response.status === 400) {
          // Email Exist Already
          setError("email", { message: "이미 가입된 이메일입니다." });
          setFocus("email");
        }
      },
    }
  );

  const joinSubmit = useCallback(
    (data) => {
      userJoinFunction(data);
    },
    [userJoinFunction]
  );

  return (
    <CustomForm submitEvent={handleSubmit(joinSubmit)}>
      <FormTitle>회원가입</FormTitle>

      <FieldGroup>
        <header>계정 정보</header>

        <TextInput name="email" control={control} placeholder={emailPH} />

        <TextInput
          name="user_pw"
          control={control}
          type="password"
          placeholder={passwordPH}
        />

        <TextInput
          name="password_confirm"
          control={control}
          type="password"
          placeholder={passwordConfirmPH}
        />
      </FieldGroup>

      <FieldGroup>
        <header>사용자 정보</header>

        <TextInput name="user_name" control={control} placeholder={namePH} />

        <PhoneVerificationFields
          control={control}
          clearErrors={clearErrors}
          setError={setError}
          resetField={resetField}
          setValue={setValue}
          watch={watch}
          errors={errors}
        />
      </FieldGroup>

      <FieldGroup>
        <header>기업 정보</header>

        <TextInput
          name="company_name"
          control={control}
          placeholder={corpNamePH}
        />

        <TextInput
          name="user_position"
          control={control}
          placeholder={positionPH}
        />
      </FieldGroup>

      <SelectAllCheckBoxes
        title="약관 동의"
        setCheckedList={setCheckedList}
        options={termOptions}
        checkedList={checkedList}
        isSubmitted={isSubmitted}
      />

      <PrimaryButton buttonType="submit" fullwidth>
        회원가입 신청
      </PrimaryButton>
    </CustomForm>
  );
};

export default Join;
