import React, { Fragment, useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useInfiniteQuery } from "react-query";
import { Flex, Spin, notification } from "antd";
import styled from "@emotion/styled";

import { PrimaryButton } from "@/components/ui/buttons";
import LoadMoreButton from "@/components/ui/buttons/LoadMoreButton";
import { NEEDS_LIST_API_URL, NEED_LIST_LOAD_SIZE } from "@/constants/apiUrls";
import Interceptor from "@/lib/axios/AxiosInterceptor";

const StyledTable = styled.div(() => ({
  maxWidth: "80vw",
  margin: "8rem auto",
}));

const StyledRow = styled(Flex)(() => ({
  borderBottom: "1px solid #ccc",

  ":hover": {
    background: "#f1f1f1",
  },
}));

const Column = styled(Flex)(({ flex, header, theme }) => ({
  flex: flex,
  minHeight: "8rem",
  padding: "1rem",
  whiteSpace: header === "true" ? "nowrap" : "break-word",
  cursor: header ? "default" : "pointer",
  fontWeight: header ? theme.fontWeight.bold : theme.fontWeight.regular,
}));

const Need = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const getNeedList = async ({ pageParam = 1 }) => {
    const { status, data } = await Interceptor?.get(
      `${NEEDS_LIST_API_URL}?page=${pageParam}&size=${NEED_LIST_LOAD_SIZE}`
    );

    if (status === 200) {
      return data;
    }
  };

  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (state?.mutateStatus === "delete") {
      api.success({
        message: "인수 니즈 삭제",
        description: "인수 니즈가 성공적으로 삭제되었습니다.",
        duration: 3,
      });
    }

    if (state?.mutateStatus === "terminate") {
      api.success({
        message: "인수 니즈 종료",
        description: "인수 니즈가 성공적으로 종료되었습니다.",
        duration: 3,
      });
    }

    if (state?.mutateStatus === "tempo") {
      api.success({
        message: "인수 니즈 임시 저장",
        description: "인수 니즈가 성공적으로 임시 저장되었습니다.",
        duration: 3,
      });
    }

    if (state?.mutateStatus === "edit") {
      api.success({
        message: "인수 니즈 수정",
        description: "인수 니즈가 성공적으로 수정되었습니다.",
        duration: 3,
      });
    }
  }, [api, state?.mutateStatus]);

  const {
    data: needList,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["needList"],
    queryFn: getNeedList,
    getNextPageParam: (lastPage, pages) => {
      return pages.length < lastPage.totalCnt / NEED_LIST_LOAD_SIZE
        ? pages.length + 1
        : undefined;
    },
  });

  const columns = [
    {
      title: "번호",
      flex: "1 1 8rem",
    },
    {
      title: "딜 규모",
      flex: "1 1 5rem",
    },
    {
      title: "산업 및 업종",
      flex: 5,
    },
    {
      title: "진행 상태",
      flex: 1,
    },
    {
      title: "작성일",
      flex: "1 1 6rem",
    },
  ];

  const detailClick = useCallback(
    (id) => {
      navigate(`/need/edit/${id}`);
    },
    [navigate]
  );

  useEffect(() => {
    window.history.replaceState({}, document.title);
  }, []);

  return (
    <div>
      {contextHolder}

      <PrimaryButton linkTo="/need/add">인수 니즈 생성</PrimaryButton>

      <StyledTable>
        {isLoading ? (
          <Spin />
        ) : (
          <>
            <Flex gap="large">
              {columns.map((column) => {
                return (
                  <Column
                    key={column.title}
                    flex={column.flex}
                    align="center"
                    header="true"
                  >
                    {column.title}
                  </Column>
                );
              })}
            </Flex>

            {needList?.pages.map((group) => {
              if (group.data.length <= 0) {
                return <div key="no Data">작성하신 인수 니즈가 없습니다.</div>;
              }

              return group.data.map((need) => {
                return (
                  <StyledRow
                    key={need.needs_key}
                    onClick={() => detailClick(need.needs_key)}
                    gap="large"
                  >
                    <Column flex={columns[0].flex} align="center">
                      {need.needs_number}
                    </Column>

                    <Column flex={columns[1].flex} align="center">
                      {need.deal_scale ? need.deal_scale : "-"}
                    </Column>

                    <Column flex={columns[2].flex} align="center">
                      {need.industry}
                    </Column>

                    <Column flex={columns[3].flex} align="center">
                      {need.status_nm}
                    </Column>

                    <Column flex={columns[4].flex} align="center">
                      {need.ins_date}
                    </Column>
                  </StyledRow>
                );
              });
            })}

            <div>
              {isFetching && !isFetchingNextPage ? "Fetching..." : null}
            </div>
          </>
        )}
      </StyledTable>

      <LoadMoreButton
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </div>
  );
};

export default Need;
