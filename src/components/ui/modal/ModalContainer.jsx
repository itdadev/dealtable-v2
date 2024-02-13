import React, { useEffect } from "react";
import { Modal } from "antd";

import { CancelText } from "@/util/language-setting/texts/TranslatedTexts";
import { useMediaQuery } from "react-responsive";

const ModalContainer = ({ children, ...props }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

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
        minWidth: isDesktop ? "60rem" : "90%",
        display: "flex",
        placeContent: "center",
      }}
      okButtonProps={{ shape: "round" }}
      cancelButtonProps={{ shape: "round" }}
      centered
      cancelText={props.cancelText ? props.cancelText : <CancelText />}
      wrapClassName="antd-modal-wrapper"
      destroyOnClose={true}
    >
      {children}
    </Modal>
  );
};

export default ModalContainer;
