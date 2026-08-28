import { StyleSheet } from 'react-native';

import { THEME } from '../constants/theme';

export const markdownStyles = StyleSheet.create({
    body: {
        color: THEME.colors.white,
        fontSize: 16,
        lineHeight: 24,
    },

    heading1: {
        color: THEME.colors.primary,
        fontSize: 28,
        fontWeight: '700',
    },

    heading2: {
        color: THEME.colors.primary,
        fontSize: 22,
        fontWeight: '700',
    },

    heading3: {
        color: THEME.colors.primary,
        fontSize: 18,
        fontWeight: '700',
    },

    paragraph: {
        color: THEME.colors.white,
    },

    link: {
        color: THEME.colors.primary,
    },
});