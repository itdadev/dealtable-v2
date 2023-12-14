import React from "react";
import { Modal } from "antd";

import { FieldGroup, FormDescription } from "../form/CustomForm";
import {
  DealScaleField,
  IndustryField,
  KeyConditionField,
  RevenueField,
  SalesField,
} from "../fields/Fields";

const NeedExampleModal = ({ open, onOk, onCancel }) => {
  return (
    <Modal
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
          defaultValue="산업군 예시 텍스트"
        />

        <DealScaleField readOnly defaultValue="딜 규모 예시 텍스트" />

        <SalesField readOnly defaultValue="20320" />

        <RevenueField readOnly defaultValue="43230" />

        <KeyConditionField
          maxLength={700}
          readOnly
          defaultValue="핵심 조건 예시 텍스트"
        />
      </FieldGroup>
    </Modal>
  );
};

export default NeedExampleModal;
