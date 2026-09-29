import { useColorScheme } from "react-native";

const colorScheme = useColorScheme();

const DARK_COLORS = {
  primary: "#8d6df0", // ! Highlight color (Ex: titles, buttons)
  background: "#0C0C0C", // * Background color of the app
  container: "#1C1C1C", // * Background color of containers (Ex: cards, modals)
  border: "#393939", // * Border color for containers
  contrast: "#BDBDBD", // * Contrast color (Ex: inactive tab)
  white: "#FFFFFF", // * White default
  black: "#000000", // * Black default
  red: "#E32323", // * Red default
  tag: "#c9b7ff", // * Tag color
  navBar: "#0C0C0C", // * Tag color
  navIcon: "#000000", // * Tag color
} as const;

const LIGHT_COLORS = {
  primary: "#61A3FA", // ! Highlight color (Ex: titles, buttons)
  background: "#e7e7e7", // * Background color of the app
  container: "#FEFFFF", // * Spi faBackground color of containers (Ex: cards, modals)
  border: "#d7d7d7", // * Border color for containers
  contrast: "#aaaaaa", // * Contrast color (Ex: inactive tab)
  white: "#2f2f2f", // * White default
  black: "#ffffff", // * Black default
  red: "#E32323", // * Red default
  tag: "#aacfff", // * Tag color
  navBar: "rgb(255, 255, 255)", // * Tag color
  navIcon: "#FEFFFF", // * Tag color
} as const;

export const SPACING = {
  gap: 24,

  paddingPageTop: 48,
  paddingArticleContainer: 16,
  paddingStandard: 24,

  buttonHorizontal: 16,
  buttonVertical: 12,
} as const;

export const BORDER_RADIUS = {
  default: 12,
  rounded: 128,
} as const;

export const BORDER_WIDTH = {
  default: 2,
} as const;

const USE_DARK_THEME = colorScheme === 'light';

export const COLORS = USE_DARK_THEME ? LIGHT_COLORS : DARK_COLORS;

export const THEME = {
  colors: COLORS,
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  borderWidth: BORDER_WIDTH,
};
