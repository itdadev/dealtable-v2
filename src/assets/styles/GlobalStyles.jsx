import { css, Global } from "@emotion/react";
const style = css`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

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
    font-size: 1.4rem;
    font-weight: 400;
    padding: 0 !important;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    word-break: keep-all;
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
`;

function GlobalStyles() {
  return <Global styles={style} />;
}

export default GlobalStyles;
