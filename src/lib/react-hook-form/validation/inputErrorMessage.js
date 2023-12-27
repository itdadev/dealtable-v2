import { LOCAL_STORAGE_SITE_LANGUAGE } from "@/constants/StorageKey";

const IsKorean = localStorage.getItem(LOCAL_STORAGE_SITE_LANGUAGE) === "ko";
export const emailRequired = IsKorean
  ? "이메일을 입력해주세요."
  : "Please Enter Email";
export const emailFormat = IsKorean ? "이메일 형식을 확인해주세요." : "";

export const currentPasswordRequired = IsKorean
  ? "현재 비밀번호를 입력해주세요."
  : "";
export const passwordRequired = IsKorean ? "비밀번호를 입력해주세요." : "";
export const newPasswordRequired = IsKorean
  ? "변경하실 비밀번호를 입력해주세요."
  : "";
export const passwordFormat = IsKorean
  ? "영문+숫자 조합 8~15자리를 입력해주세요."
  : "";
export const passwordConfirmRequired = IsKorean
  ? "비밀번호를 다시 입력해주세요."
  : "";
export const passwordConfirmInvalid = IsKorean
  ? "비밀번호가 일치하지 않습니다."
  : "";

export const nameRequired = IsKorean ? "이름을 입력해주세요." : "";
export const phoneRequired = IsKorean ? "전화번호를 입력해주세요." : "";
export const differentPhoneRequired = IsKorean
  ? "기존 번호와 다른 번호를 입력해주세요."
  : "";
export const verificationCodeRequired = IsKorean
  ? "인증 번호를 입력해주세요."
  : "";
export const verificationCodeInvalid = IsKorean
  ? "인증 번호를 확인해주세요."
  : "";
export const verificationCodeIncomplete = IsKorean
  ? "인증을 완료해주세요."
  : "";
export const phoneAlreadyExists = IsKorean ? "이미 가입된 전화번호입니다." : "";
export const phoneDoesntExists = IsKorean
  ? "회원 목록에 존재하지 않는 전화번호입니다."
  : "";
export const corpNameRequired = IsKorean ? "기업명을 입력해주세요." : "";
export const useTermRequired = IsKorean ? "이용약관에 동의해주세요." : "";
export const privacyPolicyRequired = IsKorean
  ? "개인정보 처리방침에 동의해주세요."
  : "";

export const industryRequired = IsKorean ? "산업군을 입력해주세요." : "";
export const dealScaleRequired = IsKorean ? "딜규모를 입력해주세요." : "";
