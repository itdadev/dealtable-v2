import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, Flex } from "antd";
import Countdown, { zeroPad } from "react-countdown";

import {
  phoneNumPH,
  verificationCodePH,
} from "@/lib/react-hook-form/validation/placeholderTexts";

import { TextInput } from ".";
import { FieldErrorMessage } from "./CustomForm";
import { verificationCodeInvaid } from "@/lib/react-hook-form/validation/inputErrorMessage";
import axios from "axios";
import { useMutation } from "react-query";
import { checkCodeUrl, sendCodeUrl } from "@/constants/apiUrls";

export const CODE_EXPIRE_TIME = 5 * 60 * 1000;

const PhoneVerificationFields = ({
  watch,
  clearErrors,
  setError,
  setValue,
  resetField,
  control,
  errors,
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
    (data) => axios.post(sendCodeUrl, { phone: data }),
    {
      onSuccess: () => {
        if (codeSent) {
          // CASE: 전화번호 다시 입력
          setPhoneActive(true);
          setCodeSent(false);
          setCodeActive(false);
          resetTimer();
          stopTimer();
          resetField("verification_code");

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
          setError("phone", { message: "이미 가입된 전화번호입니다." });
        }
      },
    }
  );

  const { mutate: verifyCodeFunction } = useMutation(
    (data) => axios.post(checkCodeUrl, { ...data }),
    {
      onSuccess: (data) => {
        // CASE: 코드 인증 완료
        resetTimer();
        setCodeVerified(true);
        stopTimer();
        clearErrors("verification_code");
        setValue("phone_verified", true, { shouldValidate: true });
      },
      onError: (error) => {
        if (error?.response?.status === 400) {
          setError("verification_code", { message: verificationCodeInvaid });
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

      if ((name = "verification_code" && value.verification_code !== "")) {
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
          name="verification_code"
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
              auth_code: watch("verification_code"),
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
