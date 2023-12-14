import { css, Global } from "@emotion/react";

const style = css`
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-pagination {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-righr: 1rem;
    right: 1.6rem !important;
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
    transition: opacity 200ms;
  }

  .fadeInOut-exit {
    opacity: 1;
  }

  .fadeInOut-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }

  // Antd
  .ant-input-data-count {
    top: -2.2rem;
    font-size: 1.4rem;
    color: #666 !important;
  }
`;

function LibraryStyles() {
  return <Global styles={style} />;
}

export default LibraryStyles;
