import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, Flex } from "antd";
import axios from "axios";
import { useMutation } from "react-query";
import Countdown, { zeroPad } from "react-countdown";

import {
  CHECK_CODE_API_URL,
  FIND_SEND_CODE_API_URL,
  SEND_CODE_API_URL,
} from "@/constants/apiUrls";
import {
  phoneNumPH,
  verificationCodePH,
} from "@/lib/react-hook-form/validation/placeholderTexts";
import {
  differentPhoneRequired,
  phoneAlreadyExists,
  phoneRequired,
  verificationCodeInvaid,
} from "@/lib/react-hook-form/validation/inputErrorMessage";

import { FieldErrorMessage } from "./CustomForm";
import { TextInput } from ".";

export const CODE_EXPIRE_TIME = 5 * 60 * 1000;

const PhoneVerificationFields = ({
  watch,
  clearErrors,
  setError,
  setValue,
  resetField,
  control,
  errors,
  initalPhoneValue,
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
      if (data === "") {
        // 전화 번호 입력 안하고 인증 코드 전송 눌렀을 때
        return phoneRequired;
      }

      if (initalPhoneValue && data === initalPhoneValue) {
        // 회원 정보 수정시 기존의 유저 번호와 동일한 번호를 입력했을 때

        return differentPhoneRequired;
      } else {
        const { status } = axios.post(
          findAccount ? FIND_SEND_CODE_API_URL : SEND_CODE_API_URL,
          {
            phone: data,
          }
        );

        if (status === 200) {
          return "";
        }
      }
    },
    {
      onSuccess: (data) => {
        if (data !== "" && !!data) {
          setError("phone", { message: data });

          return;
        }

        clearErrors("phone");

        if (codeSent) {
          // CASE: 전화번호 다시 입력
          setPhoneActive(true);
          setCodeSent(false);
          setCodeActive(false);
          resetTimer();
          stopTimer();
          resetField("auth_code");

          return;
        }

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
      onSuccess: (data) => {
        // CASE: 코드 인증 완료
        resetTimer();
        setCodeVerified(true);
        stopTimer();
        clearErrors("auth_code");
        setValue("phone_verified", true, { shouldValidate: true });
      },
      onError: (error) => {
        if (error?.response?.status === 400) {
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
        <TextInput
          controls={false}
          name="phone"
          control={control}
          type="number"
          placeholder={phoneNumPH}
          readOnly={!phoneActive || codeVerified}
        />

        <Button
          type="primary"
          size="large"
          onClick={() => sendCodeFunction(watch("phone"))}
          disabled={codeVerified}
        >
          {codeSent && !codeVerified
            ? "전화번호 다시 입력"
            : codeVerified
            ? "인증 완료"
            : "인증번호 전송"}
        </Button>
      </Flex>

      <Flex>
        <TextInput
          name="auth_code"
          control={control}
          readOnly={codeVerified}
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
        />

        <Button
          type="primary"
          size="large"
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
        </Button>
      </Flex>
    </>
  );
};

export default PhoneVerificationFields;
