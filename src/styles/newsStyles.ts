import { StyleSheet } from 'react-native';
import { THEME } from '../constants/theme';

export const newsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.colors.background,
    },

    scrollContent: {
        paddingHorizontal: THEME.spacing.paddingStandard,
        paddingVertical: 16,
        gap: THEME.spacing.gap,
    },

    mainCard: {
        backgroundColor: THEME.colors.surface,
        borderTopWidth: THEME.borderWidth.default,
        borderLeftWidth: THEME.borderWidth.default,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderColor: THEME.colors.border,
        borderRadius: THEME.borderRadius.default,
        padding: THEME.spacing.paddingArticleContainer,
        gap: THEME.spacing.gap,
    },
    metaCard: {
        backgroundColor: THEME.colors.surface,
        borderTopWidth: THEME.borderWidth.default,
        borderLeftWidth: THEME.borderWidth.default,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderColor: THEME.colors.border,
        borderRadius: THEME.borderRadius.default,
        padding: THEME.spacing.paddingArticleContainer,
        gap: 12,
    },
    metaRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
        flexWrap: 'wrap',
    },
    metaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        flexShrink: 1,
    },
    metaAuthor: {
        flex: 1,
    },
    metaActions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    metaAction: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
        paddingVertical: 4,
    },
    metaDivider: {
        height: THEME.borderWidth.default,
        backgroundColor: THEME.colors.border,
    },

    cardSection: {
        backgroundColor: THEME.colors.surface,
        borderTopWidth: THEME.borderWidth.default,
        borderLeftWidth: THEME.borderWidth.default,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderColor: THEME.colors.border,
        borderRadius: THEME.borderRadius.default,
        padding: THEME.spacing.paddingArticleContainer,
        gap: THEME.spacing.gap,
    },

    tagsContainer: {
        flexDirection: 'row',
        gap: 8,
        flexWrap: 'wrap',
    },
    tag: {
        backgroundColor: THEME.colors.tag,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: THEME.borderRadius.rounded,
        borderWidth: THEME.borderWidth.default,
        borderColor: THEME.colors.border,
    },
    tagText: {
        color: THEME.colors.tagText,
        fontSize: 11,
        fontWeight: '800',
    },

    mainTitle: {
        color: THEME.colors.text,
        fontSize: 22,
        fontWeight: '800',
        lineHeight: 28,
    },

    cardImage: {
        width: '100%',
        height: 180,
        borderRadius: THEME.borderRadius.default,
        marginVertical: 4,
    },

    leadText: {
        color: THEME.colors.textMuted,
        fontSize: 14,
        lineHeight: 20,
    },
    metaText: {
        color: THEME.colors.textMuted,
        fontSize: 12,
        flexShrink: 1,
    },
    metaEmphasis: {
        color: THEME.colors.text,
        fontWeight: '700',
    },

    sectionTitle: {
        color: THEME.colors.primary,
        fontSize: 18,
        fontWeight: '800',
    },
    sectionDivider: {
        height: THEME.borderWidth.default,
        backgroundColor: THEME.colors.primary,
        marginBottom: 4,
    },

    linkText: {
        color: THEME.colors.primary,
        fontSize: 13,
        lineHeight: 18,
        textDecorationLine: 'underline',
        textDecorationColor: THEME.colors.primary,
    },

    newsEmpty: {
        color: THEME.colors.textMuted,
        fontSize: 14,
        lineHeight: 20,
    },

    paragraph: {
        color: THEME.colors.textMuted,
        fontSize: 14,
        lineHeight: 22,
    },

    summaryButton: {
        backgroundColor: THEME.colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: THEME.spacing.buttonHorizontal,
        paddingVertical: THEME.spacing.buttonVertical,
        borderRadius: THEME.borderRadius.rounded,
        marginTop: 4,
    },
    summaryButtonText: {
        color: THEME.colors.onPrimary,
        fontSize: 13,
        fontWeight: '800',
    },

    summaryPanel: {
        backgroundColor: THEME.colors.background,
        borderBottomWidth: THEME.borderWidth.default,
        borderRightWidth: THEME.borderWidth.default,
        borderColor: THEME.colors.border,
        borderRadius: THEME.borderRadius.default,
        padding: THEME.spacing.paddingArticleContainer,
        marginTop: 4,
    },
    summaryText: {
        color: THEME.colors.textMuted,
        fontSize: 14,
        lineHeight: 21,
    },

    nestedCard: {
        backgroundColor: THEME.colors.background,
        borderBottomWidth: THEME.borderWidth.default,
        borderRightWidth: THEME.borderWidth.default,
        borderColor: THEME.colors.border,
        borderRadius: THEME.borderRadius.default,
        padding: 12,
    },
    nestedCardText: {
        color: THEME.colors.textMuted,
        fontSize: 13,
        lineHeight: 20,
    },
    bulletList: {
        gap: THEME.spacing.gap,
    },
});