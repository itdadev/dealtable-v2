import React from "react";
import { Controller } from "react-hook-form";
import { Checkbox } from "antd";

import { FieldContainer, FieldErrorMessage } from "./CustomForm";

const SingleCheckBox = ({ name, control, label }) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field, formState: { errors } }) => {
          return (
            <FieldContainer>
              <Checkbox {...field} checked={field.value}>
                {label}
              </Checkbox>

              {errors[name] && (
                <FieldErrorMessage>{errors[name].message}</FieldErrorMessage>
              )}
            </FieldContainer>
          );
        }}
      />
    </div>
  );
};

export default SingleCheckBox;
