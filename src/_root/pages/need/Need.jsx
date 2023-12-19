import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useInfiniteQuery } from "react-query";
import { Flex, Spin, notification } from "antd";
import styled from "@emotion/styled";

import { PrimaryButton } from "@/components/ui/buttons";
import LoadMoreButton from "@/components/ui/buttons/LoadMoreButton";
import { NEEDS_LIST_API_URL, NEED_LIST_LOAD_SIZE } from "@/constants/apiUrls";
import { CustomForm } from "@/components/ui/form";
import Interceptor from "@/lib/axios/AxiosInterceptor";
import { IsDesktop, mq } from "@/lib/react-responsive/mediaQuery";
import { image } from "@/theme";

const StyledTable = styled.div(({ theme }) => ({
  maxWidth: "80vw",
  margin: "1.6rem auto",
  borderBottom: `1px solid ${theme.color.lightGrey}`,
}));

const StyledRow = styled(Flex)(({ theme }) => ({
  position: "relative",
  color: theme.color.baseBlack,
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  borderBottom: `1px solid ${theme.color.lightGrey}`,
  padding: "1rem 0",
  fontSize: "1.6rem",

  "&>div:last-of-type": {
    position: "absolute",
    right: 0,
    color: theme.color.grey,
    fontSize: "1.4rem",
  },

  "&>div:first-of-type": {
    color: theme.color.grey,
    fontSize: "1.4rem",
  },

  "&>div:nth-of-type(4)": {
    fontSize: "1.4rem",
  },

  ":hover": {
    background: theme.color.disableGrey,
    color: theme.color.baseBlack,
  },

  [mq("desktop")]: {
    flexDirection: "row",
    padding: 0,
    color: theme.color.grey,
    textAlign: "center",

    "&>div:first-of-type": {
      fontSize: "1.6rem",
    },

    "&>div:nth-of-type(4)": {
      fontSize: "1.6rem",
    },

    "&>div:last-of-type": {
      position: "static",
      fontSize: "1.6rem",
    },
  },
}));

const Column = styled.div(({ flex, header, theme, point }) => ({
  flex: "1",
  display: "flex",
  lineHeight: 1.8,
  color: point === "true" ? theme.color.primaryPoint : "inherit",
  gap: "0 1.2rem",
  whiteSpace: header === "true" ? "nowrap" : "break-word",
  textOverflow: "ellipsis",
  overflow: "hidden",

  [mq("desktop")]: {
    flex: flex,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "8rem",
    padding: "1rem",
    cursor: header === "true" ? "default" : "pointer",
    fontWeight:
      header === "true" ? theme.fontWeight.medium : theme.fontWeight.regular,
    borderBottom:
      header === "true" ? `2px solid ${theme.color.baseBlack}` : "none",
  },
}));

const Title = styled.div(() => ({
  fontSize: "2.2rem",
}));

const TotalCnt = styled(Flex)(() => ({
  fontSize: "1.6rem",
  gap: "0.2rem",

  [mq("desktop")]: {
    gap: "1.6rem 0",
  },
}));

const ToggleButton = styled.img(() => ({
  cursor: "pointer",
}));

const FilterToggle = ({ switchStatus, setSwitchStatus, type }) => {
  if (switchStatus === "asc" || switchStatus === undefined) {
    return (
      <ToggleButton
        src={image.filterAsc.default}
        alt="필터 오름차순"
        onClick={() => setSwitchStatus({ [type]: "desc" })}
      />
    );
  }

  if (switchStatus === "desc" || switchStatus === undefined) {
    return (
      <ToggleButton
        src={image.filterDesc.default}
        alt="필터 내림차순"
        onClick={() => setSwitchStatus({ [type]: "asc" })}
      />
    );
  }
};

const Need = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [switchStatus, setSwitchStatus] = useState({
    status: "asc",
    date: "desc",
  });

  const getNeedList = async ({ pageParam = 1 }) => {
    const { status, data } = await Interceptor?.get(
      `${NEEDS_LIST_API_URL}?page=${pageParam}&size=${NEED_LIST_LOAD_SIZE}&order_status=${
        switchStatus.status ? switchStatus.status : ""
      }&order_ins_date=${switchStatus.date ? switchStatus.date : ""}`
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
    queryKey: ["needList", switchStatus],
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
      width: "",
    },
    {
      title: "딜 규모",
      flex: "1 1 5rem",
    },
    {
      title: "산업 및 업종",
      flex: 5,
      ellipsis: 2,
    },
    {
      title: "진행 상태",
      flex: 1,
      after: (
        <FilterToggle
          switchStatus={switchStatus.status}
          setSwitchStatus={setSwitchStatus}
          type="status"
        />
      ),
    },
    {
      title: "작성일",
      flex: "1 1 6rem",
      after: (
        <FilterToggle
          switchStatus={switchStatus.date}
          setSwitchStatus={setSwitchStatus}
          type="date"
        />
      ),
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

  console.log(needList?.pages?.[0].totalCnt);
  return (
    <CustomForm wide noLogo>
      {contextHolder}

      <Flex align="center" justify="space-between">
        <TotalCnt vertical>
          <Title>인수 니즈</Title>

          <Flex gap="small">
            <span>티켓</span>

            <span>
              {needList?.pages?.[0].totalCnt
                ? needList?.pages?.[0].totalCnt
                : "0"}
              장
            </span>
          </Flex>
        </TotalCnt>

        <PrimaryButton linkTo="/need/add">인수 니즈 생성</PrimaryButton>
      </Flex>

      <StyledTable>
        {isLoading ? (
          <Spin />
        ) : (
          <>
            <IsDesktop>
              <Flex>
                {columns.map((column) => {
                  return (
                    <Column
                      key={column.title}
                      flex={column.flex}
                      align="center"
                      header="true"
                    >
                      {column.title}

                      {column.after}
                    </Column>
                  );
                })}
              </Flex>
            </IsDesktop>

            {needList?.pages.map((group) => {
              if (group.data.length <= 0) {
                return <div key="no Data">작성하신 인수 니즈가 없습니다.</div>;
              }

              return group.data.map((need) => {
                return (
                  <StyledRow
                    key={need.needs_key}
                    onClick={() => detailClick(need.needs_key)}
                  >
                    <Column flex={columns[0].flex}>{need.needs_number}</Column>

                    <Column flex={columns[1].flex}>
                      <div className="ellipsis-2">
                        {need.deal_scale ? need.deal_scale : "-"}
                      </div>
                    </Column>

                    <Column flex={columns[2].flex}>
                      <div className="ellipsis-2">
                        {need.industry ? need.industry : "-"}
                      </div>
                    </Column>

                    <Column
                      flex={columns[3].flex}
                      point={need.status !== "4" ? "true" : "false"}
                    >
                      {need.status_nm}
                    </Column>

                    <Column flex={columns[4].flex}>{need.ins_date}</Column>
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
    </CustomForm>
  );
};

export default Need;