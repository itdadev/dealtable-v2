export const image = {
  // NOTE: images for all pages
  mainBanner01: require("./assets/images/main-banner.png"),
  homeSectionBg01: require("./assets/images/home-section-bg01.png"),
  homeSectionBg02: require("./assets/images/home-section-bg02.png"),
  homeSectionBg03: require("./assets/images/home-section-bg03.png"),
  homeSectionBg04: require("./assets/images/home-section-bg04.png"),
  homeSectionBg05: require("./assets/images/home-section-bg05.png"),
  homeSectionBg06: require("./assets/images/home-section-bg06.png"),

  // NOTE: icons for all pages
  whiteLogo: require("./assets/icons/logo-white.svg"),
  basicLogo: require("./assets/icons/logo-basic.svg"),
  homeArrowDown: require("./assets/icons/home-arrow-down.svg"),
  rightLinkArrow: require("./assets/icons/right-link-arrow.svg"),
  hamburgerLine: require("./assets/icons/hamburger-line.svg"),
};

export const color = {
  // NOTE: colors for all pages
  primary: "#2B2F65",
  baseBlack: "#111",
  grey: "#666666",
  disableGrey: "#FAFAFD",
  error: "#ff4d4f",
  inactiveGrey: "#808080",
  opacityWhite20: "rgba(255, 255, 255, 0.2)",
};

export const AppTheme = {
  image,
  color,
  fontWeight: {
    thin: 100,
    light: 200,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  shadow: {
    primary: "0 0.1rem 0.8rem rgba(0, 0, 0, 0.08)",
  },
  radius: {
    primary: "0.5rem",
    secondary: "1rem",
  },
};

export default AppTheme;
