import React from "react";
import { Controller } from "react-hook-form";
import TextArea from "antd/es/input/TextArea";

import { FieldErrorMessage, TextAresFieldContainer } from "./CustomForm";

const TextAreaInput = (props) => {
  return props?.control ? (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, formState: { errors } }) => {
        return (
          <TextAresFieldContainer>
            <label htmlFor={props.name}>
              {props.label}

              <sup>{props.labelrequired === "true" && "*"}</sup>
            </label>

            <TextArea
              {...field}
              {...props}
              rows={4}
              id={props.name}
              showCount
              styles={{
                padding: "1.6rem",
                resize: "none",
                fontSize: "1.6rem",
                backgroundColor: props.readOnly ? "#FAFAFD" : "white",
              }}
              style={{
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
          resize: "none",
          fontSize: "1.6rem",
        }}
      />
    </TextAresFieldContainer>
  );
};

export default TextAreaInput;
