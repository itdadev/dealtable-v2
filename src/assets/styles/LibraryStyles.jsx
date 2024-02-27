import { css, Global } from "@emotion/react";
import { mq } from "@/lib/react-responsive/mediaQuery";

const style = css`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-container {
    height: 300px;
  }

  .swiper-pagination {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
  }

  .swiper-pagination-bullet-active {
    background: transparent !important;
    border: 1px solid white;
    width: 18px !important;
    height: 18px !important;
  }

  .swiper-pagination-bullet {
    background: white;
    opacity: 1;
    width: 8px;
    height: 8px;
  }

  .fadeInOut-enter {
    opacity: 0;
  }

  .fadeInOut-enter-active {
    opacity: 1;
    transition: opacity 0.3s;
  }

  .fadeInOut-exit {
    opacity: 1;
  }

  .fadeInOut-exit-active {
    opacity: 0;
    transition: opacity 0.3s;
  }

  // NOTE: Antd

  .ant-input-data-count {
    top: -2.2rem;
    font-size: 1.4rem;
    color: #666 !important;
  }

  .ant-collapse-content {
    border: none !important;
  }

  .antd-modal-wrapper {
    //max-height: 80svh;
    max-width: 90vw;
    width: fit-content;
    margin: 0 auto;
    display: flex;
    overflow-y: auto;
    align-items: center;
    justify-content: center;

    ${mq("desktop")} {
      min-width: 60rem;
    }
  }

  .ant-input-group-addon {
    border: none !important;
    background: none !important;
    padding: 0 1.6rem !important;
  }

  .ant-modal-content {
    width: 100%;
    overflow-y: auto;
  }

  .ant-dropdown-menu-item {
    &:hover {
      color: #bd9b60 !important;
      transition: none !important;
    }
  }

  .antd-input-custom-border {
    border: 1px solid #d9d9d9;
    border-radius: 0.6rem;
  }

  .ant-input {
    background: white !important;

    &:read-only {
      color: #777 !important;
    }
  }

  .ant-checkbox-wrapper {
    align-items: center;

    .ant-checkbox {
      align-self: flex-start;
      margin-top: 0.3rem;
    }
  }

  .ant-notification-notice-message {
    margin-bottom: 0 !important;
  }

  .ant-collapse-header-text {
    width: 100% !important;
  }
`;

function LibraryStyles() {
  return <Global styles={style} />;
}

export default LibraryStyles;
