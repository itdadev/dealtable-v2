import React, { useCallback, useEffect, useRef, useState } from "react";
import { Flex } from "antd";
import axios from "axios";
import { useMutation } from "react-query";
import Countdown, { zeroPad } from "react-countdown";
import styled from "@emotion/styled";

import {
  CHECK_CODE_API_URL,
  FIND_SEND_CODE_API_URL,
  SEND_CODE_API_URL,
} from "@/constants/apiUrls";
import { verificationCodePH } from "@/lib/react-hook-form/validation/placeholderTexts";
import {
  differentPhoneRequired,
  phoneAlreadyExists,
  phoneRequired,
  verificationCodeInvaid,
} from "@/lib/react-hook-form/validation/inputErrorMessage";

import { FieldErrorMessage } from "./CustomForm";
import { PhoneField } from "../fields/Fields";
import { TextInput } from ".";

export const CODE_EXPIRE_TIME = 5 * 60 * 1000;

const SendButton = styled.div(({ theme }) => ({
  color: theme.color.primary,
  wordBreak: "keep-all",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  height: "5.8rem",
}));

const PhoneVerificationFields = ({
  watch,
  clearErrors,
  setError,
  setValue,
  resetField,
  control,
  errors,
  initialPhoneValue,
  findAccount,
}) => {
  const [targetDate, setTargetDate] = useState(
    new Date().getTime() + CODE_EXPIRE_TIME
  );

  const timerRef = useRef(null);
  const [phoneActive, setPhoneActive] = useState(true);
  const [codeActive, setCodeActive] = useState(false);

  const [codeSent, setCodeSent] = useState(false);

  const [codeExpired, setCodeExpired] = useState(false);
  const [codeVerified, setCodeVerified] = useState(false);

  const resetTimer = useCallback(() => {
    setTargetDate(new Date().getTime() + CODE_EXPIRE_TIME);
  }, [setTargetDate]);

  const startTimer = useCallback(() => {
    timerRef.current.start();
  }, []);

  const stopTimer = useCallback(() => {
    timerRef.current.stop();
  }, []);

  const { mutate: sendCodeFunction } = useMutation(
    (data) => {
      if (codeSent) {
        // CASE: 전화번호 다시 입력
        return "resend";
      }

      if (data === "") {
        // 전화 번호 입력 안하고 인증 코드 전송 눌렀을 때
        return phoneRequired;
      }

      if (initialPhoneValue && data === initialPhoneValue) {
        // 회원 정보 수정시 기존의 유저 번호와 동일한 번호를 입력했을 때

        return differentPhoneRequired;
      }

      const res = axios.post(
        findAccount ? FIND_SEND_CODE_API_URL : SEND_CODE_API_URL,
        {
          phone: data,
        }
      );

      return res;
    },
    {
      onSuccess: (data) => {
        if (data === "resend") {
          setPhoneActive(true);
          setCodeSent(false);
          setCodeActive(false);
          resetTimer();
          stopTimer();
          resetField("auth_code");

          return;
        }

        if (typeof data === "string" && !!data && data !== "resend") {
          setError("phone", { message: data });

          return;
        }

        clearErrors("phone");

        // CASE: 전화번호 처음 입력
        startTimer();
        resetTimer();
        setCodeSent(true);
        setPhoneActive(false);
      },
      onError: (error) => {
        if (error.response.status === 400) {
          setError("phone", { message: phoneAlreadyExists });
        }
      },
    }
  );

  const { mutate: verifyCodeFunction } = useMutation(
    (data) => axios.post(CHECK_CODE_API_URL, { ...data }),
    {
      onSuccess: () => {
        // CASE: 코드 인증 완료
        resetTimer();
        setCodeVerified(true);
        stopTimer();
        clearErrors("auth_code");
        setValue("phone_verified", true, { shouldValidate: true });
      },
      onError: (error) => {
        if (error?.response.status === 400) {
          setError("auth_code", { message: verificationCodeInvaid });

          setCodeVerified(false);
          setPhoneActive(true);
        }
      },
    }
  );

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if ((name = "phone" && value.phone !== "")) {
        setPhoneActive(true);
      }

      if ((name = "auth_code" && value.auth_code !== "")) {
        setCodeActive(true);
      } else {
        setCodeActive(false);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      setCodeExpired(true);
    } else {
      return (
        <span>
          {zeroPad(minutes)} : {zeroPad(seconds)}
        </span>
      );
    }
  };

  return (
    <>
      <Flex>
        <PhoneField control={control} readOnly={!phoneActive || codeVerified}>
          <SendButton
            type="primary"
            size="large"
            onClick={() => {
              sendCodeFunction(watch("phone"));
            }}
            disabled={codeVerified}
          >
            {codeSent && !codeVerified
              ? "전화번호 다시 입력"
              : codeVerified
              ? "인증 완료"
              : "인증번호 전송"}
          </SendButton>
        </PhoneField>
      </Flex>

      <Flex>
        <TextInput
          name="auth_code"
          label="인증 번호"
          labelrequired="true"
          control={control}
          readOnly={codeVerified || !codeSent}
          placeholder={verificationCodePH}
          customerror={
            errors.phone_verified ? errors.phone_verified?.message : ""
          }
          suffix={
            <FieldErrorMessage
              custom={{
                display:
                  codeSent && !codeExpired && !codeVerified ? "block" : "none",
              }}
            >
              <Countdown
                date={targetDate}
                renderer={renderer}
                ref={timerRef}
                autoStart={false}
              />
            </FieldErrorMessage>
          }
        >
          <SendButton
            disabled={(!codeActive && !codeExpired) || codeVerified}
            onClick={() =>
              verifyCodeFunction({
                phone: watch("phone"),
                auth_code: watch("auth_code"),
              })
            }
          >
            {codeExpired
              ? "재전송"
              : codeVerified
              ? "인증 완료"
              : "인증번호 확인"}
          </SendButton>
        </TextInput>
      </Flex>
    </>
  );
};

export default PhoneVerificationFields;
