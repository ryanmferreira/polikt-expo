import { StyleSheet } from 'react-native';
import { THEME } from '../constants/theme';

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
    paddingTop: THEME.spacing.paddingPageTop,
    paddingHorizontal: THEME.spacing.paddingStandard,
    gap: THEME.spacing.gap,
  },
  headerGroup: {
    gap: 8,
  },
  headerTitle: {
    color: THEME.colors.primary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: THEME.colors.white,
    fontSize: 16,
  },
  divider: {
    height: 2,
    backgroundColor: THEME.colors.primary,
    width: '100%',
    marginVertical: 4,
  },
  card: {
    backgroundColor: THEME.colors.container,
    borderTopWidth: THEME.borderWidth.default,
    borderLeftWidth: THEME.borderWidth.default,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderColor: THEME.colors.border,
    borderRadius: THEME.borderRadius.default,
    padding: THEME.spacing.paddingStandard,
    gap: 16,
  },
  cardTitle: {
    color: THEME.colors.primary,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  fieldGroup: {
    gap: 6,
  },
  label: {
    color: THEME.colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    backgroundColor: THEME.colors.white,
    borderRadius: THEME.borderRadius.default,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: THEME.colors.black,
  },
  button: {
    backgroundColor: THEME.colors.primary,
    borderRadius: THEME.borderRadius.default,
    paddingHorizontal: THEME.spacing.buttonHorizontal,
    paddingVertical: THEME.spacing.buttonVertical,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: THEME.colors.black,
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardDivider: {
    height: THEME.borderWidth.default,
    backgroundColor: THEME.colors.border,
    marginVertical: 4,
  },
  linkText: {
    color: THEME.colors.primary,
    fontSize: 14,
    fontWeight: '500',
  },
});