import styled from "@emotion/styled";
import React from "react";

const TermSubTitle = styled.header(({ theme }) => ({
  margin: "3.6rem 0 1.6rem",
  fontSize: "1.8rem",
  fontWeight: theme.fontWeight.bold,
}));

const OrderedListWrapper = styled.ol(() => ({
  marginTop: "2rem",
}));

const UnorderedList = styled.ul(() => ({
  marginLeft: "1rem",

  li: {
    marginLeft: "1rem",
    listStyle: "initial",
  },
}));

const StrongText = styled.strong(({ theme }) => ({
  color: theme.color.error,
}));

export const UseTermContents = () => {
  return (
    <div>
      <div>
        <TermSubTitle>제1조 (목적)</TermSubTitle>

        <div>
          이 약관은 주식회사 엠엠피(이하 “회사”라 한다)가 운영하는 인터넷
          웹사이트인 DEALTABLE (https://dealtable.co.kr) (이하 “사이트”라
          한다)에서 제공하는 인터넷 관련 서비스 (이하 “서비스”라 한다)를
          이용함에 있어 서비스와 서비스 이용자의 권리 의무 및 책임사항을
          규정함을 목적으로 합니다. ※ 「PC통신, 무선 등을 이용하는 전자상거래에
          대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.」
        </div>
      </div>

      <div>
        <TermSubTitle>제2조 (용어의 정의)</TermSubTitle>

        <OrderedListWrapper>
          <li>“회사”라 함은 주식회사 엠엠피를 말합니다.</li>

          <li>
            “사이트”라 함은 사업자가 재화 또는 용역(이하 “재화 등”이라 함)을
            “회원” 에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여
            운영하고 있는 인터넷 웹사이트 DEALTABLE (https://dealtable.co.kr) 를
            말합니다.
          </li>

          <li>
            “이용자”라 함은 “사이트”에 접속하여 이 약관에 따라 “사이트”가
            제공하는 서비스를 받는 “회원” 및 “비회원”을 말합니다.
          </li>

          <li>
            “회원”이라 함은 “사이트”에 “회원”등록을 한 자로서, 계속적으로
            “사이트”가 제공하는 서비스를 이용할 수 있는 자를 말합니다. 5.
          </li>

          <li>
            “비회원”이라 함은 “사이트”에 가입하지 않고 “사이트”가 제공하는
            서비스를 이용하는 자를 말합니다.
          </li>

          <li>
            “게시물”이라 함은 “회원”이 “서비스”를 이용함에 있어 “서비스” 상에
            게시한 부호ㆍ문자ㆍ음성ㆍ음향ㆍ화상ㆍ동영상 등의 정보 형태의 글,
            사진, 동영상 및 각종 파일과 링크 등을 의미합니다.
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제3조 (약관 등의 명시와 설명 및 개정)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            “회사”는 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지
            주소(소비 자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호
            모사전송번호 전자 우편주소, 사업자등록번호, 통신판매업 신고번호,
            개인정보관리책임자 등을 “회원”이 쉽게 알 수 있도록 “사이트”의 하단에
            게시합니다. 다만, 약관의 내용은 “이용자”가 연결화면을 통하여 볼 수
            있도록 할 수 있습니다.
          </li>

          <li>
            “회사”는 “이용자”가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용
            중 중요한 내용을 “이용자”가 이해할 수 있도록 별도의 연결화면 또는
            팝업화면 등을 제공하여 “이용자”의 확인을 구하여야 합니다.
          </li>

          <li>
            “회사”는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의
            규제 에 관한 법률」, 「전자문서 및 전자거래기본법」,
            「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및
            정보보호 등에 관한 법률」, 「방문판매 등에 관한 법률」,
            「소비자기본법」 등 관련 법을 위배하지 않는 범위에서 이 약관을
            개정할 수 있습니다.
          </li>

          <li>
            “회사”가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여
            현행약관과 함께 “사이트”의 초기화면에 그 적용일자 7일 이전부터
            적용일자 전일까지 공지합니다. 다만, “회원”에게 불리하게 약관내용을
            변경하는 경우에는 최소 한 30일 이상의 사전 유예기간을 두고
            공지합니다. 이 경우 “회사”는 개정 전 내용과 개정 후 내용을 명확하게
            비교하여 “회원”이 알기 쉽도록 표시합니다.
          </li>

          <li>
            “회사”가 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에
            체결 되는 계약에만 적용되고 그 이전에 이미 체결된 계약에 대해서는
            개정 전의 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한
            “회원”이 개정약관 조항의 적용을 받기를 원하는 뜻을 제3항에 의한
            개정약관의 공지기간 내에 “회사”에 송신하여 “회사”의 동의를 받은
            경우에는 개정약관 조항이 적용됩니다.
          </li>

          <li>
            이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는
            전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한
            법률, 공정거래위원회가 정하는 전자상거래 등에서의 소비자 보호지침 및
            관계법령 또는 상관례에 따릅니다.
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제4조 (서비스의 제공 및 변경)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            <div>
              “회사”가 “회원”과 “비회원”에게 제공하는 서비스의 내용은 다음과
              같습니다.
            </div>

            <ul>
              <li>가. 인수 니즈 작성 서비스</li>
              <li>나. 인수 니즈 관리 서비스</li>
              <li>다. 매각 상담 신청 서비스</li>
              <li>
                라. 기타 “회사”가 추가 개발하거나 제휴계약 등을 통해 “회원”에게
                제공하는 일체의 서비스
              </li>
            </ul>
          </li>

          <li>
            “회사”는 재화 또는 용역의 기술적 사양의 변경 등의 경우에는 장차
            체결되는 계약에 의해 제공할 재화 또는 용역의 내용을 변경할 수
            있습니다. 이 경우에는 변경된 재화 또는 용역의 내용 및 제공 일자를
            명시하여 현재의 재화 또는 용역의 내용을 게시한 곳에 즉시 공지합니다.
          </li>

          <li>
            “회사”가 제공하기로 “회원”과 계약을 체결한 서비스의 내용을 재화 등의
            기술적 사양의 변경 등의 사유로 변경할 경우에는 그 사유를 “회원”에게
            통지 가능한 주소로 즉시 통지합니다.
          </li>

          <li>
            전항의 경우 “회사”는 이로 인하여 “회원”이 입은 손해를 보상합니다.
            다만, “회사”가 고의 또는 과실이 없음을 입증하는 경우에는 그러하지
            아니합니다.
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제5조 (서비스의 해외이용)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            “회사”는 “이용자”가 대한민국의 영토 이외의 지역에서 “사이트”를
            이용하고자 하는 경우 “사이트”의 품질 또는 사용성을 보장하지
            않습니다.
          </li>

          <li>
            “이용자”는 대한민국의 영토 이외의 지역에서 “사이트”를 이용하고자
            하는 경우 스스로의 판단과 책임에 따라서 이용 여부를 결정하여야 하고,
            특히 “사이트”의 이용과정에서 현지 법령을 준수할 책임은 “이용자”에게
            있습니다.
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제6조 (서비스의 중단)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            “회사”는 컴퓨터 등 정보통신설비의 보수점검 교체 및 고장, 통신의 두절
            등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수
            있습니다.
          </li>

          <li>
            “회사”는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여
            “회원” 또는 제3자가 입은 손해에 대하여 배상합니다. 단, “회사”가 고의
            또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.
          </li>

          <li>
            사업종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를
            제공 할 수 없게 되는 경우에는 “회사”는 제8조에 정한 방법으로
            “회원”에게 통지하고 당초 “회사”에서 제시한 조건에 따라 소비자에게
            보상합니다. 다만, “회사”가 보상기준 등을 고지하지 아니한 경우에는
            “회원”들의 마일리지 또는 적립금 등을 “사이트”에서 통용되는
            통화가치에 상응하는 현물 또는 현금 으로 “회원”에게 지급합니다.
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제7조 (회원가입)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            “회원”은 “회사”가 정한 가입 양식에 따라 “회원”정보를 기입한 후 이
            약관에 동의한다는 의사표시를 함으로서 “회원”가입을 신청합니다.
          </li>

          <li>
            “회사”는 제1항과 같이 “회원”으로 가입할 것을 신청한 “회원” 중 다음
            각 호 에 해당하지 않는 한 “회원”으로 등록합니다.
            <ul>
              <li>
                가. 가입신청자가 이 약관 제9조 제3항에 의하여 이전에
                “회원”자격을 상실한 적 이 있는 경우, 다만 제9조 제3항에 의한
                “회원”자격 상실 후 3년이 경과한 자 로서 “회사”의 “회원”재가입
                승낙을 얻은 경우에는 예외로 합니다.
              </li>

              <li>나. 등록 내용에 허위, 기재누락, 오기가 있는 경우</li>

              <li>
                다. 사이트에서 지정한{" "}
                <StrongText>“M&A시장 Buy side”</StrongText>가 아니라고 판단되는
                경우
              </li>

              <li>
                라. 기타 “회원”으로 등록하는 것이 “사이트”의 기술상 현저히
                지장이 있다고 판단되는 경우
              </li>

              <li>마. 기타 “회사”가 정한 회원의 조건이 만족되지 않는 경우</li>
            </ul>
          </li>

          <li>
            “회원”가입계약의 성립 시기는 “회사”의 승낙이 “회원”에게 도달한
            시점으로 합니다.
          </li>

          <li>
            “회원”은 “회원”가입 시 등록한 사항에 변경이 있는 경우, 상당한 기간
            이내에 “회사”에 대하여 “회원”정보 수정 등의 방법으로 그 변경사항을
            알려야 합니다.
          </li>

          <li>
            “서비스” 이용계약의 성립 시기는 “회원”으로 가입할 것을 신청하고
            서비스의 이용에 필요한 개인정보 수집 및 이용, 개인정보 위탁에 동의한
            후 “회사”의 승낙이 “회원”에게 도달한 시점으로 합니다.
          </li>

          <li>
            "회원"은 계정과 비밀번호의 관리에 대한 의무와 책임이 있습니다.
            계정과 비밀번호의 관리 소홀, 부정 사용에 의하여 발생하는 모든 결과에
            대한 책임은 "회원" 본인에게 있습니다.
          </li>

          <li>
            "회원"은 자신의 계정 및 비밀번호를 제3자가 이용하게 해서는 안되며,
            자신의 계정 및 비밀번호를 도난 당하거나 제3자가 사용하고 있음을
            인지하는 경우에는 바로 "회사"에 통보하고 "회사"의 안내가 있는 경우
            그에 따라야 합니다.
          </li>

          <li>
            "회원"은 가입시 회사에 제공한 정보에 변경이 있는 경우, 즉시 전자우편
            또는 전화 등 기타의 방법으로 회사에 대하여 그 변경사항을 알려야
            합니다.
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제8조 (회원 정보의 변경)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            “회원”은 가입신청 시 기재한 사항이 변경되었을 경우 “사이트”에서
            수정을 하거나 전자우편 기타 방법으로 “회사”에게 그 변경사항을 알려야
            합니다.
          </li>

          <li>
            제1항의 변경사항을 “회사”에 알리지 않아 발생한 불이익에 대하여
            “회사”는 책임지지 않습니다.
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제9조 (회원 탈퇴 및 자격 상실 등)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            “회원”은 “사이트”에 언제든지 탈퇴를 요청할 수 있으며 “회사”는 즉시
            “회원”탈퇴를 처리합니다.
          </li>

          <li>
            “회원” 탈퇴가 이루어진 경우 회원이 등록한 “게시물” 일체는
            삭제됩니다.
          </li>

          <li>
            “회원”이 다음 각 호의 사유에 해당하는 경우, “회사”는 “회원”자격을
            제한 및 정지시킬 수 있습니다.
            <ul>
              <li>가. 가입 신청 시에 허위 내용을 등록한 경우</li>

              <li>
                나. 다른 사람의 “사이트” 이용을 방해하거나 그 정보를 도용하는 등
                질서를 위협하는 경우
              </li>

              <li>
                다. “사이트”을 이용하여 법령 또는 이 약관이 금지하거나
                공서양속에 반하는 행위를 하는 경우
              </li>

              <li>라. “사이트” 내 정보를 동의없이 외부에 유출한 경우</li>
            </ul>
          </li>

          <li>
            “회사”가 “회원”자격을 제한정지 시킨 후, 동일한 행위가 2회 이상
            반복되거나 30일이내에 그 사유가 시정되지 아니하는 경우 “회사”는
            “회원”자격을 상실시킬 수 있습니다.
          </li>

          <li>
            “회사”가 “회원”자격을 상실시키는 경우에는 “회원”등록을 말소합니다.
            이 경우 “회원”에게 이를 통지하고, “회원”등록 말소 전에 최소한 30일
            이상의 기간을 정하여 소명할 기회를 부여합니다.
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제10조 (회원에 대한 통지)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            “회사”가 “회원”에 대한 통지를 하는 경우, “회원”이 “회사”와 미리
            약정하여 지정한 전자우편 주소로 할 수 있습니다.
          </li>

          <li>
            “회사”는 불특정다수 “회원”에 대한 통지의 경우 1주일이상 “사이트”
            게시판에 게시함으로서 개별 통지에 갈음할 수 있습니다. 다만, “회원”
            본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는
            개별통지를 합니다.
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제11조 (저작권)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            “회사”가 작성한 저작물에 대한 저작권 기타 지적재산권은 “회사”에
            귀속합니다.
          </li>

          <li>
            “회원”이 작성한 게시물에 대한 모든 권리 및 책임은 이를 게시한
            “회원”에게 있습니다.
          </li>

          <li>
            “회원”은 “사이트”을 이용함으로써 얻은 정보 중 “회사”에게
            지적재산권이 귀속된 정보를 “회사”의 사전 승낙 없이 복제, 송신, 출판,
            배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게
            이용하게 하여서는 안됩니다.
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제12조 (금지 행위)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            “회원”은 다음 각 호의 행위를 해서는 안됩니다.
            <ul>
              <li>가. 회원가입 신청 또는 회원정보 변경 시 허위내용의 등록</li>

              <li>
                나. 회사의 서비스에 게시된 정보 또는 회원이 서비스를 이용하여
                얻은 정보를 회사의 사전 승낙 없이 영리 또는 비영리의 목적으로
                복제, 출판, 방송 등에 사용하거나 제3자에게 제공하는 행위
              </li>

              <li>
                다. 회사가 제공하는 서비스 및 사이트를 이용하여 본인 또는
                제3자를 홍보하거나, 홍보할 기회를 제공하는 행위
              </li>

              <li>
                라. 회사가 제공하는 서비스 및 사이트를 이용하여 본인을
                홍보하거나 제3자의 홍보를 대행하는 등의 방법으로 금전을 수수하는
                행위
              </li>

              <li>
                마. 서비스를 이용할 권리를 양도하고 이를 대가로 금전을 수수하는
                행위
              </li>

              <li>
                바. 회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는
                게시 정보통신망법 등 관련 법령에 의하여 그 전송 또는 게시가
                금지되는 정보(컴퓨터 프로그램 등)을 전송하거나 게시 및 관련
                사이트를 링크하는 행위
              </li>

              <li>
                사. 회사 및 기타 제3자의 저작권 등 지적 재산권에 대한 침해
              </li>

              <li>
                아. 회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는
                행위
              </li>

              <li>
                자. 다른 회원의 아이디 및 비밀번호를 도용하여 서비스를 이용하는
                행위
              </li>

              <li>
                차. 회사의 직원이나 서비스의 관리자로 가장, 사칭하거나 타인의
                명의를 도용하여 글을 게시하거나 메일을 발송하는 행위
              </li>

              <li>
                카. 컴퓨터 소프트웨어, 하드웨어, 전기통신 장비의 정상적인 가동을
                방해, 파괴할 목적으로 고안된 소프트웨어 바이러스, 기타 다른
                컴퓨터 코드, 파일, 프로그램을 포함하는 자료를 게시하거나
                메일으로 발송하는 행위
              </li>

              <li>
                타. 다른 회원의 개인정보를 그 동의 없이 수집, 저장, 공개,
                유포하는 행위
              </li>

              <li>
                파. 불특정 다수의 회원을 대상으로 하여 광고 또는 선전물을
                게시하거나 관련 사이트를 링크하는 행위
              </li>

              <li>
                하. 현행 법령, 회사가 제공하는 서비스에 대한 약관 기타 서비스
                이용에 관한 규정 및 회사 방침(사이트 공지사항 포함)에 위반하는
                행위
              </li>
            </ul>
          </li>

          <li>
            회사는 본 조 제1항 각 호의 정보 기타 회사 운영상 부적절하다고 판단한
            정보가 회사에 게시되거나 회사와 링크된 곳에 게시된 경우, 회원 기타
            정보를 게시한 자의 승낙 없이 회사에 게재된 당해 정보를 삭제하거나
            회사에 확장된 링크를 절단할 수 있습니다.
          </li>

          <li>회사는 본 조 제2항으로 인한 회원의 손해는 책임지지 않습니다.</li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제13조 (이용계약의 종료)</TermSubTitle>

        <div>
          “사이트” 서비스 이용계약은 일방 당사자의 해지의사 표시로 종료됩니다.
        </div>

        <OrderedListWrapper>
          <li>
            "회원"은 "회사"에 언제든지 의사표시를 통지함으로써 탈퇴를 요청할 수
            있으며 ,"회사"는 요청을 수령한 즉시 "회원"탈퇴 처리를 합니다. 다만,
            물품 및 서비스 상품 채권•채무관계가 남아 있는 경우에는 탈퇴조치가
            되지 않거나 법령상 특별한 규정이 있는 경우에는 해당 개인정보를
            법령이 정한 목적 및 기간의 범위 내에서 계속 보관할 수 있습니다.
          </li>

          <li>
            이용계약해지의 의사표시는 "회사"가 정한 방식에 따라 표시되어야
            합니다.
          </li>

          <li>
            본 조 제2항의 이용계약해지의 의사표시는 당해 "회원"이 관여한 구매
            서비스 등을 모두 취소한 후에 이루어져야 합니다. 이와 관련된 모든
            불이익은 "회원"의 부담으로 합니다.
          </li>

          <li>
            이용계약해지 의사표시의 효력은 해지의사가 "회사"에 도달하는 즉시
            발생합니다. 단, "회원"이 구매를 통하여 관여한 사항이 진행 중인
            때에는 해당 진행이 완료될 때까지 당 효력이 정지됩니다.
          </li>

          <li>
            "회원"이 다음 각 호의 사유에 해당하는 경우, "회사"는 "회원"자격을
            제한 또는 정지시킬 수 있습니다. 단, "회원"이 제 13조 5항 아호의
            행위를 한 경우에는 위반행위의 중대성에 따라 "회원"계약을 해지할 수도
            있습니다.
            <ul>
              <li>가. 회원가입 신청 시에 허위 내용을 등록한 경우</li>

              <li>
                나. 다른 사람의 “서비스” 이용을 방해하거나 그 정보를 도용하는 등
                전자상거래 질서를 위협하는 경우
              </li>

              <li>
                다. “서비스”을 이용하여 구입한 "재화 등"의 대금, 기타 “서비스”
                이용과 관련하여 "회원"이 부담하는 채무를 기일에 지급하 지 않는
                경우
              </li>

              <li>
                라. "회사"나 다른 회원 기타 타인의 권리, 명예, 신용 기타 정당한
                이익을 침해하는 행위를 한 경우
              </li>

              <li>마. 약관이 금지하는 행위를 한 경우</li>

              <li>
                바. 일정기간 이상 사용하지 않아, 개인정보보호를 위해서
                필요하다고 판단되는 경우
              </li>

              <li>
                사. "회원"으로서의 자격을 지속시키는 것이 부적절하다고 판단되는
                경우
              </li>

              <li>
                아. 기타 “서비스”를 이용하여 법령 또는 공서 양속에 반하는 행위를
                하는 경우
              </li>
            </ul>
          </li>

          <li>
            "회원" 자격을 제한 또는 정지 "회원"은 거래와 관련된 모든 서비스
            이용이 제한됩니다.
          </li>

          <li>
            "회사"가 "회원" 자격을 제한 또는 정지 시킨 후, 동일한 행위가 2회
            이상 반복되거나 30일 이내에 그 사유가 시정되지 아니하는 경우, 또는
            "회원"이 본 조 제 5항 “아”호에 해당하는 행위를 한 경우 "회사"는
            "회원"자격을 상실시킬 수 있습니다.
          </li>

          <li>
            {" "}
            "회사"가 "회원"자격을 상실시키는 경우에는 "회원"등록을 말소합니다.
            이 경우 "회원"에게 이를 통지하고, "회원" 등록 말소 전에 최소한 30일
            이상의 기간을 정하여 소명할 기회를 부여합니다.
          </li>

          <li>
            회사는 다음 각 호의 방법으로 제1항의 해지의사를 통지할 수 있습니다.
            해지의사 통지발송 전, 회원에게 당해 해지사유에 대한 의견진술의
            기회를 부여할 수 있습니다.
            <ul>
              <li>가. e-mail</li>

              <li>나. 전화</li>

              <li>다. 기타 회원이 회사에 등록한 연락처s</li>
            </ul>
          </li>

          <li>
            본 조의 해지는 회사가 회원에게 해지의사 통지를 발송한 시점에서
            효력을 발생합니다.
          </li>

          <li>
            "회사"는 사유가 있는 경우 해당 "회원"의 자격을 회복시킬 수 있습니다.
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제14조 (회사의 의무)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            “회사”는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지
            않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 재화 용역을
            제공 하는데 최선을 다하여야 합니다.
          </li>

          <li>
            “회사”는 “회원”이 안전하게 인터넷 서비스를 이용할 수 있도록 “회원”의
            개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다.
          </li>

          <li>
            “회사”가 상품이나 용역에 대하여 「표시 광고의 공정화에 관한 법률」
            제3조 소정의 부당한 표시 광고행위를 함으로써 “회원”이 손해를 입은
            때에는 이를 배상할 책임을 집니다.
          </li>

          <li>
            “회사”는 “회원”이 원하지 않는 영리목적의 광고성 전자우편을 발송하지
            않습니다.
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제15조 (회사의 개인정보 보호의무)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            회사는 회원이 안심하고 회사의 서비스를 이용할 수 있도록 노력합니다.
          </li>

          <li>
            회사는 개인정보보호와 관련하여 문제점이 발생했을 경우엔 적절한
            조치를 취하여 재발되지 않도록 노력합니다.
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제16조 (회원의 권리 의무)</TermSubTitle>

        <OrderedListWrapper>
          <li>회원은 본 약관 및 관계법령에 따라 권리 및 의무를 가집니다.</li>

          <li>
            회원은 다음 각 호의 행위를 하여서는 안 됩니다.
            <ul>
              <li>가. 신청 또는 변경시 허위 내용의 등록</li>

              <li>나. 타인의 정보 도용</li>

              <li>다. "DEALTABLE"에 게시된 정보의 변경</li>

              <li>
                라. "회사"가 정한 정보 이외의 정보(컴퓨터 프로램 등) 등의 송신
                또는 게시
              </li>

              <li>마. "회사" 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>

              <li>
                바. "회사" 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위
              </li>

              <li>
                사. 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서 양속에
                반하는 정보를 “사이트”에 공개 또는 게시하는 행위
              </li>
            </ul>
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제17조 (개인정보보호)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            “회사”는 “회원”의 개인정보 수집 시, 서비스 제공을 위하여 필요한
            범위에서 최소한의 개인정보를 수집합니다.
          </li>

          <li>
            “회사”는 “회원”의 개인정보를 수집 이용하는 때에는 당해 “회원”에게 그
            목적을 고지하고 동의를 받습니다.
          </li>

          <li>
            “회사”는 수집 된 개인정보를 목적 외의 용도로 이용할 수 없으며,
            새로운 이용 목적이 발생한 경우 또는 제3자에게 제공하는 경우에는 이용
            제공 단계에서 당해 “회원”에게 그 목적을 고지하고 동의를 받습니다.
            다만, 관련 법령에 달리 정함이 있는 경우에는 예외로 합니다.
          </li>

          <li>
            “회사”가 제2항과 제3항에 의해 “회원”의 동의를 받아야 하는 경우에는
            개인정보관리 책임자의 신원(소속, 성명 및 전화번호, 기타 연락처),
            정보의 수집목적 및 이용목적, 제3자에 대한 정보제공
            관련사항(제공받은자, 제공목적 및 제공할 정보의 내용) 등 「정보통신망
            이용촉진 및 정보보호 등에 관한 법률」 제22조제2항이 규정한 사항을
            미리 명시하거나 고지해야 하며 이용 자는 언제든지 이 동의를 철회할 수
            있습니다.
          </li>

          <li>
            “회원”은 언제든지 “회사”가 가지고 있는 자신의 개인정보에 대해 열람
            및 오류정정을 요구할 수 있으며 “회사”는 이에 대해 지체 없이 필요한
            조치를 취할 의무를 집니다. “회원”이 오류의 정정을 요구한 경우에는
            “회사”는 그 오류를 정정할 때까지 당해 개인정보를 이용하지 않습니다.
          </li>

          <li>
            “회사”는 개인정보 보호를 위하여 “회원”의 개인정보를 취급하는 자를
            최소한으로 제한하여야 하며 신용카드, 은행계좌 등을 포함한 “회원”의
            개인정보의 분실, 도난, 유출, 동의 없는 제3자 제공, 변조 등으로 인한
            “회원”의 손해에 대하여 모든 책임을 집니다.
          </li>

          <li>
            “회사” 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적
            또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체 없이
            파기합니다.
          </li>

          <li>
            “회사”는 개인정보의 수집 이용 제공에 관한 동의란을 미리 선택한
            것으로 설정해두지 않습니다. 또한 개인정보의 수집 이용 제공에 관한
            “회원”의 동의 거절 시, 제한되는 서비스를 구체적으로 명시하고, 필수
            수집 항목이 아닌 개인정보의 수집 이용 제공에 관한 “회원”의 동의
            거절을 이유로 “회원”가입 등 서비스 제공을 제한하거나 거절하지
            않습니다.
          </li>

          <li>
            “회사”는 회원의 개인정보를 보호하기 위해 “개인정보처리방침” 을
            수립하고 개인정보 보호 책임자를 지정하여 이를 게시하고 운영합니다.
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제18조 (회사의 면책)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            회사는 본 약관의 약관과 규칙을 벗어난 거래로 발생한 일체의 사고에
            대해서 책임을 지지 않습니다.
          </li>

          <li>
            "회사"는 천재지변, 불가항력 기타 "회사"의 합리적인 통제 범위를
            벗어난 사유로 인하여 "서비스"를 제공할 수 없는 경우에는 그에 대한
            책임을 부담하지 않습니다.
          </li>

          <li>
            "회사"는 회원의 귀책사유로 인하여 "서비스"를 제공할 수 없는 경우에는
            그에 대한 책임을 부담하지 않습니다.
          </li>

          <li>
            "회사"는 “회원”이 "서비스"를 이용함으로써 기대되는 수익을 얻지
            못하거나 "서비스"를 통해 얻은 자료를 이용하여 발생한 손해에 대해서는
            책임을 부담하지 않습니다.
          </li>

          <li>
            “회원”이 화면에 게재한 정보,자료,사실 등의 내용에 관한 신뢰도 또는
            정확성에 대하여는 해당 “회원”이 책임을 부담하며, "회사"는 내용의
            부정확 또는 허위로 인해 회원 또는 제3자에게 발생한 손해에 대하여
            아무런 책임을 부담하지 않습니다.
          </li>

          <li>
            "회사"는 "서비스" 이용과 관련하여 회원의 고의 또는 과실로 인하여
            회원 또는 제3자에게 발생한 손해에 대하여 아무런 책임을 부담하지
            않습니다.
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제19조 (분쟁해결)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            “회사”는 “회원”이 제기하는 정당한 의견이나 불만을 반영하고 그 피해를
            보상처리하기 위하여 피해보상처리기구를 설치 운영합니다.
          </li>

          <li>
            “회사”는 “회원”으로부터 제출되는 불만사항 및 의견은 우선적으로 그
            사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 “회원”에게 그
            사유와 처리일정을 즉시 통보해 드립니다.
          </li>

          <li>
            “회사”와 “회원”간에 발생한 서비스 이용에 관한 분쟁에 대하여는
            대한민국 법을 적용하며, 본 분쟁으로 인한 소는 민사소송법상의 관할을
            가지는 대한민국의 법원에 제기합니다.
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>부칙(시행일)</TermSubTitle>

        <div>
          본 약관은{" "}
          <StrongText>{process.env.REACT_APP_BUILD_DATE}부터</StrongText>
          적용됩니다.
        </div>
      </div>
    </div>
  );
};

export const PrivacyPolicyContents = () => {
  return (
    <div>
      <p>
        &lt; 주식회사 엠엠피 &gt;('https://dealtable.co.kr/'이하
        'DEALTABLE')은(는) 「개인정보 보호법」 제30조에 따라 정보주체의
        개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수
        있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
      </p>

      <p>
        ○ 이 개인정보처리방침은{" "}
        <StrongText>{process.env.REACT_APP_BUILD_DATE}</StrongText>부터
        적용됩니다.
      </p>

      <div>
        <TermSubTitle>제1조(개인정보의 처리목적)</TermSubTitle>

        <b>
          &lt; 주식회사 엠엠피 &gt;('https://dealtable.co.kr/'이하
          'DEALTABLE')은(는) 다음의 목적을 위하여 개인정보를 처리합니다.
          처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며
          이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의
          동의를 받는 등 필요한 조치를 이행할 예정입니다.
        </b>

        <OrderedListWrapper>
          <li>
            <header>홈페이지 회원가입 및 관리</header>

            <div>
              회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증,
              회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지, 고충처리
              목적으로 개인정보를 처리합니다.
            </div>
          </li>

          <li>
            <header>민원사무 처리</header>

            <div>
              민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지,
              처리결과 통보 목적으로 개인정보를 처리합니다.
            </div>
          </li>

          <li>
            <header>재화 또는 서비스 제공</header>

            <div>
              서비스 제공, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증을
              목적으로 개인정보를 처리합니다.
            </div>
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제2조(개인정보의 처리 및 보유 기간)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            ”주식회사 엠엠피” 는 법령에 따른 개인정보 보유·이용기간 또는
            정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간
            내에서 개인정보를 처리·보유합니다.
          </li>

          <li>
            <p>각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>

            <ul>
              <UnorderedList>
                보유근거 : 신용정보의 수집/처리 및 이용 등에 관한 기록
              </UnorderedList>

              <UnorderedList>
                <p>보유 및 이용 기간</p>

                <UnorderedList>
                  <li>신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년</li>
                  <li>소비자의 불만 또는 분쟁처리에 관한 기록 : 3년</li>
                  <li>계약 또는 청약철회 등에 관한 기록 : 5년</li>
                  <li>대금결제 및 재화 등의 공급에 관한 기록 : 5년</li>
                  <li>표시/광고에 관한 기록 : 6개월</li>
                </UnorderedList>
              </UnorderedList>
            </ul>
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제3조(처리하는 개인정보의 항목)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            “주식회사 엠엠피” 는 다음의 개인정보 항목을 처리하고 있습니다.
            <ol type="a">
              <li>
                <p>홈페이지 회원가입 및 관리</p>

                <ul>
                  <li>
                    필수항목 : 이름, 로그인 ID, 비밀번호, 휴대전화번호, 이메일,
                    회사명
                  </li>

                  <li>선택항목 : 직책</li>
                </ul>
              </li>

              <li>
                <p>민원사무 처리</p>

                <ul>
                  <li>필수항목 : 이름, 로그인 ID, 휴대전화번호, 이메일</li>
                </ul>
              </li>

              <li>
                <p>재화 또는 서비스 제공</p>

                <ul>
                  <li>필수항목 : 이름, 로그인 ID, 휴대전화번호, 이메일</li>
                </ul>
              </li>

              <li>
                <p>마케팅 및 광고에의 활용</p>

                <ul>
                  <li>필수항목 : 이름, 로그인 ID, 휴대전화번호, 이메일</li>
                </ul>
              </li>
            </ol>
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제4조(개인정보의 제3자 제공에 관한 사항)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            “주식회사 엠엠피”는 이용자의 개인정보를 제1조에서 명시한 범위
            내에서만 처리하며, 이용자의 개인정보를 원칙적으로 외부에 제공하지
            않습니다. 다만 법령의 의거한 경우, 수사 목적으로 법령에 정해진
            절차와 방법에 따라 수사기관의 요구가 있는 경우, 이용자가 사전에
            동의한 경우에는 예외로 합니다.
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제5조(개인정보처리의 위탁에 관한 사항)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            <p>
              “주식회사 엠엠피”는 원활한 개인정보 업무처리를 위하여 다음과 같이
              개인정보 처리업무를 위탁하고 있습니다.
            </p>

            <ol type="a">
              <li>
                알림톡 발송
                <UnorderedList>
                  <li>위탁받는 자 (수탁자) : 비즈톡</li>
                  <li>위탁하는 업무의 내용 : 알림톡 발송</li>
                  <li>위탁기간 : 회원탈퇴 또는 위탁 계약 종료 시까지</li>
                </UnorderedList>
              </li>
            </ol>
          </li>

          <li>
            “주식회사 엠엠피”는 위탁계약 체결시 「개인정보 보호법」 제26조에
            따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적 보호조치,
            재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을
            계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를
            감독하고 있습니다.
          </li>

          <li>
            위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보
            처리방침을 통하여 공개하도록 하겠습니다.
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>제6조(개인정보의 파기절차 및 파기방법)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            “주식회사 엠엠피”는 개인정보 보유기간의 경과, 처리목적 달성 등
            개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를
            파기합니다.
          </li>

          <li>
            정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이
            달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야
            하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나
            보관장소를 달리하여 보존합니다.
          </li>

          <li>
            <p>개인정보 파기의 절차 및 방법은 다음과 같습니다.</p>

            <ol type="a">
              <li>
                파기절차
                <UnorderedList>
                  <li>
                    “주식회사 엠엠피”는 파기 사유가 발생한 개인정보를 선정하고,
                    “주식회사 엠엠피”의 개인정보 보호책임자의 승인을 받아
                    개인정보를 파기합니다.
                  </li>
                </UnorderedList>
              </li>

              <li>
                파기방법
                <UnorderedList>
                  <li>
                    종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여
                    파기합니다.
                  </li>

                  <li>
                    전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적
                    방법을 사용합니다.
                  </li>
                </UnorderedList>
              </li>
            </ol>
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>
          제7조(정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한 사항)
        </TermSubTitle>

        <OrderedListWrapper>
          <li>
            정보주체는 “주식회사 엠엠피”에 대해 언제든지 개인정보
            열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.
          </li>

          <li>
            제1항에 따른 권리 행사는 “주식회사 엠엠피”에 대해 「개인정보
            보호법」 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX)
            등을 통하여 하실 수 있으며 “주식회사 엠엠피”는 이에 대해 지체 없이
            조치하겠습니다.
          </li>

          <li>
            제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등
            대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리 방법에 관한
            고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하셔야
            합니다.
          </li>

          <li>
            개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항,
            제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.
          </li>

          <li>
            개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집
            대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
          </li>

          <li>
            “주식회사 엠엠피”는 정보주체 권리에 따른 열람의 요구, 정정·삭제의
            요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한
            대리인인지를 확인합니다.
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>
          제8조(개인정보의 안전성 확보조치에 관한 사항)
        </TermSubTitle>

        <b>
          “주식회사 엠엠피”는 개인정보보호법 제29조에 따라 개인정보의 안전성
          확보를 위해 다음과 같은 조치를 취하고 있습니다.
        </b>

        <OrderedListWrapper>
          <li>
            내부관리계획의 수립 및 시행 : 개인정보의 안전한 처리를 위하여
            내부관리계획을 수립하고 시행하고 있습니다.
          </li>

          <li>
            개인정보 취급 직원의 최소화 및 교육 : 개인정보를 취급하는 직원을
            지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을
            시행하고 있습니다.
          </li>

          <li>
            정기적인 자체 감사 실시 : 개인정보 취급 관련 안정성 확보를 위해
            정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.
          </li>

          <li>
            개인정보에 대한 접근 제한 : 개인정보를 처리하는 데이터베이스시스템에
            대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를
            위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여
            외부로부터의 무단 접근을 통제하고 있습니다.
          </li>

          <li>
            접속기록의 보관 및 위변조 방지 : 개인정보처리시스템에 접속한 기록을
            최소 1년 이상 보관, 관리하고 있으며,다만, 5만명 이상의 정보주체에
            관하여 개인정보를 추가하거나, 고유식별정보 또는 민감정보를 처리하는
            경우에는 2년이상 보관, 관리하고 있습니다.또한, 접속기록이 위변조 및
            도난, 분실되지 않도록 보안기능을 사용하고 있습니다.
          </li>

          <li>
            개인정보의 암호화 : 이용자의 개인정보는 비밀번호는 암호화 되어 저장
            및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송
            데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도
            보안기능을 사용하고 있습니다.
          </li>

          <li>
            해킹 등에 대비한 기술적 대책 : 해킹이나 컴퓨터 바이러스 등에 의한
            개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인
            갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고
            기술적/물리적으로 감시 및 차단하고 있습니다.
          </li>

          <li>
            비인가자에 대한 출입 통제 : 개인정보를 보관하고 있는 물리적 보관
            장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고
            있습니다.
          </li>

          <li>
            문서보안을 위한 잠금장치 사용 : 개인정보가 포함된 서류, 보조저장매체
            등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>
          제9조(개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에 관한
          사항)
        </TermSubTitle>

        <div>
          주식회사 엠엠피 은(는) 정보주체의 이용정보를 저장하고 수시로 불러오는
          ‘쿠키(cookie)’를 사용하지 않습니다.
        </div>
      </div>

      <div>
        <TermSubTitle>
          제10조(행태정보의 수집·이용·제공 및 거부 등에 관한 사항)
        </TermSubTitle>

        <div>
          행태정보의 수집·이용·제공 및 거부등에 관한 사항
          &lt;개인정보처리자명&gt;은(는) 온라인 맞춤형 광고 등을 위한 행태정보를
          수집·이용·제공하지 않습니다.
        </div>
      </div>

      <div>
        <TermSubTitle>제11조 (개인정보 보호책임자에 관한 사항)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            <p>
              “주식회사 엠엠피”는 개인정보 처리에 관한 업무를 총괄해서 책임지고,
              개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여
              아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>

            <ul>
              <li>
                <div>▶ 개인정보 보호책임자</div>

                <UnorderedList>
                  <li>성명 : 최홍석</li>
                  <li>직책 : 이사</li>
                  <li>직급 : 이사</li>
                  <li>연락처 : 0264260308, admin@dealtable.co.kr</li>

                  <li>※ 개인정보 보호 담당부서로 연결됩니다.</li>
                </UnorderedList>
              </li>

              <li style={{ marginTop: "1rem" }}>
                <div>▶ 개인정보 보호 담당부서</div>

                <UnorderedList>
                  <li>부서명 : DB팀</li>
                  <li>담당자 : 최홍석</li>
                  <li>연락처 :0264260308, admin@dealtable.co.kr</li>
                </UnorderedList>
              </li>
            </ul>
          </li>

          <li>
            정보주체께서는 “주식회사 엠엠피” 의 서비스(또는 사업)을 이용하시면서
            발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한
            사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다.
            “주식회사 엠엠피”는 정보주체의 문의에 대해 지체 없이 답변 및
            처리해드릴 것입니다.
          </li>
        </OrderedListWrapper>
      </div>

      <div>
        <TermSubTitle>
          제12조(개인정보의 열람청구를 접수·처리하는 부서)
        </TermSubTitle>

        <b>
          정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람 청구를
          아래의 부서에 할 수 있습니다. “주식회사 엠엠피”는 정보주체의 개인정보
          열람청구가 신속하게 처리되도록 노력하겠습니다.
        </b>

        <ul>
          <li>
            ▶ 개인정보 열람청구 접수·처리 부서
            <UnorderedList>
              <li>부서명 : DB팀</li>
              <li>담당자 : 최홍석</li>
              <li>연락처 :0264260308, admin@dealtable.co.kr</li>
            </UnorderedList>
          </li>
        </ul>
      </div>

      <div>
        <TermSubTitle>제13조(정보주체의 권익침해에 대한 구제방법)</TermSubTitle>

        <p>
          정보주체는 개인정보침해로 인한 구제를 받기 위하여
          개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에
          분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의
          신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
        </p>

        <OrderedListWrapper>
          <li>
            개인정보분쟁조정위원회 : (국번없이) 1833-6972 (www.kopico.go.kr)
          </li>

          <li>개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)</li>

          <li>대검찰청 : (국번없이) 1301 (www.spo.go.kr)</li>

          <li>경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)</li>
        </OrderedListWrapper>

        <div style={{ marginTop: "1rem" }}>
          「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의
          정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대
          하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의
          침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수
          있습니다.
        </div>

        <div style={{ marginTop: "1rem" }}>
          ※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr)
          홈페이지를 참고하시기 바랍니다.
        </div>
      </div>

      <div>
        <TermSubTitle>제14조(개인정보 처리방침 변경)</TermSubTitle>

        <OrderedListWrapper>
          <li>
            이 개인정보처리방침은 {process.env.REACT_APP_BUILD_DATE}부터
            적용됩니다.
          </li>
          <li>
            이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다.
            <div>예시 ) - 20XX. X. X ~ 20XX. X. X 적용 (클릭)</div>
          </li>
        </OrderedListWrapper>
      </div>
    </div>
  );
};

