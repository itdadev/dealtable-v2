import { css, Global } from "@emotion/react";
const style = css`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap');

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    line-height: 1.2;
    overflow-x: hidden;
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #fff inset;
    -webkit-text-fill-color: #000;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }

  body {
    width: 100vw;
    max-width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-weight: 400;
    padding: 0 !important;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    word-break: keep-all;
    background: #fafafd;
    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  body::-webkit-scrollbar {
    width: 8px; /body 스크롤바의 너비 */
  }

  body::-webkit-scrollbar-thumb {
    height: 10%; /* 스크롤바의 길이 */
    background: #e8e8e8; /* 스크롤바의 색상 */
    background-clip: padding-box;
    border-radius: 60px;
  }

  body::-webkit-scrollbar-track {
    background: white; /*스크롤바 뒷 배경 색상*/
  }


  *:not(body)::-webkit-scrollbar {
    width: 15px; /* 스크롤바의 너비 */
  }

  *:not(body)::-webkit-scrollbar-thumb {
    height: 10%; /* 스크롤바의 길이 */
    background: #e8e8e8; /* 스크롤바의 색상 */
    border-radius: 60px;
    border: 5px solid transparent;
    background-clip: padding-box;
  }

  *:not(body)::-webkit-scrollbar-track {
    background: white; /*스크롤바 뒷 배경 색상*/
  }

  p + p {
    margin-block-start: 0.6rem;
  }

  a {
    color: inherit;
    font-size: inherit;
    text-decoration: none;
  }

  button,
  a {
    &:hover {
      transition: all 0.3s;
    }
  }

  ul,
  li {
    list-style: none;
  }

  button {
    color: inherit;
    font: inherit;
    cursor: pointer;
    background: inherit;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }

  input:read-only::placeholder {
    background: #FAFAFD;
    border: 3px solid #FAFAFD;
    color: #777;
  }

  textarea:read-only {
    background: #FAFAFD;
    color: #777;
  }
`;

function GlobalStyles() {
  return <Global styles={style} />;
}

export default GlobalStyles;
