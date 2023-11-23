import React from "react";
import { Result } from "antd";

import { PrimaryButton } from "@/components/ui/buttons";

const AddNeedComplete = () => {
  return (
    <Result
      status="success"
      title="인수 니즈 생성 완료"
      subTitle="인수 니즈 생성이 완료되었습니다. 3~5일 이내로 검토 후 연락드리겠습니다."
      extra={[
        <PrimaryButton linkTo="/need" key="need">
          목록으로
        </PrimaryButton>,
      ]}
    />
  );
};

export default AddNeedComplete;
