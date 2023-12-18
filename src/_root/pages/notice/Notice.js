import React, { useMemo, useState } from "react";
import axios from "axios";
import { useInfiniteQuery } from "react-query";
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

const Notice = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const [activeKey, setActiveKey] = useState([]);

  const getFawList = async ({ pageParam = 1 }) => {
    const { status, data } = await axios?.get(
      `${NOTICE_LIST_API_URL}?page=${pageParam}&size=${NOTICE_LIST_LOAD_SIZE}`
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
  } = useInfiniteQuery({
    queryKey: ["noticeList"],
    queryFn: getFawList,
    getNextPageParam: (lastPage, pages) => {
      return pages.length < lastPage.totalCnt / NOTICE_LIST_LOAD_SIZE
        ? pages.length + 1
        : undefined;
    },
  });

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
              <Flex vertical gap="8px">
                <Category>{item.category}</Category>

                <Title
                  active={activeKey.includes(JSON.stringify(item.notice_key))}
                >
                  {item.title}
                </Title>
              </Flex>

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
      <FormDescription>공지사항</FormDescription>

      {isLoading ? (
        <Spin />
      ) : (
        <>
          {noticeItems?.length === 0 ? (
            <div>공지사항이 없습니다.</div>
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
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </CustomForm>
  );
};

export default Notice;
