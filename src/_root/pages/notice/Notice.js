import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useInfiniteQuery, useQueryClient } from "react-query";
import { Collapse, Flex, Spin } from "antd";
import styled from "@emotion/styled";
import { useMediaQuery } from "react-responsive";

import { color } from "@/theme";
import {
  NOTICE_LIST_API_URL,
  NOTICE_LIST_LOAD_SIZE,
} from "@/constants/apiUrls";
import LoadMoreButton from "@/components/ui/buttons/LoadMoreButton";
import { CustomForm } from "@/components/ui/form";
import { FormDescription } from "@/components/ui/form/CustomForm";
import { mq } from "@/lib/react-responsive/mediaQuery";
import {
  NoNoticeText,
  NoticeText,
} from "@/util/language-setting/texts/TranslatedTexts";

import { Nodata } from "../need/Need";

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
  overflowWrap: "anywhere",

  [mq("desktop")]: {
    padding: "0.8rem",
  },
}));

const ContentIn = styled(Collapse)(({ theme }) => ({
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

const TitleWrapper = styled(Flex)(() => ({
  maxWidth: "70rem",
  width: "100%",
  overflowWrap: "anywhere",
}));

const Notice = () => {
  const queryClient = useQueryClient();

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [activeKey, setActiveKey] = useState([]);

  const getFaqList = async ({ pageParam = 1 }) => {
    const { status, data } = await axios?.get(
      `${NOTICE_LIST_API_URL}?page=${pageParam}&size=${NOTICE_LIST_LOAD_SIZE}`,
    );

    if (status === 200) {
      return data;
    }
  };

  const {
    data: noticeList,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["noticeList"],
    queryFn: getFaqList,
    getNextPageParam: (lastPage, pages) => {
      return pages.length < lastPage.totalCnt / NOTICE_LIST_LOAD_SIZE
        ? pages.length + 1
        : undefined;
    },
  });

  useEffect(() => {
    refetch();

    return () => {
      queryClient.removeQueries("noticeList");
    };
  }, [refetch, queryClient]);

  const noticeItems = useMemo(() => {
    const newArr = noticeList?.pages.map((group) => {
      if (group.data.length <= 0) {
        return [];
      }

      return group.data.map((item) => {
        return {
          key: `${item.notice_key}`,
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
                  active={activeKey.includes(JSON.stringify(item.notice_key))}
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
  }, [activeKey, isDesktop, noticeList?.pages]);

  return (
    <CustomForm noLogo wide>
      <FormDescription>
        <NoticeText />
      </FormDescription>

      {isLoading ? (
        <Spin />
      ) : (
        <>
          {noticeItems?.length === 0 ? (
            <Nodata>
              <NoNoticeText />
            </Nodata>
          ) : (
            <ContentIn
              accordion
              items={noticeItems}
              onChange={(key) => {
                setActiveKey(key);
              }}
            />
          )}
        </>
      )}

      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>

      <LoadMoreButton
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </CustomForm>
  );
};

export default Notice;
