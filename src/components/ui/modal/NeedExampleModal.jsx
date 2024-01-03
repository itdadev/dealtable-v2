import React from "react";
import { useIntl } from "react-intl";

import { ExampleText } from "@/util/language-setting/texts/TranslatedTexts";

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
  const intl = useIntl();

  return (
    <ModalContainer
      title={
        <FormDescription>
          <ExampleText />
        </FormDescription>
      }
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
    >
      <FieldGroup>
        <IndustryField
          maxLength={200}
          readOnly
          defaultValue={intl.formatMessage({
            id: "lang-example-1",
          })}
        />

        <DealScaleField
          readOnly
          defaultValue={intl.formatMessage({
            id: "lang-example-2",
          })}
        />

        <SalesField
          readOnly
          defaultValue={intl.formatMessage({
            id: "lang-example-3",
          })}
        />

        <RevenueField
          readOnly
          defaultValue={intl.formatMessage({
            id: "lang-example-4",
          })}
        />

        <KeyConditionField
          maxLength={700}
          readOnly
          defaultValue={intl.formatMessage({
            id: "lang-example-5",
          })}
          example
        />
      </FieldGroup>
    </ModalContainer>
  );
};

export default NeedExampleModal;
