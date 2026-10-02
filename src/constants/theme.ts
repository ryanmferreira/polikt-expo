import { Appearance } from "react-native";

const DARK_COLORS = {
  primary: "#8D6DF0",
  background: "#0C0C0C",
  surface: "#1C1C1C",
  surfaceAlt: "#252525",
  border: "#393939",
  text: "#F5F5F5",
  textMuted: "#BDBDC7",
  onPrimary: "#FFFFFF",
  field: "#292929",
  danger: "#E32323",
  tag: "#30264B",
  tagText: "#E7DEFF",
  navBar: "#111111",
} as const;

const LIGHT_COLORS = {
  primary: "#176B9A",
  background: "#F3F6F8",
  surface: "#FFFFFF",
  surfaceAlt: "#E8EEF2",
  border: "#D5DEE5",
  text: "#1D2B36",
  textMuted: "#536572",
  onPrimary: "#FFFFFF",
  field: "#E8EEF2",
  danger: "#B42318",
  tag: "#DCECF5",
  tagText: "#174B68",
  navBar: "#FFFFFF",
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
  default: 1,
} as const;

const USE_DARK_THEME = Appearance.getColorScheme() === "dark";

export const COLORS = USE_DARK_THEME ? DARK_COLORS : LIGHT_COLORS;

export const THEME = {
  colors: COLORS,
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  borderWidth: BORDER_WIDTH,
};
