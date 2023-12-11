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
  phoneRequired,
  verificationCodeIncomplete,
  verificationCodeRequired,
} from "./inputErrorMessage";

export const zodLogin = z.object({
  email: z.string().min(1, emailRequired).email(emailFormat),
  user_pw: z
    .string()
    .min(1, passwordRequired)
    .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, passwordFormat),
  autoLogin: z.boolean(),
});

export const zodFindAccount = z.object({
  user_name: z.string().min(1, nameRequired),
  phone: z.string().min(1, phoneRequired),
  auth_code: z.string().min(1, verificationCodeRequired),
  phone_verified: z.boolean().refine((value) => value === true, {
    message: verificationCodeIncomplete,
  }),
});

export const zodChangePassword = z
  .object({
    user_pw: z
      .string()
      .min(1, newPasswordRequired)
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, passwordFormat),
    password_confirm: z
      .string()
      .min(1, passwordConfirmRequired)
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, passwordFormat),
  })
  .refine((data) => data.user_pw === data.password_confirm, {
    message: passwordConfirmInvalid,
    path: ["password_confirm"],
  });

export const zodJoin = z
  .object({
    email: z.string().min(1, emailRequired).email(emailFormat),
    user_pw: z
      .string()
      .min(1, passwordRequired)
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, passwordFormat),
    password_confirm: z
      .string()
      .min(1, passwordConfirmRequired)
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, passwordFormat),
    user_name: z.string().min(1, nameRequired),
    phone: z.string().min(1, phoneRequired),
    auth_code: z.string().min(1, verificationCodeRequired),
    company_name: z.string().min(1, corpNameRequired),
    user_position: z.string(),
    phone_verified: z.boolean().refine((value) => value === true, {
      message: verificationCodeIncomplete,
    }),
    user_key: z.optional(z.number()),
  })
  .refine((data) => data.user_pw === data.password_confirm, {
    message: passwordConfirmInvalid,
    path: ["password_confirm"],
  });

export const zodEditAccount = z
  .object({
    user_name: z.string().min(1, nameRequired),
    company_name: z.string().min(1, corpNameRequired),
    user_position: z.string(),
    phone: z.string(),
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
      .min(1, currentPasswordRequired)
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, passwordFormat),
    new_pw: z
      .string()
      .min(1, newPasswordRequired)
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, passwordFormat),
    password_confirm: z
      .string()
      .min(1, passwordConfirmRequired)
      .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, passwordFormat),
  })
  .refine((data) => data.new_pw === data.password_confirm, {
    message: passwordConfirmInvalid,
    path: ["password_confirm"],
  });

export const zodDeleteAccount = z.object({
  user_pw: z
    .string()
    .min(1, currentPasswordRequired)
    .regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/, passwordFormat),
});

export const zodNeedsAdd = z.object({
  industry: z.string().min(1, industryRequired),
  deal_scale: z.string().min(1, dealScaleRequired),
});
