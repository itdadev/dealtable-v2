import React from "react";
import { Result } from "antd";

import { PrimaryButton } from "@/components/ui/buttons";

const JoinComplete = () => {
  return (
    <Result
      status="success"
      title="회원가입 신청 완료"
      subTitle="회원가입 신청이 완료 되었습니다. 3~5일 이내로 승인이 완료됩니다."
      extra={[
        <PrimaryButton linkTo="/" key="home">
          메인으로
        </PrimaryButton>,
      ]}
    />
  );
};

export default JoinComplete;
