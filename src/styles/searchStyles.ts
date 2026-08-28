import { StyleSheet } from 'react-native';
import { THEME } from '../constants/theme';

export const searchStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.colors.background,
        paddingTop: THEME.spacing.paddingPageTop,
        paddingHorizontal: THEME.spacing.paddingStandard,
    },
    
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    headerTitle: {
        color: THEME.colors.primary,
        fontSize: 22,
        fontWeight: '800',
    },

    mainDivider: {
        height: THEME.borderWidth.default,
        backgroundColor: THEME.colors.primary,
        width: '100%',
        marginBottom: 24,
    },
    subtitle: {
        color: THEME.colors.white,
        fontSize: 16,
        marginBottom: 16,
    },

    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: THEME.borderWidth.default,
        borderColor: THEME.colors.white,
        borderRadius: THEME.borderRadius.default,
        paddingHorizontal: 12,
        height: 48,
        marginBottom: 32,
    },
    searchInput: {
        flex: 1,
        color: THEME.colors.white,
        fontSize: 14,
    },

    filterRow: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 24,
    },
    filterButtonActive: {
        flex: 1,
        backgroundColor: THEME.colors.primary,
        borderWidth: THEME.borderWidth.default,
        borderColor: THEME.colors.primary,
        paddingVertical: THEME.spacing.buttonVertical,
        borderRadius: THEME.borderRadius.default,
        alignItems: 'center',
        justifyContent: 'center',
    },
    filterButtonInactive: {
        flex: 1,
        backgroundColor: 'transparent',
        borderWidth: THEME.borderWidth.default,
        borderColor: THEME.colors.primary,
        paddingVertical: THEME.spacing.buttonVertical,
        borderRadius: THEME.borderRadius.default,
        alignItems: 'center',
        justifyContent: 'center',
    },
    filterTextActive: {
        color: THEME.colors.black,
        fontSize: 13,
        fontWeight: '800',
    },
    filterTextInactive: {
        color: THEME.colors.primary,
        fontSize: 13,
        fontWeight: '800',
    },

    card: {
        backgroundColor: THEME.colors.container,
        borderRadius: THEME.borderRadius.default,
        borderTopWidth: THEME.borderWidth.default,
        borderLeftWidth: THEME.borderWidth.default,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderColor: THEME.colors.border,
        padding: THEME.spacing.paddingArticleContainer,
        marginBottom: 16,
        gap: 12,
    },
    cardTitle: {
        color: THEME.colors.primary,
        fontSize: 16,
        fontWeight: '800',
    },
    cardDivider: {
        height: THEME.borderWidth.default,
        backgroundColor: THEME.colors.primary,
        marginBottom: 4,
    },

    recentSearchItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingHorizontal: 4,
        paddingVertical: 8,
    },
    recentSearchText: {
        color: THEME.colors.contrast,
        fontSize: 13,
        fontWeight: '600',
    },

    topicsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: 10,
    },
    topicCard: {
        width: '48%',
        backgroundColor: THEME.colors.background,
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderRadius: THEME.borderRadius.default,
        borderBottomWidth: THEME.borderWidth.default,
        borderRightWidth: THEME.borderWidth.default,
        borderColor: THEME.colors.border,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topicText: {
        color: THEME.colors.contrast,
        fontSize: 12,
        fontWeight: '700',
        textAlign: 'center',
    },
});