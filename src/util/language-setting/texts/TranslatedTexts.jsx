import { FormattedMessage } from "react-intl";

// NOTE: FAQ
export const NoFaqText = () => {
  // FAQ가 없습니다.
  return <FormattedMessage id="lang-no-faq" />;
};

// NOTE: 공지사항
export const NoticeText = () => {
  // 공지사항
  return <FormattedMessage id="lang-notice" />;
};

export const NoNoticeText = () => {
  // 공지사항이 없습니다.
  return <FormattedMessage id="lang-no-notice" />;
};

// NOTE: 더보기 버튼
export const LoadingText = () => {
  // 불러오는 중...
  return <FormattedMessage id="lang-loading" />;
};

export const LoadMoreText = () => {
  // 더보기
  return <FormattedMessage id="lang-load-more" />;
};

export const NoMoreDataText = () => {
  // 더이상 불러 올 데이터가 없습니다.
  return <FormattedMessage id="lang-no-more-data" />;
};

// NOTE: 홈
export const StartText = () => {
  // 시작하기
  return <FormattedMessage id="lang-start" />;
};

export const Home1Text1 = () => {
  // 원하는 조건의
  return <FormattedMessage id="lang-home-1-text-1" />;
};

export const Home1Text2 = () => {
  // 인수대상 회사를 찾는 것은
  return <FormattedMessage id="lang-home-1-text-2" />;
};

export const Home1Text3 = () => {
  // 매우 어렵습니다.
  return <FormattedMessage id="lang-home-1-text-3" />;
};

export const Home2Text1 = () => {
  // DEALTABLE은

  return <FormattedMessage id="lang-home-2-text-1" />;
};

export const Home2Text2 = () => {
  // 조건에 맞는 인수대상 회사를
  return <FormattedMessage id="lang-home-2-text-2" />;
};

export const Home2Text3 = () => {
  // 빠르고 정확하게 찾아주는 서비스입니다.
  return <FormattedMessage id="lang-home-2-text-3" />;
};

export const Home3Text1 = () => {
  // M&A시장에서 회사를 직접 인수하거나
  return <FormattedMessage id="lang-home-3-text-1" />;
};

export const Home3Text2 = () => {
  // 인수를 중개, 자문하는 모든 Buy side가 DEALTABLE의 고객입니다.
  return <FormattedMessage id="lang-home-3-text-2" />;
};

export const Home3Text3 = () => {
  // 인수를 중개, 자문하는 모든 Buy side가 DEALTABLE의 고객입니다.
  return <FormattedMessage id="lang-home-3-text-3" />;
};

export const Home4Text1 = () => {
  // 산업군, 매출 및 영업이익,
  return <FormattedMessage id="lang-home-4-text-1" />;
};

export const Home4Text2 = () => {
  // 투자규모 및 핵심 조건 몇 가지만
  return <FormattedMessage id="lang-home-4-text-2" />;
};

export const Home4Text3 = () => {
  //  입력하면 됩니다.
  return <FormattedMessage id="lang-home-4-text-3" />;
};

export const Home5Text1Contents = () => {
  // IT 기술로 축적한 10만개 이상의 DB와
  return <FormattedMessage id="lang-home-5-text-1-contents" />;
};

export const Home5Text2Contents = () => {
  // 리서치팀의 최적화된 프로세스로 운영됩니다.
  return <FormattedMessage id="lang-home-5-text-2-contents" />;
};

export const Home6Text1 = () => {
  // 회계법인, 사모펀드 및 대기업 출신 전문가로 구성된
  return <FormattedMessage id="lang-home-6-text-1" />;
};

export const Home6Text2 = () => {
  // MMP가 만들고 운영합니다.
  return <FormattedMessage id="lang-home-6-text-2" />;
};

// NOTE: 인수 니즈
export const DeleteText = () => {
  // 삭제
  return <FormattedMessage id="lang-delete" />;
};

export const DeleteLongText = () => {
  // 삭제하기
  return <FormattedMessage id="lang-delete-long" />;
};

export const CancelText = () => {
  // 취소
  return <FormattedMessage id="lang-cancel" />;
};

export const EditText = () => {
  // 수정
  return <FormattedMessage id="lang-edit" />;
};

