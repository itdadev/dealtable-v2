import { z } from "zod";
import {
  corpNameRequired,
  emailFormat,
  emailRequired,
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
  name: z.string().min(1, nameRequired),
  phone: z.string().min(1, phoneRequired),
  verification_code: z.string().min(1, verificationCodeRequired),
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
    verification_code: z.string().min(1, verificationCodeRequired),
    company_name: z.string().min(1, corpNameRequired),
    user_position: z.string(),
    phone_verified: z.boolean().refine((value) => value === true, {
      message: verificationCodeIncomplete,
    }),
  })
  .refine((data) => data.user_pw === data.password_confirm, {
    message: passwordConfirmInvalid,
    path: ["password_confirm"],
  });

export const zodNeedsAdd = z
  .object({
    industry: z.string(),
    deal_scale: z.string(),
    sales: z.string(),
    revenue: z.string(),
    key_condition: z.string(),
  })
  .refine((data) => data.user_pw === data.password_confirm, {
    message: passwordConfirmInvalid,
    path: ["password_confirm"],
  });
