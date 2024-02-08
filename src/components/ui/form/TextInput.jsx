import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { Flex, Input } from "antd";

import { FieldContainer, FieldErrorMessage } from "./CustomForm";
import { color } from "@/theme";
import styled from "@emotion/styled";

const StyledInput = styled(Input)(({ props, errors, isfocused }) => ({
  background: props.readOnly ? "#FAFAFD" : "white",
  color: props.readOnly ? color.readOnlyText : color.baseBlack,
  transition: "all 0.2s",
  border:
    props.customborder === "true" && errors[props.name]
      ? `1px solid ${color.error}`
      : props.customborder === "true" && isfocused === "true"
        ? `1px solid ${color.primary}`
        : "1px solid rgb(217, 217, 217)",
  boxShadow:
    isfocused === "true" && !errors[props.name]
      ? "0 0 0 2px rgba(1, 6, 27, 0.39)"
      : "",

  "&:hover": {
    border:
      props.customborder === "true" && !errors[props.name]
        ? `1px solid ${color.primary}`
        : "",
  },
}));
const TextInput = ({ children, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return props.control ? (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, formState: { errors } }) => {
        return (
          <FieldContainer readOnly={props.readOnly}>
            <label htmlFor={props.name}>
              <Flex align="center" justify="space-between">
                <Flex>
                  <span>{props.label}</span>

                  <sup>{props.labelrequired === "true" && "*"}</sup>
                </Flex>

                {props.labelafter && props.labelafter}
              </Flex>
            </label>

            <Flex gap="small">
              <Flex style={{ width: "100%" }} vertical gap="2px">
                <StyledInput
                  className={
                    props.customborder === "true"
                      ? "antd-input-custom-border"
                      : ""
                  }
                  {...field}
                  {...props}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  props={props}
                  errors={errors}
                  id={props.name}
                  isfocused={isFocused ? "true" : "false"}
                  status={errors[props.name] ? "error" : ""}
                  size="large"
                  type={props.type ? props.type : "text"}
                  addonAfter={props.addonAfter}
                  inputMode={props.inputMode}
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
  ) : (
    <FieldContainer>
      <label htmlFor={props.name}>
        <Flex align="center" justify="space-between">
          <Flex>
            <span>{props.label}</span>

            <sup>{props.labelrequired === "true" && "*"}</sup>
          </Flex>

          {props.labelafter && props.labelafter}
        </Flex>
      </label>

      <Flex gap="small">
        <Flex style={{ width: "100%" }} vertical gap="2px">
          <Input
            {...props}
            id={props.name}
            size="large"
            type={props.type ? props.type : "text"}
            addonAfter={props.addonAfter}
            style={{
              background: props.readOnly ? "#FAFAFD" : "white",
            }}
          />

          {props.customerror && (
            <FieldErrorMessage>{props.customerror}</FieldErrorMessage>
          )}
        </Flex>

        {children}
      </Flex>
    </FieldContainer>
  );
};

export default TextInput;
