import { z } from "zod";
import {
  corpNameRequired,
  currentPasswordRequired,
  dealScaleRequired,
  emailFormat,
  emailRequired,
  industryRequired,
  nameRequired,
  newPasswordRequired,
  passwordConfirmInvalid,
  passwordConfirmRequired,
  passwordFormat,
  passwordRequired,
  phoneInvalid,
  phoneRequired,
  privacyPolicyRequired,
  useTermRequired,
  verificationCodeIncomplete,
  verificationCodeRequired,
} from "./inputErrorMessage";

export const zodLogin = z.object({
  email: z.string().min(1, emailRequired).email({ message: emailFormat }),
  user_pw: z
    .string()
    .min(1, passwordRequired)
    .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, { message: passwordFormat }),
  autoLogin: z.boolean(),
});

export const zodFindAccount = z.object({
  user_name: z.string().min(1, { message: nameRequired }),
  phone: z
    .string()
    .min(1, { message: phoneRequired })
    .regex(/^[0-9]+$/, { message: phoneInvalid }),
  auth_code: z.string().min(1, { message: verificationCodeRequired }),
  phone_verified: z.boolean().refine((value) => value === true, {
    message: verificationCodeIncomplete,
  }),
});

export const zodChangePassword = z
  .object({
    new_pw: z
      .string()
      .min(1, { message: newPasswordRequired })
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, { message: passwordFormat }),
    password_confirm: z
      .string()
      .min(1, { message: passwordConfirmRequired })
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, { message: passwordFormat }),
  })
  .refine((data) => data.new_pw === data.password_confirm, {
    message: passwordConfirmInvalid,
    path: ["password_confirm"],
  });

export const zodJoin = z
  .object({
    email: z.string().min(1, emailRequired).email({ message: emailFormat }),
    user_pw: z
      .string()
      .min(1, { message: passwordRequired })
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, { message: passwordFormat }),
    password_confirm: z
      .string()
      .min(1, { message: passwordConfirmRequired })
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, { message: passwordFormat }),
    user_name: z.string().min(1, { message: nameRequired }),
    phone: z
      .string()
      .min(1, { message: phoneRequired })
      .regex(/^[0-9]+$/, { message: phoneInvalid }),
    auth_code: z.string().min(1, { message: verificationCodeRequired }),
    company_name: z.string().min(1, { message: corpNameRequired }),
    user_position: z.string(),
    phone_verified: z.boolean().refine((value) => value === true, {
      message: verificationCodeIncomplete,
    }),
    user_key: z.optional(z.string()),
    use_term: z.boolean().refine((value) => value === true, {
      message: useTermRequired,
    }),
    privacy_policy: z.boolean().refine((value) => value === true, {
      message: privacyPolicyRequired,
    }),
    personal_info: z.boolean(),
  })
  .refine((data) => data.user_pw === data.password_confirm, {
    message: passwordConfirmInvalid,
    path: ["password_confirm"],
  });

export const zodEditAccount = z
  .object({
    user_name: z.string().min(1, { message: nameRequired }),
    company_name: z.string().min(1, { message: corpNameRequired }),
    user_position: z.string(),
    phone: z
      .string()
      .min(1, { message: phoneRequired })
      .regex(/^[0-9]+$/, { message: phoneInvalid }),
    phone_changed: z.optional(z.boolean()),
    phone_verified: z.optional(z.boolean()),
  })
  .superRefine(({ phone_changed, phone_verified }, ctx) => {
    if (phone_changed && !phone_verified) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: verificationCodeIncomplete,
        path: ["auth_code"],
      });
    }
  });

export const zodChangeMyPassword = z
  .object({
    user_pw: z
      .string()
      .min(1, { message: currentPasswordRequired })
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, { message: passwordFormat }),
    new_pw: z
      .string()
      .min(1, { message: newPasswordRequired })
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, { message: passwordFormat }),
    password_confirm: z
      .string()
      .min(1, { message: passwordConfirmRequired })
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, { message: passwordFormat }),
  })
  .refine((data) => data.new_pw === data.password_confirm, {
    message: passwordConfirmInvalid,
    path: ["password_confirm"],
  });

export const zodDeleteAccount = z.object({
  user_pw: z
    .string()
    .min(1, { message: currentPasswordRequired })
    .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, { message: passwordFormat }),
});

export const zodNeedsAdd = z.object({
  industry: z.string().min(1, { message: industryRequired }),
  deal_scale: z.string().min(1, { message: dealScaleRequired }),
});
