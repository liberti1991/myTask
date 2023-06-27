import "styled-components";
import theme from "../theme";

declare module "styled-components" {
  type themeType = typeof theme;

  export interface DefaultTheme extends themeType {}
}
interface ITheme {
  COLORS: {
    BLUE_DARK: string;
    BLUE: string;

    PURPLE_DARK: string;
    PURPLE: string;

    DANGER: string;

    GRAY_700: string;
    GRAY_600: string;
    GRAY_500: string;
    GRAY_400: string;
    GRAY_300: string;
    GRAY_200: string;
    GRAY_100: string;
  };

  FONT_FAMILY: {
    REGULAR: string;
    BOLD: string;
  };
  FONT_SIZE: {
    SM: number;
    MD: number;
    LG: number;
    XL: number;
  };
}
