import React from "react";
import { Controller } from "react-hook-form";
import { InputNumber } from "antd";

import { FieldContainer, FieldErrorMessage } from "./CustomForm";

const NumberInput = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, formState: { errors } }) => {
        return (
          <FieldContainer>
            <InputNumber
              {...field}
              {...props}
              controls={false}
              status={errors[props.name] ? "error" : ""}
              size="large"
              style={{ width: "100%" }}
              placeholder={props.placeholder}
            />

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

export default NumberInput;
