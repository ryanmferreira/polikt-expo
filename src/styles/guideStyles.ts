import { StyleSheet } from 'react-native';
import { THEME } from '../constants/theme';

export const guidesStyles = StyleSheet.create({
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
        fontSize: 22,
        fontWeight: '800',
        color: THEME.colors.primary,
    },

    mainDivider: {
        height: THEME.borderWidth.default,
        backgroundColor: THEME.colors.primary,
        width: '100%',
        marginBottom: 24,
    },

    infoBox: {
        backgroundColor: THEME.colors.surface,
        borderTopWidth: THEME.borderWidth.default,
        borderLeftWidth: THEME.borderWidth.default,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderColor: THEME.colors.border,
        borderRadius: THEME.borderRadius.default,
        padding: THEME.spacing.paddingArticleContainer,
        marginBottom: 24,
    },
    infoHeading: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
    },
    infoTitle: {
        color: THEME.colors.primary,
        fontSize: 12,
        fontWeight: '800',
    },
    infoText: {
        color: THEME.colors.text,
        fontSize: 14,
        lineHeight: 21,
    },

    tagsContainer: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 24,
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
    tagRow: {
        flexDirection: 'row',
        gap: 8,
        flexWrap: 'wrap',
    },

    card: {
        flexDirection: 'row',
        backgroundColor: THEME.colors.surface,
        borderTopWidth: THEME.borderWidth.default,
        borderLeftWidth: THEME.borderWidth.default,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderColor: THEME.colors.border,
        borderRadius: THEME.borderRadius.default,
        marginBottom: 14,
        overflow: 'hidden',
    },
    cardImageWrap: {
        width: '36%',
        minHeight: 146,
        backgroundColor: THEME.colors.surfaceAlt,
        position: 'relative',
        overflow: 'hidden',
    },
    cardImage: {
        width: '100%',
        height: '100%',
    },
    cardImagePlaceholder: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContent: {
        flex: 1,
        justifyContent: 'center',
        padding: 12,
    },
    cardTitle: {
        color: THEME.colors.text,
        fontSize: 15,
        fontWeight: '800',
        lineHeight: 20,
        marginBottom: 5,
    },
    cardDesc: {
        color: THEME.colors.textMuted,
        fontSize: 12,
        lineHeight: 17,
    },
    cardFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: THEME.borderWidth.default,
        borderTopColor: THEME.colors.border,
        marginTop: 8,
        paddingTop: 8,
    },
    cardActionText: {
        color: THEME.colors.primary,
        fontSize: 11,
        fontWeight: '800',
        letterSpacing: 0.7,
    },

    detailContainer: {
        flex: 1,
        backgroundColor: THEME.colors.background,
    },

    scrollContent: {
        paddingHorizontal: THEME.spacing.paddingStandard,
        paddingVertical: 16,
        gap: 16,
    },

    detailOverview: {
        width: '100%',
        gap: 16,
    },
    guideStepsPanel: {
        width: '100%',
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
        gap: 12,
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
        gap: 12,
    },

    mainTitle: {
        color: THEME.colors.text,
        fontSize: 22,
        fontWeight: '800',
        lineHeight: 28,
    },
    detailImage: {
        width: '100%',
        height: 180,
        borderRadius: THEME.borderRadius.default,
        borderBottomWidth: THEME.borderWidth.default,
        borderRightWidth: THEME.borderWidth.default,
        borderColor: THEME.colors.border,
        marginVertical: 4,
    },
    leadText: {
        color: THEME.colors.textMuted,
        fontSize: 14,
        lineHeight: 20,
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

    progressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 4,
    },
    progressHeaderText: {
        color: THEME.colors.primary,
        fontSize: 12,
        fontWeight: '800',
    },
    progressTrack: {
        height: 6,
        backgroundColor: THEME.colors.background,
        borderRadius: THEME.borderRadius.rounded,
        overflow: 'hidden',
        borderWidth: THEME.borderWidth.default,
        borderColor: THEME.colors.border,
    },
    progressFill: {
        height: '100%',
        backgroundColor: THEME.colors.primary,
        borderRadius: THEME.borderRadius.rounded,
    },

    stepCard: {
        backgroundColor: THEME.colors.background,
        borderBottomWidth: THEME.borderWidth.default,
        borderRightWidth: THEME.borderWidth.default,
        borderColor: THEME.colors.border,
        borderRadius: THEME.borderRadius.default,
        padding: 12,
    },
    stepCards: {
        gap: 12,
    },
    stepEmpty: {
        color: THEME.colors.textMuted,
        fontSize: 14,
        lineHeight: 20,
    },

    buttonsRow: {
        flexDirection: 'row',
        gap: 8,
        width: '100%',
    },
    linkText: {
        color: THEME.colors.primary,
        fontSize: 13,
        lineHeight: 18,
        textDecorationLine: 'underline',
        textDecorationColor: THEME.colors.primary,
    },

    refreshButton: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: THEME.spacing.gap,
    },
    refreshButtonText: {
        color: THEME.colors.primary,
        fontSize: 13,
        fontWeight: '600',
    },

    nextButton: {
        backgroundColor: THEME.colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 8,
        paddingVertical: THEME.spacing.buttonVertical,
        borderRadius: THEME.borderRadius.default,
        marginTop: 4,
        flex: 1,
    },
    nextButtonText: {
        color: THEME.colors.onPrimary,
        fontSize: 13,
        fontWeight: '800',
    },
});