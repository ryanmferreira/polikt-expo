import { StyleSheet } from 'react-native';
import { THEME } from '../constants/theme';

export const homeStyles = StyleSheet.create({
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
        marginBottom: 24,
    },
    greetingTitle: {
        fontSize: 24,
        color: THEME.colors.white,
    },
    greetingHighlight: {
        fontSize: 24,
        fontWeight: '800',
        color: THEME.colors.primary,
    },
    subtitle: {
        fontSize: 16,
        color: THEME.colors.white,
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

    sectionTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: THEME.colors.primary,
        marginBottom: 8,
    },
    sectionDivider: {
        height: THEME.borderWidth.default,
        backgroundColor: THEME.colors.primary,
        width: '100%',
        marginBottom: 24,
    },

    card: {
        backgroundColor: THEME.colors.container,
        borderTopWidth: THEME.borderWidth.default,
        borderLeftWidth: THEME.borderWidth.default,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderColor: THEME.colors.border,
        borderRadius: THEME.borderRadius.default,
        padding: THEME.spacing.paddingArticleContainer,
        marginBottom: 24,
    },
    cardImage: {
        width: '100%',
        height: 150,
        borderRadius: THEME.borderRadius.default,
        marginBottom: 16,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: THEME.colors.white,
        marginBottom: 8,
    },
    cardDescription: {
        fontSize: 14,
        color: THEME.colors.white,
        marginBottom: 16,
        lineHeight: 20,
    },
    cardDivider: {
        height: THEME.borderWidth.default,
        backgroundColor: THEME.colors.border,
        marginBottom: 16,
    },

    tagsContainer: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 16,
        flexWrap: 'wrap',
    },
    tag: {
        backgroundColor: THEME.colors.tag,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: THEME.borderRadius.rounded,
        borderColor: THEME.colors.border,
    },
    tagText: {
        color: THEME.colors.black,
        fontSize: 11,
        fontWeight: '800',
    },

    footerRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    iconStat: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    statText: {
        color: THEME.colors.white,
        fontSize: 12,
        fontWeight: '600',
    },
});