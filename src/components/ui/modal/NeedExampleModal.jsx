import React from "react";

import { FieldGroup, FormDescription } from "../form/CustomForm";
import {
  DealScaleField,
  IndustryField,
  KeyConditionField,
  RevenueField,
  SalesField,
} from "../fields/Fields";
import { ModalContainer } from ".";

const NeedExampleModal = ({ open, onOk, onCancel }) => {
  return (
    <ModalContainer
      title={<FormDescription>작성 예시</FormDescription>}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
    >
      <FieldGroup>
        <IndustryField
          maxLength={200}
          readOnly
          defaultValue="유아동복, 유아용품 판매"
        />

        <DealScaleField readOnly defaultValue="딜 규모 예시 텍스트" />

        <SalesField readOnly defaultValue="100억" />

        <RevenueField readOnly defaultValue="10억" />

        <KeyConditionField
          maxLength={700}
          readOnly
          defaultValue={
            "당사는 10년 이상 성인 의류 제조 및 유통을 하고 있으며, 최근 신사업으로 유아동복이나 유아용품 시장으로 진출하고자 합니다. \n 아래와 같은 조건을 가진 회사를 인수 혹은 투자하는 것을 희망합니다. \n \n 1. 최소 5년 이상 매출이 꾸준하게 성장하고 있는 브랜드 \n 2. 아동복이나 유아용품의 기획, 디자인을 직접 내부에서 진행하고 있는 회사 \n 3. 오프라인 판매보다는 온라인 판매비중이 높은 회사 \n 4. 저렴하게 판매하는 브랜드 보다는 프리미엄 브랜드 선호 \n 5. 매각 후에도 대표가 일정기간 동안 회사 경영에 참여"
          }
        />
      </FieldGroup>
    </ModalContainer>
  );
};

export default NeedExampleModal;
