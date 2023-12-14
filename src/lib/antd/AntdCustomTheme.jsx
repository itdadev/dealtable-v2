import { color } from "@/theme";

export const AntdTheme = {
  token: {
    // Seed Token
    colorPrimary: color.primary,
    colorLink: color.primary,
    borderRadius: 5,
    colorTextBase: color.baseBlack,
  },
  components: {
    Button: {
      colorLinkHover: "white",
    },
    Input: {
      paddingInlineLG: 16,
      paddingBlockLG: 16,
    },
    Flex: {
      fontSize: "inherit",
    },
    Modal: {
      borderRadiusLG: 0,
      fontWeightStrong: 400,
      titleFontSize: 22,
    },
  },
};
