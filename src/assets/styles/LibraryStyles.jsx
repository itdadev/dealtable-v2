import { css, Global } from "@emotion/react";

const style = css`
  .fp-watermark {
    display: none !important;
  }

  .fp-overflow {
    height: 100%;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }
`;

function LibraryStyles() {
  return <Global styles={style} />;
}

export default LibraryStyles;
