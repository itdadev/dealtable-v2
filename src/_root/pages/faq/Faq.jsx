import React, { useState } from "react";
import axios from "axios";
import { useInfiniteQuery } from "react-query";
import Search from "antd/es/input/Search";
import styled from "@emotion/styled";
import { Flex, Spin } from "antd";

import { PrimaryButton } from "@/components/ui/buttons";
import { FAQ_LIST_API_URL, FAQ_LIST_LOAD_SIZE } from "@/constants/apiUrls";

const FaqContainer = styled.div(() => ({
  maxWidth: "60vw",
  margin: "8rem auto",
}));

const Faq = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const getFawList = async ({ pageParam = 1 }) => {
    const { status, data } = await axios?.get(
      `${FAQ_LIST_API_URL}?page=${pageParam}&size=${FAQ_LIST_LOAD_SIZE}&keyword=${searchKeyword}`
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
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["faqList", searchKeyword],
    queryFn: getFawList,
    getNextPageParam: (lastPage, pages) => {
      return pages.length < lastPage.totalCnt / FAQ_LIST_LOAD_SIZE
        ? pages.length + 1
        : undefined;
    },
  });

  const onSearch = (value) => {
    setSearchKeyword(value);
  };

  return (
    <FaqContainer>
      {isLoading ? (
        <Spin />
      ) : (
        <>
          <Flex gap="large">
            <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
              size="large"
            />
          </Flex>

          {faqList?.pages.map((group) => {
            if (group.data.length <= 0) {
              return <div key="no Data">No Data</div>;
            }

            return group.data.map((faq) => {
              return (
                <Flex key={faq.faq_key} gap="large">
                  <div>[{faq.category}]</div>

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

      <Flex align="center" justify="center">
        <PrimaryButton
          clickEvent={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "더보기"
            : "Nothing more to load"}
        </PrimaryButton>
      </Flex>
    </FaqContainer>
  );
};

export default Faq;