export const EditLongText = () => {
  // 수정하기
  return <FormattedMessage id="lang-edit-long" />;
};

export const AddText = () => {
  // 생성
  return <FormattedMessage id="lang-add" />;
};

export const AddLongText = () => {
  // 생성하기
  return <FormattedMessage id="lang-add-long" />;
};

export const TempoAddText = () => {
  // 임시저장
  return <FormattedMessage id="lang-tempo-add" />;
};

export const TerminateText = () => {
  // 종료하기
  return <FormattedMessage id="lang-terminate" />;
};

export const TerminateLongText = () => {
  // 종료하기
  return <FormattedMessage id="lang-terminate-long" />;
};

export const NeedsAddModalTitleText = ({ text }) => {
  // 인수 니즈 {text}
  return (
    <FormattedMessage id="lang-needs-add-modal-title" values={{ text: text }} />
  );
};

export const NeedsAddEditQuestionText = ({ text }) => {
  // 인수 니즈를 {text}하시겠습니까?
  return (
    <FormattedMessage
      id="lang-needs-add-edit-question"
      values={{ text: text }}
    />
  );
};

export const NeedsAddQuestionText = ({ text }) => {
  // 인수 니즈를 {text}하시겠습니까?
  return (
    <FormattedMessage id="lang-needs-add-question" values={{ text: text }} />
  );
};

export const NeedsTempoText = () => {
  // 인수 니즈 임시저장
  return <FormattedMessage id="lang-needs-tempo" />;
};

export const NeedsTempoQuestionText = () => {
  // 인수 니즈를 임시로 저장하시겠습니까?
  return <FormattedMessage id="lang-needs-tempo-question" />;
};

export const NeedsDeleteQuestionText = () => {
  // 작성중이신 인수 니즈 요청서를 삭제하시겠습니까?
  return <FormattedMessage id="lang-needs-delete-question" />;
};

export const NeedsDeleteWarningText = () => {
  // 작성중인 글은 30일 동안 유지되며 기간내에 계정을 정상적으로 사용할 수 있습니다. 기간이 지나면 계정과 데이터가 영구적으로 삭제됩니다.
  return <FormattedMessage id="lang-needs-delete-warning" />;
};

export const NeedsTerminateText = () => {
  // 인수 니즈 종료
  return <FormattedMessage id="lang-needs-terminate" />;
};

export const NeedsTerminateQuestionText = () => {
  // 인수 니즈를 종료하시겠습니까?
  return <FormattedMessage id="lang-needs-terminate-question" />;
};

export const NeedsTerminateWarningText = () => {
  // 종료 시, 더 이상 인수니즈에 맞는 회사를 추천해드리지 않습니다.
  return <FormattedMessage id="lang-needs-terminate-warning" />;
};

export const NeedsRequestText = () => {
  // 인수 니즈 요청
  return <FormattedMessage id="lang-needs-request" />;
};

export const ShowExampleText = () => {
  // 작성 예시 보기
  return <FormattedMessage id="lang-show-example" />;
};

export const WritingText = () => {
  // 작성중
  return <FormattedMessage id="lang-writing" />;
};

export const NeedsAddCompleteText = () => {
  // 인수 니즈 생성 완료
  return <FormattedMessage id="lang-needs-add-complete" />;
};

export const NeedsAddComplete1Text = () => {
  // 인수 니즈 생성이 완료되었습니다.
  return <FormattedMessage id="lang-needs-add-complete-1" />;
};

export const NeedsAddComplete2Text = () => {
  // 3~5일 이내로 검토 후 연락드리겠습니다.
  return <FormattedMessage id="lang-needs-add-complete-2" />;
};

export const ToTheListText = () => {
  // 목록으로
  return <FormattedMessage id="lang-to-the-list" />;
};

// NOTE: 인수 니즈 : 목록
export const NeedsDeleteText = () => {
  // 인수 니즈 삭제
  return <FormattedMessage id="lang-needs-delete" />;
};

export const NeedsDeleteCompleteText = () => {
  // 인수 니즈가 성공적으로 삭제되었습니다.
  return <FormattedMessage id="lang-needs-delete-complete" />;
};

export const NeedsDoneText = () => {
  // 인수 니즈 종료
  return <FormattedMessage id="lang-needs-done" />;
};

