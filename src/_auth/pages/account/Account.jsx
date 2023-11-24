import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Flex, Spin, notification } from "antd";

import {
  CustomForm,
  PhoneVerificationFields,
  TextInput,
} from "@/components/ui/form";
import { FieldGroup, FormTitle } from "@/components/ui/form/CustomForm";
import { MUTATE_USER_INFO_API_URL } from "@/constants/apiUrls";
import { PrimaryButton } from "@/components/ui/buttons";
import { zodEditAccount } from "@/lib/react-hook-form/validation/zodValidation";
import {
  corpNamePH,
  emailPH,
  namePH,
  phoneNumPH,
  positionPH,
} from "@/lib/react-hook-form/validation/placeholderTexts";
import Interceptor from "@/lib/axios/AxiosInterceptor";

const Account = ({ edit }) => {
  const { state } = useLocation();

  const [phoneChanged, setPhoneChanged] = useState(false);

  const [api, contextHolder] = notification.useNotification();

  const navigate = useNavigate();

  const getUserDetail = useCallback(async () => {
    const { status, data } = await Interceptor?.get(
      `${MUTATE_USER_INFO_API_URL}`
    );

    if (status === 200) {
      return data.data;
    }
  }, []);

  const { data: userDetail, isLoading } = useQuery(
    ["userDetail"],
    getUserDetail
  );

  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    resetField,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(zodEditAccount),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      user_name: "",
      phone: "",
      auth_code: "",
      company_name: "",
      user_position: "",
      phone_verified: false,
      phone_changed: phoneChanged,
    },
  });

  useEffect(() => {
    const subscription = watch((value) => {
      if (value.phone !== userDetail?.phone) {
        setPhoneChanged(true);
      } else {
        setPhoneChanged(false);
      }
    });
    return () => subscription.unsubscribe();
  }, [setValue, userDetail, watch]);

  useEffect(() => {
    if (phoneChanged) {
      setValue("phone_changed", true);
    } else {
      setValue("phone_changed", false);
    }
  }, [phoneChanged, setValue]);

  useEffect(() => {
    if (userDetail) {
      setValue("email", userDetail?.email);
      setValue("user_name", userDetail?.user_name);
      setValue("phone", userDetail?.phone);
      setValue("company_name", userDetail?.company_name);
      setValue("user_position", userDetail?.user_position);
    }
  }, [setValue, userDetail]);

  const { mutate: editUserAccountFunction } = useMutation(
    (data) => Interceptor.patch(MUTATE_USER_INFO_API_URL, data),
    {
      onSuccess: () => {
        navigate("/account", { state: { mutateStatus: "account" } });
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const changeAccountSubmit = useCallback(
    (data) => {
      editUserAccountFunction(data);
    },
    [editUserAccountFunction]
  );

  useEffect(() => {
    if (state?.mutateStatus === "account") {
      api.success({
        message: "계정 정보 수정",
        description: "계정 정보가 성공적으로 수정되었습니다.",
        duration: 3,
      });
    }
  }, [api, state?.mutateStatus]);

  useEffect(() => {
    window.history.replaceState({}, document.title);
  }, []);

  return (
    <CustomForm submitEvent={handleSubmit(changeAccountSubmit)}>
      {contextHolder}
      <FormTitle>계정 관리</FormTitle>

      <Flex justify="flex-end" gap="small">
        {!edit && <Button href="/change-account">기본 정보 변경</Button>}

        <Button href="/change-my-password">비밀번호 변경</Button>
      </Flex>

      {isLoading ? (
        <Spin />
      ) : (
        <>
          <FieldGroup>
            <header>계정 정보</header>

            <TextInput
              name="email"
              control={control}
              placeholder={emailPH}
              readOnly
            />
          </FieldGroup>

          <FieldGroup>
            <header>사용자 정보</header>

            <TextInput
              name="user_name"
              control={control}
              placeholder={namePH}
              readOnly={!edit}
            />

            {edit ? (
              <PhoneVerificationFields
                control={control}
                clearErrors={clearErrors}
                setError={setError}
                resetField={resetField}
                setValue={setValue}
                watch={watch}
                errors={errors}
                initalPhoneValue={userDetail?.phone}
              />
            ) : (
              <TextInput
                name="phone"
                control={control}
                placeholder={phoneNumPH}
                readOnly={!edit}
              />
            )}
          </FieldGroup>

          <FieldGroup>
            <header>기업 정보 변경</header>

            <TextInput
              name="company_name"
              control={control}
              placeholder={corpNamePH}
              readOnly={!edit}
            />

            <TextInput
              name="user_position"
              control={control}
              placeholder={positionPH}
              readOnly={!edit}
            />
          </FieldGroup>
        </>
      )}

      {edit && (
        <PrimaryButton buttonType="submit" fullwidth>
          계정 정보 변경
        </PrimaryButton>
      )}

      {!edit && (
        <Flex justify="flex-end" gap="small">
          <Button danger href="/delete-account">
            탈퇴하기
          </Button>
        </Flex>
      )}
    </CustomForm>
  );
};

export default Account;
