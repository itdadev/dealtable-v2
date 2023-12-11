import React from "react";
import { Controller } from "react-hook-form";
import { Flex, Input } from "antd";

import { FieldContainer, FieldErrorMessage } from "./CustomForm";

const TextInput = ({ children, ...props }) => {
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

            <Flex gap="small">
              <Flex style={{ width: "100%" }} vertical gap="2">
                <Input
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
              </Flex>

              {children}
            </Flex>
          </FieldContainer>
        );
      }}
    />
  );
};

export default TextInput;
