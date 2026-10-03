import { StyleSheet } from 'react-native';
import { THEME } from '../constants/theme';

export const RESPONSIVE_BREAKPOINT = 768;
export const WIDE_LAYOUT_BREAKPOINT = 1024;

export const responsiveStyles = StyleSheet.create({
    pageContent: {
        width: '100%',
        maxWidth: 720,
        alignSelf: 'center',
    },
    readingContent: {
        width: '100%',
        maxWidth: 720,
        alignSelf: 'center',
    },
    formContent: {
        width: '100%',
        maxWidth: 520,
        alignSelf: 'center',
    },
    topBarContent: {
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    detailTopBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: THEME.spacing.paddingStandard,
        paddingVertical: 12,
        borderBottomWidth: THEME.borderWidth.default,
        borderBottomColor: THEME.colors.primary,
        backgroundColor: THEME.colors.background,
    },
    detailTopBarAction: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    detailTopBarText: {
        color: THEME.colors.primary,
        fontSize: 13,
        fontWeight: '800',
    },
    guideDetailContent: {
        width: '100%',
        alignSelf: 'stretch',
    },
    guideDetailColumns: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        gap: 16,
    },
    guideOverviewDesktop: {
        width: '38%',
        flexShrink: 0,
        gap: 16,
    },
    guideStepsDesktop: {
        flex: 1,
        minWidth: 0,
        minHeight: 0,
    },
    guideStepContentDesktop: {
        flex: 1,
        minHeight: 0,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: 16,
    },
    gridCard: {
        width: '48%',
        marginBottom: 0,
    },
    guideGridCard: {
        width: '48%',
        flexDirection: 'column',
        marginBottom: 0,
    },
    guideGridImage: {
        width: '100%',
        height: 180,
        minHeight: 180,
    },
});
