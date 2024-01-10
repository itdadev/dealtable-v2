import React, { useMemo, useState } from "react";
import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { Collapse, Flex, Input, Spin } from "antd";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";
import { useIntl } from "react-intl";

import { color, image } from "@/theme";
import { FAQ_LIST_API_URL, FAQ_LIST_LOAD_SIZE } from "@/constants/apiUrls";
import LoadMoreButton from "@/components/ui/buttons/LoadMoreButton";
import { CustomForm } from "@/components/ui/form";
import { FormDescription } from "@/components/ui/form/CustomForm";
import { mq } from "@/lib/react-responsive/mediaQuery";

import { Nodata } from "../need/Need";
import { NoFaqText } from "@/util/language-setting/texts/TranslatedTexts";

const Category = styled.div(({ theme }) => ({
  fontSize: "1.4rem",
  color: theme.color.primaryPoint,
}));

const Title = styled.div(({ theme, active }) => ({
  fontSize: "1.6rem",

  [mq("desktop")]: {
    fontSize: "1.8rem",
    borderBottom: active
      ? `1px solid ${theme.color.baseBlack}`
      : `1px solid transparent`,
    fontWeight: active ? theme.fontWeight.regular : theme.fontWeight.light,
  },
}));

const Date = styled.div(({ theme }) => ({
  fontSize: "1.6rem",
  color: theme.color.grey,
}));

const Content = styled.div(({ theme }) => ({
  fontSize: "1.6rem",
  color: theme.color.grey,
  overflowWrap: "break-word",

  [mq("desktop")]: {
    padding: "0.8rem",
  },
}));

const ContentIn = styled(Collapse)(({ theme }) => ({
  marginTop: "2.4rem",
  background: "white",
  border: "none",
  borderRadius: 0,
  borderTop: `1px solid ${theme.color.baseBlack}`,
}));

const panelStyle = {
  marginBottom: 24,
  borderRadius: 0,
  border: "none",
  borderBottom: `1px solid ${color.lightGrey}`,
};

const StyledInput = styled(Input)(({ theme }) => ({
  background: theme.color.disableGrey,
  border: "none",
}));

const TitleWrapper = styled(Flex)(() => ({
  maxWidth: "70rem",
  overflowWrap: "break-word",
}));
const Faq = () => {
  const intl = useIntl();

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [activeKey, setActiveKey] = useState([]);

  const [searchKeyword, setSearchKeyword] = useState("");

  const getFaqList = async ({ pageParam = 1 }) => {
    const { status, data } = await axios?.get(
      `${FAQ_LIST_API_URL}?page=${pageParam}&size=${FAQ_LIST_LOAD_SIZE}&keyword=${searchKeyword}`,
    );

    if (status === 200) {
      return data;
    }
  };

  const {
    data: faqList,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["faqList", searchKeyword],
    queryFn: getFaqList,
    getNextPageParam: (lastPage, pages) => {
      return pages.length < lastPage.totalCnt / FAQ_LIST_LOAD_SIZE
        ? pages.length + 1
        : undefined;
    },
  });

  const onSearch = (value) => {
    setTimeout(async () => {
      setSearchKeyword(value);
    }, 1000);
  };

  const faqItems = useMemo(() => {
    const newArr = faqList?.pages.map((group) => {
      if (group.data.length <= 0) {
        return [];
      }

      return group.data.map((item) => {
        return {
          key: `${item.faq_key}`,
          label: (
            <Flex
              align={isDesktop ? "center" : "flex-start"}
              justify="space-between"
              vertical={!isDesktop}
              gap="8px"
            >
              <TitleWrapper vertical gap="8px">
                <Category>{item.category}</Category>

                <Title
                  active={activeKey.includes(JSON.stringify(item.faq_key))}
                >
                  {item.title}
                </Title>
              </TitleWrapper>

              <Date>{item.ins_date}</Date>
            </Flex>
          ),
          children: <Content>{item.content}</Content>,
          showArrow: false,
          style: panelStyle,
        };
      });
    });

    if (newArr) {
      return [].concat(...newArr);
    }
  }, [activeKey, faqList?.pages, isDesktop]);

  return (
    <CustomForm noLogo wide>
      <FormDescription>FAQ</FormDescription>

      {isLoading ? (
        <Spin />
      ) : (
        <>
          <Flex gap="large">
            <StyledInput
              placeholder={intl.formatMessage({
                id: "lang-enter-keyword",
              })}
              allowClear
              onChange={(e) => onSearch(e.target.value)}
              prefix={<img src={image.search.default} alt="검색" />}
              size="large"
            />
          </Flex>

          {faqItems?.length === 0 ? (
            <Nodata>
              <NoFaqText />
            </Nodata>
          ) : (
            <ContentIn
              accordion
              items={faqItems}
              onChange={(key) => {
                setActiveKey(key);
              }}
            />
          )}
        </>
      )}

      <LoadMoreButton
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </CustomForm>
  );
};

export default Faq;
