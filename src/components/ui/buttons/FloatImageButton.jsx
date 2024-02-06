import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { Flex, FloatButton } from "antd";

import { ModalContainer } from "@/components/ui/modal";
import {
  DeleteAccountLongText,
  NeedTakeoverText,
} from "@/util/language-setting/texts/TranslatedTexts";
import { mq } from "@/lib/react-responsive/mediaQuery";
import { image } from "@/theme";
import { useMediaQuery } from "react-responsive";

const Container = styled.div(() => ({
  maxWidth: "90rem",
  overflowX: "auto",
}));

const Section = styled.div(() => ({
  marginBottom: "3.2rem",
}));

const SectionTitle = styled(Flex)(() => ({
  marginBottom: "0.8rem",
  fontSize: "1.8rem",
}));

const NeedsList = styled(Flex)(({ theme }) => ({
  flexDirection: "column",
  background: theme.color.disableGrey,
  padding: "2.4rem",
  gap: "1rem 5.6rem",
  fontSize: "1.6rem",

  [mq("desktop")]: {
    flexDirection: "row",
    padding: "2.4rem 4.8rem",
  },
}));

const NeedsWrapper = styled(Flex)(() => ({
  gap: "1.2rem 0",
}));

const NeedsItem = styled(Flex)(() => ({
  [mq("desktop")]: {
    wordBreak: "keep-all",
    whiteSpace: "nowrap",
  },
}));

const NeedsTitle = styled.header(({ theme }) => ({
  minWidth: "10rem",
  color: theme.color.readOnlyText,

  [mq("desktop")]: {
    minWidth: "12rem",
  },
}));

const BorderButton = styled.a(({ theme }) => ({
  display: "flex",
  gap: "0 0.8rem",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "4.8rem",
  border: `1px solid ${theme.color.primary}`,
  padding: "1.2rem 4.8rem",
  minWidth: "25rem",

  ":hover": {
    background: theme.color.primary,
    color: "white",
  },
}));

const StyledFloatButton = styled(FloatButton)(({ theme }) => ({
  width: "16rem !important",
  height: "5rem !important",
  backgroundColor: `${theme.color.primary02} !important`,
  borderRadius: "5.6rem !important",

  ".ant-float-btn-body": {
    backgroundColor: `${theme.color.primary02} !important`,
    borderRadius: "5.6rem !important",
  },

  ".ant-float-btn-content": {
    flexDirection: "row !important",
    gap: "0 0.8rem",
  },

  [mq("desktop")]: {
    width: "23rem !important",
    height: "6rem !important",

    ".ant-float-btn-description": {
      fontSize: "1.6rem !important",
      fontWeight: theme.fontWeight.bold,
    },
  },
}));

const FloatImageButton = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [hover, setHover] = useState({
    image: false,
    excel: false,
  });
  const [modalOn, setModalOn] = useState(false);

  const handleCancel = useCallback(() => {
    setModalOn(false);
  }, []);

  const handleModalOpen = useCallback(() => {
    setModalOn(true);
  }, []);

  const handleHover = useCallback((type) => {
    setHover({ [type]: true });
  }, []);

  const handleLeave = useCallback((type) => {
    setHover({ [type]: false });
  }, []);

  const needsArr = [
    {
      id: 1,
      title: "산업 및 업종",
      description: "소스, 조미료 등의 식품첨가물",
    },
    {
      id: 2,
      title: "투자 예산",
      description: "100~200억",
    },
    {
      id: 3,
      title: "매출",
      description: "100~200억",
    },
    {
      id: 4,
      title: "영업이익",
      description: "10억 이상",
    },
    {
      id: 5,
      title: "핵심조건",
      description: (
        <ul>
          <li>1. HACCP 인증 필수</li>
          <li>2. 대기업 매출처 보유</li>
          <li>3. 공장이 수도권에 위치한 회사 선호</li>
          <li>4. 업력 15년 이상</li>
        </ul>
      ),
      separate: true,
    },
  ];

  return (
    <>
      <ModalContainer
        title="DEALTABLE Long-list"
        open={modalOn}
        onCancel={handleCancel}
        okText={<DeleteAccountLongText />}
        footer={null}
        width="100%"
      >
        <Section>
          <SectionTitle>
            <NeedTakeoverText />
          </SectionTitle>

          <NeedsList>
            <NeedsWrapper vertical>
              {needsArr
                .filter((el) => !el.separate)
                .map((needs) => {
                  return (
                    <Flex key={needs.id}>
                      <NeedsTitle>{needs.title}</NeedsTitle>

                      <div>{needs.description}</div>
                    </Flex>
                  );
                })}
            </NeedsWrapper>

            <NeedsWrapper vertical>
              {needsArr
                .filter((el) => el.separate)
                .map((needs) => {
                  return (
                    <NeedsItem key={needs.id}>
                      <NeedsTitle>{needs.title}</NeedsTitle>

                      <div>{needs.description}</div>
                    </NeedsItem>
                  );
                })}
            </NeedsWrapper>
          </NeedsList>
        </Section>

        <Section>
          <SectionTitle>Long-list 다운로드</SectionTitle>

          <Flex align="center" justify="center" gap="0.8rem" wrap="wrap">
            <BorderButton
              href={image.longListImage}
              download="DEALTABLE_Long-list"
              onMouseEnter={() => handleHover("image")}
              onMouseLeave={() => handleLeave("image")}
            >
              이미지 다운로드
              {hover.image ? (
                <img
                  src={image.downloadIconWhite.default}
                  alt="다운로드 아이콘"
                />
              ) : (
                <img src={image.downloadIcon.default} alt="다운로드 아이콘" />
              )}
            </BorderButton>

            <BorderButton
              href={image.longListExcel}
              download="DEALTABLE_Long-list"
              onMouseEnter={() => handleHover("excel")}
              onMouseLeave={() => handleLeave("excel")}
            >
              엑셀 다운로드
              {hover.excel ? (
                <img
                  src={image.downloadIconWhite.default}
                  alt="다운로드 아이콘"
                />
              ) : (
                <img src={image.downloadIcon.default} alt="다운로드 아이콘" />
              )}
            </BorderButton>
          </Flex>
        </Section>

        <Section>
          <SectionTitle justify="space-between">
            <p>Long-list</p>

            <p>
              기업 총 <b>32개</b>
            </p>
          </SectionTitle>

          <Container>
            <img src={image.longList} alt="Long list table" />
          </Container>
        </Section>
      </ModalContainer>

      <StyledFloatButton
        onClick={() => handleModalOpen()}
        shape="square"
        icon={
          <img
            src={image.longListIcon.default}
            alt="long list 아이콘"
            width={isDesktop ? 18 : 14}
            height={isDesktop ? 18 : 14}
          />
        }
        description="Long-list 샘플보기"
        type="primary"
      />
    </>
  );
};

export default FloatImageButton;
