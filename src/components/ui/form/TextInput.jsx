import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "antd";

import { FieldContainer, FieldErrorMessage } from "./CustomForm";

const TextInput = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, formState: { errors } }) => {
        return (
          <FieldContainer>
            <Input
              {...field}
              {...props}
              status={errors[props.name] ? "error" : ""}
              size="large"
              type={props.type ? props.type : "text"}
            />

            {props.customerror && (
              <FieldErrorMessage>{props.customerror}</FieldErrorMessage>
            )}

            {errors[props.name] && (
              <FieldErrorMessage>
                {errors[props.name].message}
              </FieldErrorMessage>
            )}
          </FieldContainer>
        );
      }}
    />
  );
};

export default TextInput;
