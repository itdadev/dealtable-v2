import React from "react";
import { Flex } from "antd";

import { SecondaryButton } from ".";
import {
  LoadMoreText,
  LoadingText,
  NoMoreDataText,
} from "@/util/language-setting/texts/TranslatedTexts";

const LoadMoreButton = ({ fetchNextPage, hasNextPage, isFetchingNextPage }) => {
  return (
    <Flex align="center" justify="center">
      <SecondaryButton
        clickEvent={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? (
          <LoadingText />
        ) : hasNextPage ? (
          <LoadMoreText />
        ) : (
          <NoMoreDataText />
        )}
      </SecondaryButton>
    </Flex>
  );
};

export default LoadMoreButton;
