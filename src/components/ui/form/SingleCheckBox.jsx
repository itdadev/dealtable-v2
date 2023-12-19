import React from "react";
import { Controller } from "react-hook-form";
import { Checkbox } from "antd";

import { FieldErrorMessage } from "./CustomForm";

const SingleCheckBox = ({ name, control, label, noError }) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field, formState: { errors } }) => {
          return (
            <>
              <Checkbox {...field} checked={field.value}>
                {label}
              </Checkbox>

              {errors[name] && !noError && (
                <FieldErrorMessage>{errors[name].message}</FieldErrorMessage>
              )}
            </>
          );
        }}
      />
    </div>
  );
};

export default SingleCheckBox;
