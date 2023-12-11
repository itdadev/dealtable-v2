import React from "react";
import { Controller } from "react-hook-form";
import TextArea from "antd/es/input/TextArea";

import { FieldErrorMessage, TextAresFieldContainer } from "./CustomForm";
import styled from "@emotion/styled";

const CustomTextArea = styled(TextArea)(() => ({
  resize: "none",
}));

const TextAreaInput = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, formState: { errors } }) => {
        return (
          <TextAresFieldContainer>
            <label htmlFor={props.name}>{props.label}</label>

            <CustomTextArea
              {...field}
              {...props}
              rows={4}
              id={props.name}
              showCount
            />

            {errors[props.name] && (
              <FieldErrorMessage>
                {errors[props.name].message}
              </FieldErrorMessage>
            )}
          </TextAresFieldContainer>
        );
      }}
    />
  );
};

export default TextAreaInput;
