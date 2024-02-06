import { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import {
  corpNamePH,
  currentPasswordPH,
  dealScalePH,
  emailPH,
  industryPH,
  keyConditionPH,
  namePH,
  newPasswordPH,
  passwordConfirmPH,
  passwordPH,
  phoneNumPH,
  positionPH,
  revenuePH,
  salesPH,
} from "@/lib/react-hook-form/validation/placeholderTexts";
import {
  CompanyNameText,
  CurrentPasswordText,
  DealScaleText,
  EmailText,
  IndustryText,
  KeyConditiondText,
  NewPasswordText,
  PasswordConfirmText,
  PasswordText,
  PhoneText,
  RevenueText,
  SalesText,
  UserNameText,
  UserPositionText,
} from "@/util/language-setting/texts/TranslatedFieldTexts";

import PasswordInput from "../form/PasswordInput";
import { TextAreaInput, TextInput } from "../form";

export const EmailField = ({ control, readOnly }) => {
  return (
    <TextInput
      name="email"
      control={control}
      placeholder={emailPH}
      readOnly={readOnly ? "" : readOnly}
      label={<EmailText />}
      labelrequired="true"
    />
  );
};

export const PasswordField = ({ control, readOnly = false }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <PasswordInput
      name="user_pw"
      label={<PasswordText />}
      control={control}
      type="password"
      labelrequired="true"
      placeholder={readOnly ? "" : passwordPH}
      readOnly={readOnly}
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
      visibilityToggle={{
        visible: passwordVisible,
        onVisibleChange: setPasswordVisible,
      }}
    />
  );
};

export const ConfirmPasswordField = ({ control, readOnly = false }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <PasswordInput
      name="password_confirm"
      label={<PasswordConfirmText />}
      labelrequired="true"
      control={control}
      type="password"
      placeholder={readOnly ? "" : passwordConfirmPH}
      readOnly={readOnly}
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
      visibilityToggle={{
        visible: passwordVisible,
        onVisibleChange: setPasswordVisible,
      }}
    />
  );
};

export const NewPasswordField = ({ control }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <PasswordInput
      name="new_pw"
      label={<NewPasswordText />}
      labelrequired="true"
      control={control}
      type="password"
      placeholder={newPasswordPH}
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
      visibilityToggle={{
        visible: passwordVisible,
        onVisibleChange: setPasswordVisible,
      }}
    />
  );
};

export const CurrentPasswordField = ({ control }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <PasswordInput
      name="user_pw"
      label={<CurrentPasswordText />}
      labelrequired="true"
      control={control}
      type="password"
      placeholder={currentPasswordPH}
      iconRender={(visible) =>
        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
      }
      visibilityToggle={{
        visible: passwordVisible,
        onVisibleChange: setPasswordVisible,
      }}
    />
  );
};

export const UserNameField = ({ control, readOnly = false }) => {
  return (
    <TextInput
      name="user_name"
      label={<UserNameText />}
      labelrequired="true"
      control={control}
      placeholder={readOnly ? "" : namePH}
      readOnly={readOnly}
    />
  );
};

export const CompanyNameField = ({ control, readOnly = false }) => {
  return (
    <TextInput
      name="company_name"
      label={<CompanyNameText />}
      labelrequired="true"
      control={control}
      placeholder={readOnly ? "" : corpNamePH}
      readOnly={readOnly}
    />
  );
};

export const UserPositionField = ({ control, readOnly = false }) => {
  return (
    <TextInput
      name="user_position"
      label={<UserPositionText />}
      control={control}
      placeholder={readOnly ? "" : positionPH}
      readOnly={readOnly}
    />
  );
};

export const PhoneField = ({
  control,
  readOnly = false,
  children,
  addonAfter,
}) => {
  return (
    <TextInput
      name="phone"
      label={<PhoneText />}
      labelrequired="true"
      inputMode="decimal"
      control={control}
      placeholder={readOnly ? "" : phoneNumPH}
      readOnly={readOnly}
      pattern="[0-9]+"
      addonAfter={addonAfter}
      bordered={false}
      customborder="true"
    >
      {children}
    </TextInput>
  );
};

export const IndustryField = ({
  control,
  readOnly = false,
  defaultValue,
  example,
}) => {
  return (
    <TextAreaInput
      name="industry"
      label={<IndustryText />}
      labelrequired="true"
      control={control ? control : undefined}
      placeholder={readOnly ? "" : industryPH}
      readOnly={readOnly}
      maxLength={200}
      defaultValue={defaultValue}
      example={example}
    />
  );
};

export const DealScaleField = ({
  control,
  readOnly = false,
  defaultValue,
  setValue,
}) => {
  return (
    <TextInput
      name="deal_scale"
      // inputMode="decimal"
      label={<DealScaleText />}
      labelrequired="true"
      control={control}
      placeholder={readOnly ? "" : dealScalePH}
      readOnly={readOnly}
      defaultValue={defaultValue}
      suffix="억원"
      // onChange={(e) => formatWon(e, setValue, "deal_scale")}
      maxLength={50}
    />
  );
};

export const SalesField = ({
  control,
  readOnly = false,
  defaultValue,
  setValue,
}) => {
  return (
    <TextInput
      name="sales"
      label={<SalesText />}
      // inputMode="decimal"
      control={control}
      placeholder={readOnly ? "" : salesPH}
      readOnly={readOnly}
      defaultValue={defaultValue}
      suffix="억원"
      // onChange={(e) => formatWon(e, setValue, "sales")}
      maxLength={50}
    />
  );
};

export const RevenueField = ({
  control,
  readOnly = false,
  defaultValue,
  setValue,
}) => {
  return (
    <TextInput
      name="revenue"
      // inputMode="decimal"
      label={<RevenueText />}
      control={control}
      placeholder={readOnly ? "" : revenuePH}
      readOnly={readOnly}
      defaultValue={defaultValue}
      suffix="억원"
      // onChange={(e) => formatWon(e, setValue, "revenue")}
      maxLength={50}
    />
  );
};

export const KeyConditionField = ({
  control,
  readOnly = false,
  defaultValue,
  example,
}) => {
  return (
    <TextAreaInput
      name="key_condition"
      label={<KeyConditiondText />}
      control={control}
      placeholder={readOnly ? "" : keyConditionPH}
      readOnly={readOnly}
      maxLength={700}
      defaultValue={defaultValue}
      example={example}
      minrows={readOnly ? 5 : 8}
    />
  );
};
