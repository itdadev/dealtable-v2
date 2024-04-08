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
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import {
  CodeConfirmDoneText,
  CodeNumberText,
  ConfirmCodeNumberText,
  ReEnterPhoneText,
  ResendCodeText,
  SendCodeNumberText,
} from "@/util/language-setting/texts/TranslatedTexts";
import { verificationCodePH } from "@/lib/react-hook-form/validation/placeholderTexts";
import {
  differentPhoneRequired,
  phoneAlreadyExists,
  phoneDoesntExists,
  phoneRequired,
  verificationCodeInvalid,
} from "@/lib/react-hook-form/validation/inputErrorMessage";

import { FieldErrorMessage } from "./CustomForm";
import { PhoneField } from "../fields/Fields";
import { TextInput } from ".";

export const CODE_EXPIRE_TIME = 0.1 * 60 * 1000;

const SendButton = styled.div(({ theme, disabled }) => ({
  color: theme.color.primary,
  wordBreak: "keep-all",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
  cursor: disabled ? "default" : "pointer",
  pointerEvents: disabled ? "none" : "auto",
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
    new Date().getTime() + CODE_EXPIRE_TIME,
  );

  const timerRef = useRef(null);
  // const [phoneActive, setPhoneActive] = useState(true);
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

  const { mutate: sendCodeFunction, isLoading: sendLoading } = useMutation(
    (data) => {
      if (codeSent && !codeExpired) {
        // CASE: 휴대폰 번호 다시 입력
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

      setCodeExpired(false);

      return axios.post(
        findAccount ? FIND_SEND_CODE_API_URL : SEND_CODE_API_URL,
        {
          phone: data,
        },
      );
    },
    {
      onSuccess: (data) => {
        if (data === "resend") {
          // setPhoneActive(true);
          setCodeSent(false);
          setCodeActive(false);
          resetTimer();
          stopTimer();
          resetField("auth_code");
          setCodeExpired(false);

          return;
        }

        if (typeof data === "string" && !!data && data !== "resend") {
          setError("phone", { message: data });

          return;
        }

        clearErrors("phone");

        // CASE: 휴대폰 번호 처음 입력
        startTimer();
        resetTimer();
        setCodeSent(true);
        // setPhoneActive(false);
      },
      onError: (error) => {
        if (error.response.status === 400) {
          setError("phone", {
            message: findAccount ? phoneDoesntExists : phoneAlreadyExists,
          });
        }
      },
    },
  );

  const { mutate: verifyCodeFunction, isLoading: verifyLoading } = useMutation(
    (data) => axios.post(CHECK_CODE_API_URL, { ...data }),
    {
      onSuccess: () => {
        // CASE: 코드 인증 완료
        setCodeVerified(true);
        stopTimer();
        clearErrors("auth_code");
        setValue("phone_verified", true, { shouldValidate: true });
      },
      onError: (error) => {
        if (error?.response.status === 400) {
          setError("auth_code", { message: verificationCodeInvalid });

          setCodeVerified(false);
          // setPhoneActive(true);
        }
      },
    },
  );

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      // if ((name = "phone" && value.phone !== "")) {
      // setPhoneActive(true);
      // }

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
        <PhoneField
          control={control}
          readOnly={codeSent || codeVerified}
          addonAfter={
            <SendButton
              type="primary"
              size="large"
              onClick={() => {
                sendCodeFunction(watch("phone"));
              }}
              disabled={codeVerified}
            >
              {sendLoading ? (
                <LoadingSpinner />
              ) : (
                <div>
                  {codeSent && !codeVerified ? (
                    <ReEnterPhoneText />
                  ) : codeVerified ? (
                    <CodeConfirmDoneText />
                  ) : (
                    <SendCodeNumberText />
                  )}
                </div>
              )}
            </SendButton>
          }
        />
      </Flex>

      <Flex>
        <TextInput
          name="auth_code"
          label={<CodeNumberText />}
          labelrequired="true"
          control={control}
          placeholder={verificationCodePH}
          bordered={false}
          customborder="true"
          readOnly={codeVerified || !codeSent}
          // onKeyDown={(e) => {
          //   if (e.key === "Enter") {
          //     verifyCodeFunction({
          //       phone: watch("phone"),
          //       auth_code: watch("auth_code"),
          //     });
          //   }
          // }}
          labelafter={
            <FieldErrorMessage
              custom={{
                display:
                  codeSent && !codeExpired && !codeVerified ? "block" : "none",
              }}
            >
              <div style={{ marginTop: "0.4rem" }}>
                <Countdown
                  date={targetDate}
                  renderer={renderer}
                  ref={timerRef}
                  autoStart={false}
                />
              </div>
            </FieldErrorMessage>
          }
          customerror={
            errors.phone_verified ? errors.phone_verified?.message : ""
          }
          addonAfter={
            <SendButton
              type="button"
              disabled={(!codeActive && !codeExpired) || codeVerified}
              onClick={() => {
                if (codeExpired) {
                  //   재전송 클릭시
                  sendCodeFunction(watch("phone"));
                  setCodeExpired(false);
                  resetTimer();
                } else {
                  verifyCodeFunction({
                    phone: watch("phone"),
                    auth_code: watch("auth_code"),
                  });
                }
              }}
            >
              {verifyLoading ? (
                <LoadingSpinner />
              ) : (
                <div>
                  {codeExpired ? (
                    <ResendCodeText />
                  ) : codeVerified ? (
                    <CodeConfirmDoneText />
                  ) : (
                    <ConfirmCodeNumberText />
                  )}
                </div>
              )}
            </SendButton>
          }
        />
      </Flex>
    </>
  );
};

export default PhoneVerificationFields;
