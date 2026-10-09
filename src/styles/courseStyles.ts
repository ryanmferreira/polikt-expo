import { StyleSheet } from 'react-native';
import { THEME } from '../constants/theme';

export const coursesStyles = StyleSheet.create({
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

    progressCard: {
        backgroundColor: THEME.colors.surface,
        borderTopWidth: THEME.borderWidth.default,
        borderLeftWidth: THEME.borderWidth.default,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderColor: THEME.colors.border,
        borderRadius: THEME.borderRadius.default,
        padding: THEME.spacing.paddingArticleContainer,
        gap: 16,
        marginBottom: 32,
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
        alignSelf: 'flex-start',
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

    courseTitle: {
        color: THEME.colors.text,
        fontSize: 18,
        fontWeight: '800',
    },
    courseDesc: {
        color: THEME.colors.text,
        fontSize: 14,
        lineHeight: 20,
    },

    progressRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 6,
    },
    progressLabel: {
        color: THEME.colors.primary,
        fontSize: 12,
        fontWeight: '800',
    },
    progressValue: {
        color: THEME.colors.primary,
        fontSize: 12,
        fontWeight: '800',
    },

    actionButton: {
        backgroundColor: THEME.colors.primary,
        paddingHorizontal: THEME.spacing.buttonHorizontal,
        paddingVertical: THEME.spacing.buttonVertical,
        borderRadius: THEME.borderRadius.rounded,
        alignSelf: 'flex-end',
        marginTop: 8,
    },
    actionButtonText: {
        color: THEME.colors.onPrimary,
        fontSize: 12,
        fontWeight: '800',
    },

    exploreCard: {
        backgroundColor: THEME.colors.surface,
        borderTopWidth: THEME.borderWidth.default,
        borderLeftWidth: THEME.borderWidth.default,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderColor: THEME.colors.border,
        borderRadius: THEME.borderRadius.default,
        marginBottom: 24,
        overflow: 'hidden',
    },
    exploreCardImage: {
        width: '100%',
        height: 180,
    },
    exploreCardImagePlaceholder: {
        width: '100%',
        height: 180,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: THEME.colors.surfaceAlt,
    },
    exploreCardContent: {
        padding: THEME.spacing.paddingArticleContainer,
        gap: 12,
    },
    exploreCourseTitle: {
        color: THEME.colors.primary,
        fontSize: 18,
        fontWeight: '800',
    },

    cardDivider: {
        height: THEME.borderWidth.default,
        backgroundColor: THEME.colors.border,
        marginVertical: 4,
    },

    exploreFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    exploreFooterInfo: {
        color: THEME.colors.text,
        fontSize: 13,
        fontWeight: '600',
    },

    timeline: {
        width: '100%',
    },
    timelineItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        paddingVertical: 10,
    },
    timelineLine: {
        position: 'absolute',
        left: 26,
        top: 38,
        bottom: 38,
        width: 4,
        backgroundColor: THEME.colors.border,
    },
    timelineTitle: {
        flex: 1,
        color: THEME.colors.text,
        fontSize: 15,
        fontWeight: '700',
        lineHeight: 20,
    },
    playButton: {
        width: 56,
        height: 56,
        borderRadius: 28,
        backgroundColor: THEME.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },

    refreshButton: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: THEME.spacing.gap,
        gap: 6,
    },
    refreshButtonText: {
        color: THEME.colors.primary,
        fontSize: 13,
        fontWeight: '600',
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

    nextButton: {
        backgroundColor: THEME.colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 8,
        paddingVertical: THEME.spacing.buttonVertical,
        borderRadius: THEME.borderRadius.rounded,
        marginTop: 4,
        flex: 1,
        gap: 4,
    },
    nextButtonText: {
        color: THEME.colors.onPrimary,
        fontSize: 13,
        fontWeight: '800',
    },
});
