import React from "react";
import { Modal } from "antd";

import { CancelText } from "@/util/language-setting/texts/TranslatedTexts";

const ModalContainer = ({ children, ...props }) => {
  return (
    <Modal
      {...props}
      okButtonProps={{ shape: "round" }}
      cancelButtonProps={{ shape: "round" }}
      centered
      cancelText={props.cancelText ? props.cancelText : <CancelText />}
    >
      {children}
    </Modal>
  );
};

export default ModalContainer;
