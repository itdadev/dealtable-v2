import { color } from "@/theme";

export const AntdTheme = {
  token: {
    // Seed Token
    colorPrimary: color.primary,
    colorLink: color.primary,
    borderRadius: 5,
    colorTextBase: color.baseBlack,
    fontFamily: "'Noto Sans KR', sans-serif",
  },
  components: {
    Button: {
      colorLinkHover: "white",
    },
    Input: {
      paddingInlineLG: 16,
      paddingBlockLG: 16,
      colorBgContainer: "inherit",
    },
    Flex: {
      fontSize: "inherit",
    },
    Modal: {
      borderRadiusLG: 0,
      fontWeightStrong: 400,
      titleFontSize: 22,
    },
    Collapse: {
      headerPadding: "2.4rem 0",
      contentPadding: "1.6rem",
      contentBg: color.disableGrey,
    },
  },
};
