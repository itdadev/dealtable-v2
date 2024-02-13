import React, { useEffect, useMemo } from "react";
import styled from "@emotion/styled";

import {
  PersonalInfoContents,
  PrivacyPolicyContents,
  UseTermContents,
} from "@/util/TermsContents";
import {
  NewsLetterSubscribeText,
  PersonalInformationText,
  UseTermText,
} from "@/util/language-setting/texts/TranslatedTexts";

import { FormDescription } from "../form/CustomForm";
import { ModalContainer } from ".";

export const ModalDescription = styled.div(() => ({
  margin: "4.8rem 0 1.8rem",
  fontSize: "1.8rem",
}));

export const ModalContents = styled.div(({ theme }) => ({
  color: theme.color.grey,
  fontSize: "1.6rem",
}));

const TermModal = ({ onCancel, termModalOpen }) => {
  const modalName = useMemo(() => {
    switch (termModalOpen) {
      case "use_term":
        return <UseTermText />;

      case "privacy_policy":
        return <PersonalInformationText />;

      case "personal_info":
        return <NewsLetterSubscribeText />;

      default:
        return "";
    }
  }, [termModalOpen]);

  const modalContents = useMemo(() => {
    switch (termModalOpen) {
      case "use_term":
        return <UseTermContents />;

      case "privacy_policy":
        return <PrivacyPolicyContents />;

      case "personal_info":
        return <PersonalInfoContents />;

      default:
        return null;
    }
  }, [termModalOpen]);

  return (
    <ModalContainer
      title={<FormDescription>{modalName}</FormDescription>}
      open={termModalOpen !== ""}
      onCancel={onCancel}
      footer={null}
    >
      {modalContents}
    </ModalContainer>
  );
};

export default TermModal;
