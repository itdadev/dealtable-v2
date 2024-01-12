import React from "react";
import { Modal } from "antd";

import { CancelText } from "@/util/language-setting/texts/TranslatedTexts";

const ModalContainer = ({ children, ...props }) => {
  const modalStyles = {
    mask: {
      zIndex: 500,
    },
  };

  return (
    <Modal
      {...props}
      styles={modalStyles}
      zIndex={5000}
      style={{
        height: "fit-content",
        maxHeight: "80svh",
        display: "flex",
        placeContent: "center",
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
