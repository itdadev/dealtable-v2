import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert } from "antd";

import {
  CustomForm,
  PhoneVerificationFields,
  SelectAllCheckBoxes,
} from "@/components/ui/form";
import { PrimaryButton } from "@/components/ui/buttons";
import { FieldGroup, FormTitle } from "@/components/ui/form/CustomForm";
import { JOIN_API_URL } from "@/constants/apiUrls";
import {
  CompanyNameField,
  ConfirmPasswordField,
  EmailField,
  PasswordField,
  UserNameField,
  UserPositionField,
} from "@/components/ui/fields/Fields";
import { zodJoin } from "@/lib/react-hook-form/validation/zodValidation";

const Join = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});

  const { state } = useLocation();

  useEffect(() => {
    if (state !== null && state.userData) {
      setUserData(state.userData);
    }
  }, [state]);

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
      user_key: "",
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

  useEffect(() => {
    if (userData?.user_key) {
      setValue("email", userData?.email);
      setValue("user_name", userData?.user_name);
      setValue("phone", userData?.phone);
      setValue("company_name", userData?.company_name);
      setValue("user_position", userData?.user_position);
      setValue("user_key", userData?.user_key);
    }
  }, [setValue, userData]);

  const joinSubmit = useCallback(
    (data) => {
      if (
        !checkedList.includes("use_term") ||
        !checkedList.includes("privacy_policy")
      ) {
        return;
      }

      userJoinFunction(data);
    },
    [checkedList, userJoinFunction]
  );

  return (
    <CustomForm submitEvent={handleSubmit(joinSubmit)}>
      <FormTitle>회원가입</FormTitle>

      {userData?.reject_reason && (
        <Alert
          message="계정의 회원가입이 아래의 사유로 승인되지 않았습니다. 회원가입을 다시 진행해주세요."
          description={userData?.reject_reason}
          type="warning"
          showIcon
        />
      )}

      <FieldGroup>
        <header>계정 정보</header>

        <EmailField control={control} />

        <PasswordField control={control} />

        <ConfirmPasswordField control={control} />
      </FieldGroup>

      <FieldGroup>
        <header>사용자 정보</header>

        <UserNameField control={control} />

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

        <CompanyNameField control={control} />

        <UserPositionField control={control} />
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
