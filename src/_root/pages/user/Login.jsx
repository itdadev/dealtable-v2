import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "react-query";
import { Alert, Flex, Result, Spin, notification } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodLogin } from "@/lib/react-hook-form/validation/zodValidation";
import styled from "@emotion/styled";

import { image } from "@/theme";
import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { CustomForm, SingleCheckBox, TextInput } from "@/components/ui/form";
import { useUserContext } from "@/context/AuthContext";
import { LOGIN_API_URL } from "@/constants/apiUrls";
import {
  emailPH,
  passwordPH,
} from "@/lib/react-hook-form/validation/placeholderTexts";
import {
  LOCAL_STORAGE_AUTO_LOGIN,
  LOCAL_STORAGE_TOKENS,
} from "@/constants/StorageKey";

const LinkToHome = styled(Link)(() => ({
  textAlign: "center",
  marginBottom: "2rem",
}));

const Login = () => {
  const [api, contextHolder] = notification.useNotification();

  const { setIsAuthenticated } = useUserContext();

  const navigate = useNavigate();

  const [rejectReason, setRejectReason] = useState("");

  const [alertMessages, setAlertMessages] = useState({
    peding: false,
    reject: false,
    invalid: false,
  });

  const { state } = useLocation();

  const { control, handleSubmit, watch } = useForm({
    resolver: zodResolver(zodLogin),
    mode: "onSubmit",
    defaultValues: {
      email: state?.foundEmail ? state?.foundEmail : "",
      user_pw: "",
      autoLogin: false,
    },
  });

  const { mutate: userLoginFunction, isLoading } = useMutation(
    (data) => axios.post(LOGIN_API_URL, data),
    {
      onSuccess: (data) => {
        if (watch("autoLogin")) {
          localStorage.setItem(LOCAL_STORAGE_AUTO_LOGIN, true);
          localStorage.setItem(
            LOCAL_STORAGE_TOKENS,
            JSON.stringify({
              refresh_token: data.data.data.refresh_token,
              access_token: data.data.data.access_token,
            })
          );
        } else {
          localStorage.setItem(LOCAL_STORAGE_AUTO_LOGIN, false);
          sessionStorage.setItem(
            LOCAL_STORAGE_TOKENS,
            JSON.stringify({
              refresh_token: data.data.data.refresh_token,
              access_token: data.data.data.access_token,
            })
          );
        }

        setIsAuthenticated(true);
        navigate("/");
      },
      onError: (error) => {
        if (error.response.status === 406) {
          // pending
          setAlertMessages((prev) => ({ ...prev, peding: true }));
        }

        if (error.response.status === 451) {
          // reject
          setAlertMessages((prev) => ({ ...prev, reject: true }));
          setRejectReason(error.response.data.data.reject_reason);
        }

        if (error.response.status === 400) {
          // id & password
          setAlertMessages((prev) => ({ ...prev, invalid: true }));
        }
      },
    }
  );

  useEffect(() => {
    if (state?.mutateStatus === "password") {
      api.success({
        message: "비밀번호 수정",
        description:
          "비밀번호가 성공적으로 수정되었습니다. 다시 로그인해주세요.",
        duration: 3,
      });
    }
  }, [api, state?.mutateStatus]);

  useEffect(() => {
    window.history.replaceState({}, document.title);
  }, []);

  const loginSubmit = useCallback(
    (data) => {
      userLoginFunction(data);
    },
    [userLoginFunction]
  );

  return (
    <CustomForm submitEvent={handleSubmit(loginSubmit)}>
      {contextHolder}

      {state?.findAccountSuccess && (
        <Result
          status="success"
          title="비밀번호 변경이 완료되었습니다!"
          subTitle="변경하신 비밀번호로 로그인하신 후 딜테이블을 이용해주세요."
        />
      )}

      <LinkToHome to="/">
        <img src={image.basicLogo.default} alt="DEALTABLE" height={24} />
      </LinkToHome>

      {alertMessages.peding && (
        <Alert
          message="관리자가 해당 계정의 승인 절차를 진행 중입니다. "
          description="영업일 기준 3~5일 이내로 승인이 완료됩니다."
          type="warning"
          showIcon
          closable
        />
      )}

      {alertMessages.reject && (
        <Alert
          message="관리자가 해당 계정 가입을 거절하였습니다. 거절 사유는 아래와 같습니다."
          description={rejectReason}
          type="error"
          showIcon
          closable
        />
      )}

      <div>
        <TextInput name="email" control={control} placeholder={emailPH} />

        <TextInput
          name="user_pw"
          control={control}
          type="password"
          placeholder={passwordPH}
        />
      </div>

      <Flex justify="space-between">
        <SingleCheckBox
          name="autoLogin"
          control={control}
          label="로그인 상태 유지"
        />

        <div>
          <Link to="/find-account">이메일 / 비밀번호 찾기</Link>
        </div>
      </Flex>

      <Flex vertical gap="small">
        {isLoading ? (
          <Spin />
        ) : (
          <PrimaryButton buttonType="submit" fullwidth>
            로그인
          </PrimaryButton>
        )}

        <SecondaryButton linkTo="/join" fullwidth>
          회원가입
        </SecondaryButton>
      </Flex>
    </CustomForm>
  );
};

export default Login;