export const PersonalInfoContents = () => {
  return (
    <div>
      <div>
        본 동의는 MMP Deal Insight 뉴스레터 서비스(이하 “서비스”라 한다)의 기능
        제공을 위한 개인정보 위탁에 대한 동의로서, 고객님은 개인정보 위탁에 대한
        동의를 거부할 권리가 있으며, 본 동의를 거부할 경우 받는 별도의 불이익은
        없습니다. 단, 본 동의를 거부할 경우, MMP Deal insight 뉴스레터 서비스
        이용이 불가능합니다.
      </div>

      <OrderedListWrapper>
        <li>
          “주식회사 엠엠피”는 원활한 개인정보 업무처리를 위하여 다음과 같이
          개인정보 처리업무를 위탁하고 있습니다.
          <ol type="a">
            <li>뉴스레터 발송</li>

            <UnorderedList>
              <li>위탁받는 자 (수탁자) : Stibee</li>
              <li>위탁하는 업무의 내용 : 뉴스레터 발송</li>
              <li>위탁기간 : 서비스 종료 또는 구독해지 시 까지</li>
            </UnorderedList>
          </ol>
        </li>

        <li>
          “주식회사 엠엠피”는 위탁계약 체결시 「개인정보 보호법」 제26조에 따라
          위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적 보호조치, 재위탁
          제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서
          등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고
          있습니다.
        </li>

        <li>
          위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보
          처리방침을 통하여 공개하도록 하겠습니다.
        </li>
      </OrderedListWrapper>
    </div>
  );
};
