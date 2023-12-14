import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { Flex, Spin, notification } from "antd";
import styled from "@emotion/styled";

import { CustomForm, PhoneVerificationFields } from "@/components/ui/form";
import { FieldGroup, FormDescription } from "@/components/ui/form/CustomForm";
import { MUTATE_USER_INFO_API_URL } from "@/constants/apiUrls";
import {
  CompanyNameField,
  EmailField,
  PhoneField,
  UserNameField,
  UserPositionField,
} from "@/components/ui/fields/Fields";
import { useUserContext } from "@/context/AuthContext";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { zodEditAccount } from "@/lib/react-hook-form/validation/zodValidation";
import Interceptor from "@/lib/axios/AxiosInterceptor";

const LinkText = styled(Link)(({ theme }) => ({
  color: theme.color.grey,
  fontSize: "1.6rem",
}));

const Account = ({ edit }) => {
  const { state } = useLocation();

  const { logoutUser } = useUserContext();

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
    async (data) => {
      const { data: result, status } = await Interceptor.patch(
        MUTATE_USER_INFO_API_URL,
        data
      );

      if (status === 200) {
        return result;
      }
    },
    {
      onSuccess: (result) => {
        if (result.data.logout) {
          logoutUser();

          navigate("/login", { state: { mutateStatus: "editAccount" } });

          return;
        }

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

      <FormDescription>계정 관리</FormDescription>

      {isLoading ? (
        <Spin />
      ) : (
        <>
          <FieldGroup>
            <EmailField control={control} readOnly={true} />
          </FieldGroup>

          <FieldGroup>
            <header>사용자 정보</header>

            <UserNameField control={control} readOnly={!edit} />

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
              <PhoneField control={control} readOnly={!edit} />
            )}
          </FieldGroup>

          <FieldGroup>
            <header>기업 정보 변경</header>

            <CompanyNameField readOnly={!edit} control={control} />

            <UserPositionField readOnly={!edit} control={control} />
          </FieldGroup>
        </>
      )}

      {edit && (
        <Flex align="center" justify="space-between">
          <LinkText to="/change-my-password">비밀번호 변경</LinkText>

          <PrimaryButton buttonType="submit">계정 정보 변경</PrimaryButton>
        </Flex>
      )}

      {!edit && (
        <Flex align="center" justify="space-between" gap="small">
          <LinkText danger to="/delete-account">
            탈퇴하기
          </LinkText>

          <Flex gap="small">
            <SecondaryButton linkTo="/change-my-password">
              비밀번호 변경
            </SecondaryButton>

            <PrimaryButton linkTo="/change-account">
              기본 정보 변경
            </PrimaryButton>
          </Flex>
        </Flex>
      )}
    </CustomForm>
  );
};

export default Account;
