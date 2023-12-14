import React from "react";
import { Flex } from "antd";

import { SecondaryButton } from ".";

const LoadMoreButton = ({ fetchNextPage, hasNextPage, isFetchingNextPage }) => {
  return (
    <Flex align="center" justify="center">
      <SecondaryButton
        clickEvent={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "불러오는 중..."
          : hasNextPage
          ? "더보기"
          : "더이상 불러 올 데이터가 없습니다."}
      </SecondaryButton>
    </Flex>
  );
};

export default LoadMoreButton;
