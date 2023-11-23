import React from "react";
import { Controller } from "react-hook-form";
import TextArea from "antd/es/input/TextArea";

import { FieldErrorMessage, TextAresFieldContainer } from "./CustomForm";

const TextAreaInput = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field, formState: { errors } }) => {
        return (
          <TextAresFieldContainer>
            <TextArea {...field} {...props} rows={4} />

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
