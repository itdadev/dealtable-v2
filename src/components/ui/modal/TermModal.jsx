import React, { useMemo } from "react";
import { Modal } from "antd";
import styled from "@emotion/styled";

import {
  PersonalInfoContents,
  PrivacyPolicyContents,
  UseTermContents,
} from "@/util/TermsContents";
import { FormDescription } from "../form/CustomForm";

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
        return "이용 약관";

      case "privacy_policy":
        return "개인 정보 처리 방침";

      case "personal_info":
        return "개인정보 이용";

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
    <Modal
      title={<FormDescription>{modalName}</FormDescription>}
      open={termModalOpen !== ""}
      onCancel={onCancel}
      footer={null}
    >
      {modalContents}
    </Modal>
  );
};

export default TermModal;