import { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import { formatWon } from "@/util/ModifyData";
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

import { TextAreaInput, TextInput } from "../form";
import PasswordInput from "../form/PasswordInput";

export const EmailField = ({ control, readOnly }) => {
  return (
    <TextInput
      name="email"
      control={control}
      placeholder={emailPH}
      readOnly={readOnly}
      label="이메일"
      labelrequired="true"
    />
  );
};

export const PasswordField = ({ control, readOnly = false }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <PasswordInput
      name="user_pw"
      label="비밀번호"
      control={control}
      type="password"
      labelrequired="true"
      placeholder={passwordPH}
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
      label="비밀번호 확인"
      labelrequired="true"
      control={control}
      type="password"
      placeholder={passwordConfirmPH}
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
      label="새 비밀번호"
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
      label="현재 비밀번호"
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
      label="이름"
      labelrequired="true"
      control={control}
      placeholder={namePH}
      readOnly={readOnly}
    />
  );
};

export const CompanyNameField = ({ control, readOnly = false }) => {
  return (
    <TextInput
      name="company_name"
      label="기업명"
      labelrequired="true"
      control={control}
      placeholder={corpNamePH}
      readOnly={readOnly}
    />
  );
};

export const UserPositionField = ({ control, readOnly = false }) => {
  return (
    <TextInput
      name="user_position"
      label="직책"
      control={control}
      placeholder={positionPH}
      readOnly={readOnly}
    />
  );
};

export const PhoneField = ({ control, readOnly = false, children }) => {
  return (
    <TextInput
      name="phone"
      label="전화번호"
      labelrequired="true"
      type="number"
      control={control}
      placeholder={phoneNumPH}
      readOnly={readOnly}
      pattern="[0-9]+"
    >
      {children}
    </TextInput>
  );
};

export const IndustryField = ({ control, readOnly = false, defaultValue }) => {
  return (
    <TextAreaInput
      name="industry"
      label="산업군"
      labelrequired="true"
      control={control ? control : undefined}
      placeholder={industryPH}
      readOnly={readOnly}
      maxLength={200}
      defaultValue={defaultValue}
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
      label="딜 규모"
      labelrequired="true"
      control={control}
      placeholder={dealScalePH}
      readOnly={readOnly}
      defaultValue={defaultValue}
      onChange={(e) => formatWon(e, setValue, "deal_scale")}
      maxLength={15}
      suffix="억원"
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
      label="매출"
      control={control}
      placeholder={salesPH}
      readOnly={readOnly}
      defaultValue={defaultValue}
      onChange={(e) => formatWon(e, setValue, "sales")}
      maxLength={15}
      suffix="억원"
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
      label="영업 이익"
      control={control}
      placeholder={revenuePH}
      readOnly={readOnly}
      defaultValue={defaultValue}
      onChange={(e) => formatWon(e, setValue, "revenue")}
      maxLength={15}
      suffix="억원"
    />
  );
};

export const KeyConditionField = ({
  control,
  readOnly = false,
  defaultValue,
}) => {
  return (
    <TextAreaInput
      name="key_condition"
      label="핵심 조건"
      control={control}
      placeholder={keyConditionPH}
      readOnly={readOnly}
      maxLength={700}
      defaultValue={defaultValue}
    />
  );
};
