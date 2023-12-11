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
  },
};
