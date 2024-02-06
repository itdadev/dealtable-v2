import React from "react";
import { Controller } from "react-hook-form";
import Password from "antd/es/input/Password";

import { FieldContainer, FieldErrorMessage } from "./CustomForm";
import { Flex } from "antd";

const PasswordInput = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, formState: { errors } }) => {
        return (
          <FieldContainer>
            <label htmlFor={props.name}>
              <Flex align="center" justify="space-between">
                <Flex>
                  <span>{props.label}</span>

                  <sup>{props.labelrequired === "true" && "*"}</sup>
                </Flex>
              </Flex>
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

export default PasswordInput;