export const NeedsDoneCompleteText = () => {
  // 인수 니즈가 성공적으로 종료되었습니다.
  return <FormattedMessage id="lang-needs-done-complete" />;
};

export const NeedsTempoAddText = () => {
  // 인수 니즈 임시 저장
  return <FormattedMessage id="lang-needs-tempo-add" />;
};

export const NeedsTempoAddCompleteText = () => {
  // 인수 니즈가 성공적으로 임시 저장되었습니다.
  return <FormattedMessage id="lang-needs-tempo-add-complete" />;
};

export const NeedsEditText = () => {
  // 인수 니즈 수정
  return <FormattedMessage id="lang-needs-edit" />;
};

export const NeedsEditCompleteText = () => {
  // 인수 니즈가 성공적으로 수정되었습니다.
  return <FormattedMessage id="lang-needs-edit-complete" />;
};

export const NeedTakeoverText = () => {
  // 인수 니즈
  return <FormattedMessage id="lang-needs-takeover" />;
};

export const TotalTicketText = ({ total }) => {
  // 전체 {total}장
  return <FormattedMessage id="lang-total-ticket" values={{ total: total }} />;
};

export const NeedsAddText = () => {
  // 인수 니즈 생성
  return <FormattedMessage id="lang-needs-add" />;
};

export const NoNeedsDataText = () => {
  // 작성하신 인수 니즈가 없습니다.
  return <FormattedMessage id="lang-no-needs-data" />;
};

// User
export const FoundEmailAddressText = () => {
  // 가입하신 이메일은 아래와 같습니다.
  return <FormattedMessage id="lang-found-email-address" />;
};

export const ChangePasswordText = () => {
  // 비밀번호 변경하기
  return <FormattedMessage id="lang-change-password" />;
};

export const LoginLongText = () => {
  // 로그인 하기
  return <FormattedMessage id="lang-login-long" />;
};

export const ChangeEmailPasswordText = () => {
  // 이메일/비밀번호를 찾기 위해 인증이 필요합니다.
  return <FormattedMessage id="lang-change-email-password" />;
};

export const FindAccountText = () => {
  // 계정 찾기
  return <FormattedMessage id="lang-find-account" />;
};

export const FindAccountFailText = () => {
  // 계정 찾기 실패
  return <FormattedMessage id="lang-find-account-fail" />;
};

export const FindAccountFailDesc1Text = () => {
  // 해당 정보로 가입된 계정을 찾을 수 없습니다.
  return <FormattedMessage id="lang-find-account-fail-desc-1" />;
};

export const FindAccountFailDesc2Text = () => {
  // 정보를 다시 확인하고 시도해 주세요.
  return <FormattedMessage id="lang-find-account-fail-desc-2" />;
};

export const ChangeAccountPasswordText = () => {
  // 계정 및 비밀번호 변경
  return <FormattedMessage id="lang-change-account-password" />;
};

export const AccountInformationText = () => {
  // 계정 정보
  return <FormattedMessage id="lang-account-information" />;
};

export const UserInformationText = () => {
  // 사용자 정보
  return <FormattedMessage id="lang-user-information" />;
};

export const CompanyInformationText = () => {
  // 기업 정보
  return <FormattedMessage id="lang-company-information" />;
};

export const JoinRequestText = () => {
  // 회원가입 신청
  return <FormattedMessage id="lang-join-request" />;
};

export const JoinRequestCompleteText = () => {
  // 회원가입 신청완료
  return <FormattedMessage id="lang-join-request-complete" />;
};

export const JoinRequestCompleteDesc1Text = () => {
  // 회원가입 신청이 완료 되었습니다.
  return <FormattedMessage id="lang-join-request-complete-desc-1" />;
};

export const JoinRequestCompleteDesc2Text = () => {
  // 3~5일 이내로 승인이 완료됩니다.
  return <FormattedMessage id="lang-confirm-working-hours" />;
};

export const GoToMainText = () => {
  // 메인으로
  return <FormattedMessage id="lang-go-to-main" />;
};

export const EnterEmailForLoginText = () => {
  // 로그인을 위해 이메일을 입력하세요.
  return <FormattedMessage id="lang-enter-email-for-login" />;
};

