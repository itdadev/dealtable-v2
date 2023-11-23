import { PrimaryButton, SecondaryButton } from "@/components/ui/buttons";
import { Result } from "antd";
import React from "react";

const FindAccountFail = () => {
  return (
    <Result
      status="warning"
      title="이메일 찾기 / 비밀번호 변경"
      subTitle="해당 정보로 가입된 계정을 찾을 수 없습니다.
      정보를 다시 확인하고 시도해 주세요."
      extra={[
        <PrimaryButton type="primary" key="console" linkTo="/find-account">
          이메일 찾기 / 비밀번호 변경
        </PrimaryButton>,

        <SecondaryButton type="primary" key="console" linkTo="/login">
          로그인 하기
        </SecondaryButton>,
      ]}
    />
  );
};

export default FindAccountFail;
