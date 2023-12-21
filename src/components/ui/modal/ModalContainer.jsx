import React from "react";
import { Modal } from "antd";

const ModalContainer = ({ children, ...props }) => {
  return (
    <Modal
      {...props}
      okButtonProps={{ shape: "round" }}
      cancelButtonProps={{ shape: "round" }}
      centered
    >
      {children}
    </Modal>
  );
};

export default ModalContainer;
