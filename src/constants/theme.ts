export const COLORS = {
  primary: '#61A3FA',      // Highlight color (Ex: titles, buttons)
  background: '#0C0C0C',   // Background color of the app
  container: '#1C1C1C',    // Background color of containers (Ex: cards, modals)
  border: '#393939',       // Border color for containers
  contrast: '#BDBDBD',     // CContrast color (Ex: inactive tab)
  white: '#FFFFFF',        // White default
  black: '#000000',        // Black default
  red: '#E32323',          // Red default
  tag: '#DFF2FE',          // Tag color
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
  default: 8,
  rounded: 128
} as const;

export const BORDER_WIDTH = {
  default: 3,
} as const;

export const THEME = {
  colors: COLORS,
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  borderWidth: BORDER_WIDTH,
};