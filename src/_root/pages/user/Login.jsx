import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "react-query";
import { Alert, Divider, Flex, notification } from "antd";
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
import { useIntl } from "react-intl";
import {
  ContinueText,
  EnterEmailForLoginText,
  FindEmailPasswordText,
  JoinText,
} from "@/util/language-setting/texts/TranslatedTexts";

const Login = () => {
  const intl = useIntl();

  const [api, contextHolder] = notification.useNotification();

  const { setIsAuthenticated } = useUserContext();

  const navigate = useNavigate();

  const [alertMessages, setAlertMessages] = useState({
    pending: false,
    invalid: false,
    editAccount: false,
  });

  const { state } = useLocation();

  const { control, handleSubmit, watch } = useForm({
    resolver: zodResolver(zodLogin),
    mode: "onChange",
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
            }),
          );
        } else {
          localStorage.setItem(LOCAL_STORAGE_AUTO_LOGIN, false);
          sessionStorage.setItem(
            LOCAL_STORAGE_TOKENS,
            JSON.stringify({
              refresh_token: data.data.data.refresh_token,
              access_token: data.data.data.access_token,
            }),
          );
        }

        setIsAuthenticated(true);
        navigate("/need");
      },
      onError: (error) => {
        if (error.response.status === 400) {
          setAlertMessages({ invalid: true });
        }

        if (error.response.status === 406) {
          // pending
          setAlertMessages({ pending: true });
        }

        if (error.response.status === 451) {
          // reject
          navigate("/join", { state: { userData: error?.response.data.data } });
        }

        if (error.response.status === 400) {
          // id & password
          setAlertMessages({ invalid: true });
        }
      },
    },
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
    [userLoginFunction],
  );

  return (
    <CustomForm submitEvent={handleSubmit(loginSubmit)} noGoBack>
      {contextHolder}

      <FormDescription>
        <EnterEmailForLoginText />
      </FormDescription>

      <div>
        <EmailField control={control} />

        <PasswordField control={control} />
      </div>

      <SingleCheckBox
        name="autoLogin"
        control={control}
        label={intl.formatMessage({
          id: "lang-keep-me-logged-in",
        })}
      />

      {alertMessages.editAccount && (
        <Alert
          message={intl.formatMessage({
            id: "lang-changed-account-confirming",
          })}
          description={intl.formatMessage({
            id: "lang-confirm-working-hours",
          })}
          type="warning"
        />
      )}

      {alertMessages.pending && (
        <Alert
          message={intl.formatMessage({
            id: "lang-admin-confirming-account",
          })}
          description={intl.formatMessage({
            id: "lang-confirm-working-hours",
          })}
          type="warning"
        />
      )}

      {alertMessages.invalid && (
        <AntdAlert
          message={intl.formatMessage({
            id: "lang-account-not-match",
          })}
          type="error"
        />
      )}

      <Flex align="center" justify="space-between">
        <Flex align="center">
          <Link to="/join">
            <JoinText />
          </Link>

          <Divider type="vertical" />

          <Link to="/find-account">
            <FindEmailPasswordText />
          </Link>
        </Flex>

        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <PrimaryButton buttonType="submit">
            <ContinueText />
          </PrimaryButton>
        )}
      </Flex>
    </CustomForm>
  );
};

export default Login;
