import React from "react";
import styled from "@emotion/styled";
import { Checkbox, Divider } from "antd";

import { FieldErrorMessage, FieldGroup } from "./CustomForm";
import { termsRequired } from "@/lib/react-hook-form/validation/inputErrorMessage";

const CheckBoxGroup = styled(Checkbox.Group)(() => ({
  flexDirection: "column",
  gap: "1rem",
}));

const TermDivider = styled(Divider)(() => ({
  marginBlock: "1.2rem",
}));

const SelectAllCheckBoxes = ({
  title,
  setCheckedList,
  options,
  checkedList,
  isSubmitted,
}) => {
  const checkAll = options.length === checkedList.length;

  const completeOptions = options.map((option) => {
    return option.value;
  });

  const onCheckSingleChange = (list) => {
    setCheckedList(list);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? completeOptions : []);
  };

  return (
    <FieldGroup>
      <header>{title}</header>

      <div>
        <Checkbox onChange={onCheckAllChange} checked={checkAll}>
          전체 동의
        </Checkbox>

        <FieldErrorMessage>
          {isSubmitted &&
            !checkedList.includes("use_term") &&
            !checkedList.includes("privacy_policy") &&
            termsRequired}
        </FieldErrorMessage>
      </div>

      <TermDivider />

      <CheckBoxGroup
        name="terms"
        options={options}
        value={checkedList}
        onChange={onCheckSingleChange}
      />
    </FieldGroup>
  );
};

export default SelectAllCheckBoxes;
