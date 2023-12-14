import React from "react";
import { Controller } from "react-hook-form";
import { Flex, Input } from "antd";

import { FieldContainer, FieldErrorMessage } from "./CustomForm";
import { color } from "@/theme";

const TextInput = ({ children, ...props }) => {
  return props.control ? (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, formState: { errors } }) => {
        return (
          <FieldContainer readOnly={props.readOnly}>
            <label htmlFor={props.name}>
              {props.label}

              <sup>{props.labelrequired === "true" && "*"}</sup>
            </label>

            <Flex gap="small">
              <Flex style={{ width: "100%" }} vertical gap="2px">
                <Input
                  {...field}
                  {...props}
                  id={props.name}
                  status={errors[props.name] ? "error" : ""}
                  size="large"
                  type={props.type ? props.type : "text"}
                  addonAfter={props.addonAfter}
                  style={{
                    background: props.readOnly ? "#FAFAFD" : "white",
                    color: props.readOnly
                      ? color.readOnlyText
                      : color.baseBlack,
                  }}
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
        {props.label}

        <sup>{props.labelrequired === "true" && "*"}</sup>
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
