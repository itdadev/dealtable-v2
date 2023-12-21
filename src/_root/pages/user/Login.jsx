import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "react-query";
import { Alert, Divider, Flex, Result, notification } from "antd";
import { zodResolver } from "@hookform/resolvers/zod";

import { PrimaryButton } from "@/components/ui/buttons";
import { CustomForm, SingleCheckBox } from "@/components/ui/form";
import { useUserContext } from "@/context/AuthContext";
import { LOGIN_API_URL } from "@/constants/apiUrls";
import {
  LOCAL_STORAGE_AUTO_LOGIN,
  LOCAL_STORAGE_TOKENS,
} from "@/constants/StorageKey";
import { EmailField, PasswordField } from "@/components/ui/fields/Fields";
import { FormDescription } from "@/components/ui/form/CustomForm";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { AntdAlert } from "@/components/ui";

import { zodLogin } from "@/lib/react-hook-form/validation/zodValidation";

const Login = () => {
  const [api, contextHolder] = notification.useNotification();

  const { setIsAuthenticated } = useUserContext();

  const navigate = useNavigate();

  const [alertMessages, setAlertMessages] = useState({
    peding: false,
    invalid: false,
    editAccount: false,
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
        navigate("/need");
      },
      onError: (error) => {
        if (error.response.status === 400) {
          setAlertMessages(() => ({ invalid: true }));
        }

        if (error.response.status === 406) {
          // pending
          setAlertMessages(() => ({ peding: true }));
        }

        if (error.response.status === 451) {
          // reject
          navigate("/join", { state: { userData: error?.response.data.data } });
        }

        if (error.response.status === 400) {
          // id & password
          setAlertMessages(() => ({ invalid: true }));
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

    if (state?.mutateStatus === "editAccount") {
      setAlertMessages({ editAccount: true });
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

      <FormDescription>로그인을 위해 이메일을 입력하세요.</FormDescription>

      <div>
        <EmailField control={control} />

        <PasswordField control={control} />
      </div>

      <SingleCheckBox
        name="autoLogin"
        control={control}
        label="로그인 상태 유지"
      />

      {alertMessages.editAccount && (
        <Alert
          message="회원 정보의 주요 사항을 수정하셔서 관리자가 해당 계정의 승인 절차를 진행 중입니다."
          description="영업일 기준 3~5일 이내로 승인이 완료됩니다."
          type="warning"
        />
      )}

      {alertMessages.peding && (
        <Alert
          message="관리자가 해당 계정의 승인 절차를 진행 중입니다. "
          description="영업일 기준 3~5일 이내로 승인이 완료됩니다."
          type="warning"
        />
      )}

      {alertMessages.invalid && (
        <AntdAlert
          message="계정 혹은 비밀번호가 일치하지 않습니다. 입력한 내용을 다시한번 확인해주세요"
          type="error"
        />
      )}

      <Flex align="center" justify="space-between">
        <Flex align="center">
          <Link to="/join">회원가입</Link>

          <Divider type="vertical" />

          <Link to="/find-account">이메일/비밀번호 찾기</Link>
        </Flex>

        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <PrimaryButton buttonType="submit">계속</PrimaryButton>
        )}
      </Flex>
    </CustomForm>
  );
};

export default Login;
