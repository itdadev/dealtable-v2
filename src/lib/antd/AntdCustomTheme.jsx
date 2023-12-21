import { color } from "@/theme";

export const AntdTheme = {
  token: {
    // Seed Token
    colorPrimary: color.primary,
    colorLink: color.primary,
    borderRadius: 5,
    colorTextBase: color.baseBlack,
    fontFamily: "'NanumSquare', sans-serif",
    colorError: color.error,
    colorErrorBg: "#F6F6F6",
    colorErrorBorder: "#F6F6F6",
  },
  components: {
    Button: {
      colorLinkHover: "white",
      primaryShadow: "none",
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
    Alert: {
      defaultPadding: 12,
      borderRadiusLG: 0,
    },
  },
};
