import React from "react";
import { Modal } from "antd";

import { CancelText } from "@/util/language-setting/texts/TranslatedTexts";

const ModalContainer = ({ children, ...props }) => {
  return (
    <Modal
      {...props}
      style={{
        height: "100%",
        overflowY: "auto",
      }}
      okButtonProps={{ shape: "round" }}
      cancelButtonProps={{ shape: "round" }}
      centered
      cancelText={props.cancelText ? props.cancelText : <CancelText />}
      wrapClassName="antd-modal-wrapper"
    >
      {children}
    </Modal>
  );
};

export default ModalContainer;
