import { StyleSheet } from 'react-native';
import { THEME } from '../constants/theme';

export const articleStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.colors.background,
    },

    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: THEME.spacing.paddingStandard,
        paddingVertical: 12,
        borderBottomWidth: THEME.borderWidth.default,
        borderBottomColor: THEME.colors.primary,
        backgroundColor: THEME.colors.background,
    },
    topBarText: {
        color: THEME.colors.primary,
        fontSize: 13,
        fontWeight: '800',
    },

    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: THEME.spacing.gap,
    },

    scrollContent: {
        paddingHorizontal: THEME.spacing.paddingStandard,
        paddingVertical: 16,
        gap: THEME.spacing.gap,
        paddingBottom: 100,
    },

    mainCard: {
        backgroundColor: THEME.colors.container,
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
        backgroundColor: THEME.colors.container,
        borderTopWidth: THEME.borderWidth.default,
        borderLeftWidth: THEME.borderWidth.default,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderColor: THEME.colors.border,
        borderRadius: THEME.borderRadius.default,
        padding: THEME.spacing.paddingArticleContainer,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardSection: {
        backgroundColor: THEME.colors.container,
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
        gap: THEME.spacing.gap,
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

    mainTitle: {
        color: THEME.colors.white,
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
        color: THEME.colors.contrast,
        fontSize: 14,
        lineHeight: 20,
    },
    metaText: {
        color: THEME.colors.contrast,
        fontSize: 12,
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

    paragraph: {
        color: THEME.colors.contrast,
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
        borderRadius: THEME.borderRadius.default,
        marginTop: 4,
    },
    summaryButtonText: {
        color: THEME.colors.black,
        fontSize: 13,
        fontWeight: '800',
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
        color: THEME.colors.contrast,
        fontSize: 13,
        lineHeight: 20,
    },
    bulletList: {
        gap: THEME.spacing.gap,
    },
});