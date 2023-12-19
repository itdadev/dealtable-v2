import styled from "@emotion/styled";
import React from "react";

const TermSubTitle = styled.header(({ theme }) => ({
  margin: "2.4rem 0",
  fontSize: "1.8rem",
  fontWeight: theme.fontWeight.bold,
}));

const OrderedList = styled.li(() => ({
  marginTop: "3.2rem",
}));

const UnorderedList = styled.li(() => ({
  marginLeft: "1rem",
  listStyle: "initial",
}));

export const UseTermContents = () => {
  return (
    <div>
      <p>이용 약관</p>
    </div>
  );
};

export const PrivacyPolicyContents = () => {
  return (
    <div>
      <p>
        Dealtabel(이하 “본 법무법인”)은 ｢개인정보 보호법｣ 제30조에 따라
        정보주체의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의
        고충을 원활하게 처리할 수 있도록 다음과 같은 개인정보 처리방침을
        시행∙준수합니다.
      </p>

      <div>
        <TermSubTitle>제1조(개인정보의 처리목적)</TermSubTitle>

        <ol>
          <OrderedList>
            <header>고객(잠재고객, 세미나 신청)</header>

            <ul>
              <UnorderedList>
                처리 목적: 고객과 관련된 사건의 수행, 본 법무법인이
                제작∙발송하는 뉴스레터, 홍보자료 등 발송, 본 법무법인의 주최
                행사 안내 및 초대, 세무신고, 기타 정보 제공 목적
              </UnorderedList>

              <UnorderedList>
                개인정보의 처리 목적: 고객과 관련된 사건의 수행, 본 법무법인이
                제작∙발송하는 뉴스레터, 홍보자료 등 발송, 본 법무법인의 주최
                행사 안내 및 초대, 세무신고, 기타 정보 제공 목적
              </UnorderedList>
            </ul>
          </OrderedList>

          <OrderedList>
            <header>채용 희망자 개인정보</header>

            <ul>
              <UnorderedList>
                <header>필수항목</header>

                <ul>
                  <li>
                    - 개인정보 수집방법: 명함, 서면(위임장이나 계약서 등),
                    전화/팩스, 이메일
                  </li>

                  <li>
                    - 개인정보 보유기간: 위 처리 목적 달성 시 또는 고객의 파기
                    요청 시까지
                  </li>
                </ul>
              </UnorderedList>

              <UnorderedList>
                개인정보의 처리 목적: 고객과 관련된 사건의 수행, 본 법무법인이
                제작∙발송하는 뉴스레터, 홍보자료 등 발송, 본 법무법인의 주최
                행사 안내 및 초대, 세무신고, 기타 정보 제공 목적
              </UnorderedList>
            </ul>
          </OrderedList>
        </ol>
      </div>

      <TermSubTitle>제2조(개인정보의 처리 및 보유기간)</TermSubTitle>
    </div>
  );
};

export const PersonalInfoContents = () => {
  return (
    <div>
      <p>개인정보 제공 및 사용</p>
    </div>
  );
};
