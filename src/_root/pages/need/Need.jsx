import React, { Fragment } from "react";

import { PrimaryButton } from "@/components/ui/buttons";
import Interceptor from "@/lib/axios/AxiosInterceptor";
import { needsListUrl } from "@/constants/apiUrls";
import { useInfiniteQuery } from "react-query";
import { Spin, Table } from "antd";

const LOAD_SIZE = 2;

const Need = () => {
  const getUserData = async ({ pageParam = 1 }) => {
    const response = await Interceptor?.get(
      `${needsListUrl}?page=${pageParam}&size=${LOAD_SIZE}`
    );

    return response;
  };

  const {
    data: needList,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["needList"],
    queryFn: getUserData,
    getNextPageParam: (lastPage, pages) =>
      pages.length < lastPage.total_cnt / LOAD_SIZE
        ? pages.length + 1
        : undefined,
  });

  const columns = [
    {
      title: "번호",
      dataIndex: "needs_number",
    },
    {
      title: "딜 규모",
      dataIndex: "deal_scale",
    },
    {
      title: "산업 및 업종",
      dataIndex: "industry",
    },
    {
      title: "진행 상태",
      dataIndex: "status_nm",
    },
    {
      title: "작성일",
      dataIndex: "ins_date",
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <div>
      <PrimaryButton linkTo="/need/add">인수 니즈 생성</PrimaryButton>

      <div>
        {isLoading ? (
          <Spin />
        ) : (
          <>
            {needList.pages.map((group, i) => {
              console.log(group.data);
              return (
                <Table
                  key={i}
                  columns={columns}
                  dataSource={group.data.data}
                  onChange={onChange}
                />
              );
            })}

            <PrimaryButton
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
            >
              {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                ? "Load More"
                : "Nothing more to load"}
            </PrimaryButton>

            <div>
              {isFetching && !isFetchingNextPage ? "Fetching..." : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Need;
