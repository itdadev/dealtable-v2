import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "react-query";
import { useIntl } from "react-intl";
import { Alert } from "antd";
import styled from "@emotion/styled";

import {
  CustomForm,
  PhoneVerificationFields,
  SelectAllCheckBoxes,
} from "@/components/ui/form";
import { PrimaryButton } from "@/components/ui/buttons";
import {
  FieldGroup,
  FixedButtonContainer,
} from "@/components/ui/form/CustomForm";
import { JOIN_API_URL } from "@/constants/apiUrls";
import {
  CompanyNameField,
  ConfirmPasswordField,
  EmailField,
  PasswordField,
  UserNameField,
  UserPositionField,
} from "@/components/ui/fields/Fields";
import { TermModal } from "@/components/ui/modal";
import {
  AccountInformationText,
  CompanyInformationText,
  JoinRequestText,
  UserInformationText,
  ViewText,
} from "@/util/language-setting/texts/TranslatedTexts";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodJoin } from "@/lib/react-hook-form/validation/zodValidation";

const TermLink = styled.button(({ theme }) => ({
  color: theme.color.grey,
  fontSize: "1.2rem",
  textDecoration: "underline",
  lineHeight: "1.4rem",
  marginLeft: "0.6rem",
}));
const Join = () => {
  const intl = useIntl();

  const navigate = useNavigate();

  const [termModalOpen, setTermModalOpen] = useState("");

  const [userData, setUserData] = useState({
    reject_reason: "",
  });
  const [userDetail, setUserDetail] = useState();

  const { state } = useLocation();

  useEffect(() => {
    if (state !== null && state.userData) {
      setUserData(state.userData);
    }
  }, [state]);

  const {
    control,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    resetField,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(zodJoin),
    mode: "onChange",
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
      use_term: false,
      personal_info: false,
      privacy_policy: false,
    },
  });

  useEffect(() => {
    window.history.replaceState({}, document.title);
  }, []);

  const { mutate: userJoinFunction } = useMutation(
    (data) => {
      return axios.post(JOIN_API_URL, {
        ...data,
        news_agree_yn: data?.personal_info,
      });
    },
    {
      onSuccess: (res) => {
        navigate("/join-complete", {
          state: {
            correctAccess: true,
            userDetail: {
              email: watch("email"),
              phone: watch("phone"),
            },
          },
        });
      },
      onError: (error) => {
        if (error.response.status === 400) {
          // Email Exist Already
          setError("email", { message: "이미 가입된 이메일입니다." });

          setFocus("email");
        }
      },
    },
  );

  useEffect(() => {
    if (userData?.user_key) {
      setValue("email", userData?.email);
      setValue("user_name", userData?.user_name);
      setValue("phone", userData?.phone);
      setValue("company_name", userData?.company_name);
      setValue("user_position", userData?.user_position);
      setValue("user_key", JSON.stringify(userData?.user_key));
    }
  }, [setValue, userData]);

  const joinSubmit = useCallback(
    (data) => {
      setUserDetail(data);
      userJoinFunction(data);
    },
    [userJoinFunction],
  );

  const handleTermModal = useCallback((type) => {
    setTermModalOpen(type);
  }, []);

  const onCancel = useCallback(() => {
    setTermModalOpen("");
  }, []);

  const termOptions = [
    {
      label: (
        <div>
          <span>[필수] 이용 약관 동의</span>

          <TermLink type="button" onClick={() => setTermModalOpen("use_term")}>
            <ViewText />
          </TermLink>
        </div>
      ),
      value: "use_term",
    },
    {
      label: (
        <div>
          <span>[필수] 개인정보 처리 방침 동의</span>

          <TermLink
            type="button"
            onClick={() => setTermModalOpen("privacy_policy")}
          >
            <ViewText />
          </TermLink>
        </div>
      ),
      value: "privacy_policy",
    },
    {
      label: (
        <div>
          <span>[선택] MMP Deal Insight 뉴스레터 구독 동의</span>

          <TermLink
            type="button"
            onClick={() => setTermModalOpen("personal_info")}
          >
            <ViewText />
          </TermLink>
        </div>
      ),
      value: "personal_info",
    },
  ];

  return (
    <CustomForm submitEvent={handleSubmit(joinSubmit)}>
      <TermModal onCancel={onCancel} termModalOpen={termModalOpen} />

      {userData?.reject_reason && (
        <Alert
          message={intl.formatMessage({
            id: "lang-join-reject-reason",
          })}
          description={userData?.reject_reason}
          type="error"
        />
      )}

      <FieldGroup>
        <header>
          <AccountInformationText />
        </header>

        <EmailField control={control} readOnly={userData?.user_key} />

        <PasswordField control={control} />

        <ConfirmPasswordField control={control} />
      </FieldGroup>

      <FieldGroup>
        <header>
          <UserInformationText />
        </header>

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
        <header>
          <CompanyInformationText />
        </header>

        <CompanyNameField control={control} />

        <UserPositionField control={control} />
      </FieldGroup>

      <SelectAllCheckBoxes
        title={intl.formatMessage({
          id: "lang-agree-term",
        })}
        options={termOptions}
        control={control}
        setValue={setValue}
        watch={watch}
        errors={errors}
        handleTermModal={handleTermModal}
      />

      <FixedButtonContainer>
        <PrimaryButton buttonType="submit">
          <JoinRequestText />
        </PrimaryButton>
      </FixedButtonContainer>
    </CustomForm>
  );
};

export default Join;
