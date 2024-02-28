/**
 * Logo
 */
import logoText from "../../assets/logo/logoText.svg";

/**
 * Background
 */

import * as THEME from "../../assets/theme/color";

/**
 * Color Theme
 */

const ThemeColor = THEME.color;
const ThemeText = THEME.text;

const img = {
  logo: logoText,
};

const color = {
  themeColor: ThemeColor,
  themeText: ThemeText,
};

export const LOGO = img.logo;

export const THEME_COLOR = color.themeColor;
export const TEXT_COLOUR = color.themeText;
