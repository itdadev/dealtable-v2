import React from "react";
import { Controller } from "react-hook-form";
import TextArea from "antd/es/input/TextArea";

import { FieldErrorMessage, TextAresFieldContainer } from "./CustomForm";
import { Flex } from "antd";

const TextAreaInput = (props) => {
  return props?.control ? (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, formState: { errors } }) => {
        return (
          <TextAresFieldContainer>
            <label htmlFor={props.name}>
              <Flex align="center" justify="space-between">
                <Flex>
                  <span>{props.label}</span>

                  <sup>{props.labelrequired === "true" && "*"}</sup>
                </Flex>
              </Flex>
            </label>

            <TextArea
              {...field}
              {...props}
              rows={4}
              id={props.name}
              showCount
              autoSize={{
                minRows: props.minrows ? props.minrows : 5,
                maxRows: 18,
              }}
              styles={{
                padding: "1.6rem",
                resize: "none",
                fontSize: "1.6rem",
                backgroundColor: props.readOnly ? "#FAFAFD" : "white",
              }}
              style={{
                padding: "1.6rem",
                resize: "none",
                fontSize: "1.6rem",
                backgroundColor: props.readOnly ? "#FAFAFD" : "white",
              }}
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
  ) : (
    <TextAresFieldContainer>
      <label>
        {props.label}

        <sup>{props.labelrequired === "true" && "*"}</sup>
      </label>

      <TextArea
        {...props}
        rows={4}
        id={props.name}
        showCount
        autoSize={{
          minRows: props.example ? 4 : 4,
          maxRows: props.example ? 18 : 4,
        }}
        style={{
          backgroundColor: "#FAFAFD",
          padding: "1.6rem",
          resize: "none",
          fontSize: "1.6rem",
          marginBottom: props.example ? "1rem" : 0,
        }}
      />
    </TextAresFieldContainer>
  );
};

export default TextAreaInput;
