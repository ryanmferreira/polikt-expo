export const COLORS = {
  primary: '#61A3FA',           // ! Highlight color (Ex: titles, buttons)
  background: '#0C0C0C',        // * Background color of the app
  container: '#1C1C1C',         // * Background color of containers (Ex: cards, modals)
  containerBackground: '#1C1C1C', // * Alias for container backgrounds (Ex: cards, boxes)
  border: '#393939',            // * Border color for containers
  contrast: '#BDBDBD',          // * Contrast color (Ex: inactive tab)
  textPrimary: '#FFFFFF',       // * Primary readable text color over dark backgrounds
  secondary: '#5C5C5C',         // * Muted secondary color (Ex: timeline lines, locked states)
  white: '#FFFFFF',             // * White default
  black: '#000000',             // * Black default
  red: '#E32323',               // * Red default
  tag: '#DFF2FE',               // * Tag color
} as const;

export const SPACING = {
  gap: 24,
  default: 24,
  xs: 8,
  sm: 12,

  paddingPageTop: 48,
  paddingArticleContainer: 16,
  paddingStandard: 24,

  buttonHorizontal: 16,
  buttonVertical: 12,
} as const;

export const BORDER_RADIUS = {
  default: 8,
  rounded: 128,
  max: 999,
} as const;

export const BORDER_WIDTH = {
  default: 3,
} as const;

export const BORDER_SIZES = {
  thin: 1,
  thick: BORDER_WIDTH.default,
} as const;

export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 18,
} as const;

export const THEME = {
  colors: COLORS,
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  borderWidth: BORDER_WIDTH,
  borderSizes: BORDER_SIZES,
  fontSizes: FONT_SIZES,
};