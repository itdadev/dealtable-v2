import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Checkbox, Divider, Flex } from "antd";

import { FieldErrorMessage, FieldGroup } from "./CustomForm";
import { SingleCheckBox } from ".";
import {
  SelectAllText,
  ViewText,
} from "@/util/language-setting/texts/TranslatedTexts";

const TermDivider = styled(Divider)(() => ({
  marginBlock: "1.2rem",
}));

const TermLink = styled.button(({ theme }) => ({
  color: theme.color.grey,
  fontSize: "1.2rem",
  textDecoration: "underline",
  lineHeight: "1.4rem",
}));

const SelectAllCheckBoxes = ({
  title,
  options,
  control,
  setValue,
  watch,
  errors,
  handleTermModal,
}) => {
  const [allChecked, setAllChecked] = useState(false);

  const onCheckAllChange = (e) => {
    if (e.target.checked) {
      options.forEach((element) => {
        setValue(element.value, true, { shouldValidate: true });
      });
    } else {
      options.forEach((element) => {
        setValue(element.value, false, { shouldValidate: true });
      });
    }
  };

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      const result = options.every((option) => value[option.value] === true);

      setAllChecked(result);
    });

    return () => subscription.unsubscribe();
  }, [options, watch]);

  const handleModalOpen = useCallback(
    (type) => {
      handleTermModal(type);
    },
    [handleTermModal],
  );

  return (
    <FieldGroup>
      <header>{title}</header>

      <div>
        <Checkbox onChange={onCheckAllChange} checked={allChecked}>
          <SelectAllText />
        </Checkbox>
      </div>

      {options.map((option) => {
        return (
          errors[option.value] && (
            <FieldErrorMessage key={option.value}>
              {errors[option.value].message}
            </FieldErrorMessage>
          )
        );
      })}

      <TermDivider />

      {options.map((option) => {
        return (
          <Flex align="center" key={option.value}>
            <SingleCheckBox
              name={option.value}
              control={control}
              label={option.label}
              noError
            />

            <TermLink
              type="button"
              onClick={() => handleModalOpen(option.value)}
            >
              <ViewText />
            </TermLink>
          </Flex>
        );
      })}
    </FieldGroup>
  );
};

export default SelectAllCheckBoxes;
