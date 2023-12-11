import React from "react";
import axios from "axios";
import { useInfiniteQuery } from "react-query";
import styled from "@emotion/styled";
import { Flex, Spin } from "antd";

import { FAQ_LIST_LOAD_SIZE, NOTICE_LIST_API_URL } from "@/constants/apiUrls";
import LoadMoreButton from "@/components/ui/buttons/LoadMoreButton";

const FaqContainer = styled.div(() => ({
  maxWidth: "60vw",
  margin: "8rem auto",
}));

const Notice = () => {
  const getFawList = async ({ pageParam = 1 }) => {
    const { status, data } = await axios?.get(
      `${NOTICE_LIST_API_URL}?page=${pageParam}&size=${FAQ_LIST_LOAD_SIZE}`
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
      return pages.length < lastPage.totalCnt / FAQ_LIST_LOAD_SIZE
        ? pages.length + 1
        : undefined;
    },
  });

  return (
    <FaqContainer>
      {isLoading ? (
        <Spin />
      ) : (
        <>
          {noticeList?.pages.map((group) => {
            if (group.data.length <= 0) {
              return <div key="no Data">공지사항이 없습니다.</div>;
            }

            return group.data.map((faq) => {
              return (
                <Flex key={faq.notice_key} gap="large">
                  <div>{faq.title}</div>

                  <div>{faq.content}</div>

                  <div>{faq.ins_date}</div>
                </Flex>
              );
            });
          })}
        </>
      )}

      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>

      <LoadMoreButton
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </FaqContainer>
  );
};

export default Notice;