export const JoinText = () => {
  // 회원가입
  return <FormattedMessage id="lang-join" />;
};

export const FindEmailPasswordText = () => {
  // 이메일/비밀번호 찾기
  return <FormattedMessage id="lang-find-email-password" />;
};

export const ContinueText = () => {
  // 계속
  return <FormattedMessage id="lang-continue" />;
};

// NOTE: Footer
export const BrandNameText = () => {
  // (주)딜테이블
  return <FormattedMessage id="lang-brand-name" />;
};

export const CEONameText = () => {
  // 대표: 김테이블
  return <FormattedMessage id="lang-ceo-name" />;
};

export const CompanyAddressText = () => {
  // 주소: 서울시 강남구 강남대로 123
  return <FormattedMessage id="lang-company-address" />;
};

export const CEONumberText = () => {
  // 대표번호: 02-1234-5678
  return <FormattedMessage id="lang-ceo-number" />;
};

// NOTE: Header
export const MyProfileText = () => {
  // 내 프로필
  return <FormattedMessage id="lang-my-profile" />;
};

export const DealScaleValueText = () => {
  // 투자 규모
  return <FormattedMessage id="lang-deal-scale-value" />;
};

export const LogoutText = () => {
  // 로그아웃
  return <FormattedMessage id="lang-logout" />;
};

export const LoginText = () => {
  // 로그인
  return <FormattedMessage id="lang-login" />;
};

export const GoBackText = () => {
  // 나가기
  return <FormattedMessage id="lang-go-back" />;
};

// NOTE: form
export const ReEnterPhoneText = () => {
  // 휴대폰 번호 다시 입력
  return <FormattedMessage id="lang-re-enter-phone" />;
};

export const CodeConfirmDoneText = () => {
  // 인증 완료
  return <FormattedMessage id="lang-code-confirm-done" />;
};

export const SendCodeNumberText = () => {
  // 인증번호 전송
  return <FormattedMessage id="lang-send-code-number" />;
};

export const CodeNumberText = () => {
  // 인증 번호
  return <FormattedMessage id="lang-code-number" />;
};

export const ResendCodeText = () => {
  // 재전송
  return <FormattedMessage id="lang-resend-code" />;
};

export const ConfirmCodeNumberText = () => {
  // 인증번호 확인
  return <FormattedMessage id="lang-confirm-code-number" />;
};

export const SelectAllText = () => {
  // 전체 동의
  return <FormattedMessage id="lang-select-all" />;
};

export const ViewText = () => {
  // 보기
  return <FormattedMessage id="lang-view" />;
};

// NOTE: modal
export const ExampleText = () => {
  // 작성 예시
  return <FormattedMessage id="lang-example" />;
};

export const UseTermText = () => {
  // 이용 약관
  return <FormattedMessage id="lang-use-term" />;
};

export const PersonalInformationText = () => {
  // 개인 정보 처리 방침
  return <FormattedMessage id="lang-personal-information" />;
};

export const NewsLetterSubscribeText = () => {
  // MMP Deal Insight 뉴스레터 구독 동의
  return <FormattedMessage id="lang-news-letter-subscribe" />;
};

// NOTE: Account
export const AccountManageText = () => {
  // 계정 관리
  return <FormattedMessage id="lang-account-manage" />;
};

export const ChangePasswordShortText = () => {
  // 비밀번호 변경
  return <FormattedMessage id="lang-change-password-short" />;
};

export const AccountInformationChangeText = () => {
  // 계정 정보 변경
  return <FormattedMessage id="lang-account-information-change" />;
};

export const DeleteAccountLongText = () => {
  // 탈퇴하기
  return <FormattedMessage id="lang-delete-account" />;
};

export const DeleteUserAccountText = () => {
  // 회원 탈퇴하기
  return <FormattedMessage id="lang-delete-user-account" />;
};

export const DeleteAccountDescText = () => {
  // 서비스에서 탈퇴하시겠습니까? 지금까지 생성한 니즈가 삭제됩니다.
  return <FormattedMessage id="lang-delete-account-desc" />;
};

export const SellConsultText = () => {
  // 운영사 소개
  return <FormattedMessage id="lang-sell-consult" />;
};
