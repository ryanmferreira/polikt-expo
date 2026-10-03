import { Appearance } from "react-native"; // * This is used to detect the user's color scheme

const DARK_COLORS = {
  primary: "#8D6DF0",      // Highlight and buttons
  background: "#0C0C0C",   // Background
  surface: "#1C1C1C",      // Cards and containers
  surfaceAlt: "#252525",   // Cards and containers
  border: "#393939",       // Borders
  text: "#F5F5F5",         // Text
  textMuted: "#BDBDC7",    // Text muted
  onPrimary: "#FFFFFF",    // Text on highlight and buttons
  onPrimaryAlt: "#FFFFFF", // Text on highlight and buttons
  field: "#292929",        // Text fields
  danger: "#E32323",       // Danger
  success: "#42b451",      // Success
  tag: "#30264B",          // Tags
  tagText: "#E7DEFF",      // Tags text
  navBar: "#111111",       // Nav bar
} as const;

const LIGHT_COLORS = {
  primary: "#6D4CDB",      // Highlight and buttons
  background: "#F7F6FC",   // Background
  surface: "#FFFFFF",      // Cards and containers
  surfaceAlt: "#EFECFA",   // Cards and containers
  border: "#DDD8EE",       // Borders
  text: "#27233A",         // Text
  textMuted: "#625D73",    // Text muted
  onPrimary: "#FFFFFF",    // Text on highlight and buttons
  onPrimaryAlt: "#000000", // Text on highlight and buttons
  field: "#EFECFA",        // Text fields
  danger: "#B42318",       // Danger
  success: "#2E9B55",      // Success
  tag: "#E9E3FF",          // Tags
  tagText: "#4B3792",      // Tags text
  navBar: "#FFFFFF",       // Nav bar
} as const;

export const SPACING = {
  // Spacing between elements
  gap: 24,

  // Padding
  paddingPageTop: 48,
  paddingArticleContainer: 16,
  paddingStandard: 24,

  // Buttons
  buttonHorizontal: 16,
  buttonVertical: 12,
} as const;

export const BORDER_RADIUS = {
  // Normal
  default: 12,

  // Rounded
  rounded: 128,
} as const;

export const BORDER_WIDTH = {
  default: 1,
} as const;

// TODO: Add the option to change the theme colors based on the user's preferences

// * Use the user's color scheme to determine the theme
const USE_DARK_THEME = Appearance.getColorScheme() === "dark";

// * Define the theme colors based on the user's color scheme
export const COLORS = USE_DARK_THEME ? DARK_COLORS : LIGHT_COLORS;

// * Export the theme object
export const THEME = {
  colors: COLORS,
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  borderWidth: BORDER_WIDTH,
};
