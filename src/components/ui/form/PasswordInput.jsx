import React from "react";
import { Controller } from "react-hook-form";
import Password from "antd/es/input/Password";

import { FieldContainer, FieldErrorMessage } from "./CustomForm";

const PassswordInput = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, formState: { errors } }) => {
        return (
          <FieldContainer>
            <label htmlFor={props.name}>
              {props.label}

              <sup>
                {props.labelrequired === "true" && !props.readOnly && "*"}
              </sup>
            </label>

            <Password
              {...field}
              {...props}
              id={props.name}
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

export default PassswordInput;
