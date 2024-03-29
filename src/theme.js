export const image = {
  // NOTE: images for all pages
  mainBanner01: require("./assets/images/main-banner.png"),
  homeSectionBg01: require("./assets/images/home-section-bg01.png"),
  homeSectionBg02: require("./assets/images/home-section-bg02.png"),
  homeSectionBg03: require("./assets/images/home-section-bg03.png"),
  homeSectionBg04: require("./assets/images/home-section-bg04.png"),
  homeSectionBg05: require("./assets/images/home-section-bg05.png"),
  homeSectionBg06: require("./assets/images/home-section-bg06.png"),
  homeSectionBg07: require("./assets/images/home-section-bg07.png"),
  longList: require("./assets/images/long-list.jpg"),
  longListImage: require("./assets/images/DEALTABLE_Long-list.jpg"),
  longListExcel: require("./assets/images/DEALTABLE_Long-list.xlsx"),

  // NOTE: icons for all pages
  whiteLogo: require("./assets/icons/logo-white.svg"),
  basicLogo: require("./assets/icons/logo-basic.svg"),
  homeArrowDown: require("./assets/icons/home-arrow-down.svg"),
  rightLinkArrow: require("./assets/icons/right-link-arrow.svg"),
  hamburgerLine: require("./assets/icons/hamburger-line.svg"),
  search: require("./assets/icons/search.svg"),
  filterOff: require("./assets/icons/filter-off.svg"),
  filterAsc: require("./assets/icons/filter-asc.svg"),
  filterDesc: require("./assets/icons/filter-desc.svg"),
  leftArrowIcon: require("./assets/icons/arrow-left-s-line.svg"),
  downloadIcon: require("./assets/icons/download-icon.svg"),
  downloadIconWhite: require("./assets/icons/download-icon-white.svg"),
  longListIcon: require("./assets/icons/long-list-icon.svg"),
};

export const color = {
  // NOTE: colors for all pages
  primary: "#2B2F65",
  primaryPoint: "#141CBE",
  primary02: "#4347B7",
  secondary: "#BD9B60",
  exampleButton: "#C4C2B8",
  baseBlack: "#111",
  grey: "#666666",
  readOnlyText: "#777",
  lightGrey: "#EEEEEE",
  disableGrey: "#FAFAFD",
  error: "#D80000",
  inactiveGrey: "#808080",
  opacityWhite20: "rgba(255, 255, 255, 0.2)",
};

export const AppTheme = {
  image,
  color,
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  shadow: {
    primary: "0 0.1rem 0.8rem rgba(0, 0, 0, 0.08)",
    secondary: "0 -1rem 1rem rgba(0, 0, 0, 0.08)",
  },
  radius: {
    primary: "0.5rem",
    secondary: "1rem",
  },
  fontFamily: {
    primary: "'NanumSquare', sans-serif",
    secondary: "'Montserrat', sans-serif",
  },
};

export default AppTheme;
