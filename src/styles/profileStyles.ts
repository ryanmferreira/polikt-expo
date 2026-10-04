import { StyleSheet } from 'react-native';
import { THEME } from '../constants/theme';

export const profileStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.colors.background,
        paddingTop: THEME.spacing.paddingPageTop,
        paddingHorizontal: THEME.spacing.paddingStandard,
    },

    avatarPlaceholder: {
        height: 96,
        aspectRatio: 1,
        borderRadius: THEME.borderRadius.rounded,
        backgroundColor: THEME.colors.surfaceAlt,
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 0,
    },
    avatarText: {
        color: THEME.colors.primary,
        fontSize: 20,
        fontWeight: '800',
        textAlign: 'center',
    },

    text: {
        color: THEME.colors.text,
        fontSize: 13,
        fontWeight: '600',
    },

    whoami: {
        flexDirection: 'row',
        gap: 18,
        alignItems: 'center',
        paddingVertical: 4,
    },

    whoamiCard: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: THEME.colors.tag,
        borderWidth: THEME.borderWidth.default,
        borderColor: THEME.colors.border,
        borderRadius: THEME.borderRadius.rounded,
    },

    useRole: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
    roleText: {
        color: THEME.colors.textMuted,
        fontSize: 13,
        fontWeight: '700',
    },

    whoamiContainer: {
        flex: 1,
        minWidth: 0,
        alignItems: 'flex-start',
    },
    profileDivider: {
        width: '100%',
        height: THEME.borderWidth.default,
        backgroundColor: THEME.colors.primary,
        marginVertical: 8,
    },

    card: {
        backgroundColor: THEME.colors.surface,
        borderTopWidth: THEME.borderWidth.default,
        borderLeftWidth: THEME.borderWidth.default,
        borderColor: THEME.colors.border,
        borderRadius: THEME.borderRadius.default,
        padding: THEME.spacing.paddingStandard,
    },

    filterRow: {
        flexDirection: "row",
        gap: 6,
        padding: 5,
        backgroundColor: THEME.colors.surface,
        borderRadius: THEME.borderRadius.default,
        borderTopWidth: THEME.borderWidth.default,
        borderLeftWidth: THEME.borderWidth.default,
        borderColor: THEME.colors.border,
    },
    filterButtonActive: {
        flex: 1,
        flexDirection: 'row',
        gap: 8,
        backgroundColor: THEME.colors.primary,
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderBottomWidth: THEME.borderWidth.default,
        borderColor: THEME.colors.text,
        borderRadius: THEME.borderRadius.default,
        alignItems: "center",
        justifyContent: "center",
    },
    filterButtonInactive: {
        flex: 1,
        flexDirection: 'row',
        gap: 8,
        paddingHorizontal: 8,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    filterTextActive: {
        color: THEME.colors.onPrimary,
        fontSize: 12,
        fontWeight: "800",
    },
    filterTextInactive: {
        color: THEME.colors.primary,
        fontSize: 12,
        fontWeight: "800",
    },

    sectionHeading: {
        color: THEME.colors.primary,
        fontSize: 13,
        fontWeight: '800',
        letterSpacing: 0.6,
    },
    sectionHint: {
        color: THEME.colors.textMuted,
        fontSize: 12,
        lineHeight: 18,
    },

    notificationCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: THEME.colors.surface,
        borderTopWidth: THEME.borderWidth.default,
        borderLeftWidth: THEME.borderWidth.default,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderColor: THEME.colors.border,
        borderRadius: THEME.borderRadius.default,
        paddingHorizontal: THEME.spacing.buttonHorizontal,
        paddingVertical: THEME.spacing.buttonVertical,
        gap: 12,
    },
    notificationDescription: {
        flex: 1,
        gap: 3,
    },

    fieldGroup: {
        gap: 6,
    },
    fieldLabelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7,
    },
    label: {
        color: THEME.colors.textMuted,
        fontSize: 12,
        fontWeight: '700',
    },
    input: {
        backgroundColor: THEME.colors.field,
        borderRadius: THEME.borderRadius.rounded,
        borderWidth: THEME.borderWidth.default,
        borderColor: THEME.colors.border,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 14,
        color: THEME.colors.text,
    },
    formCard: {
        gap: 16,
    },
    accountHeading: {
        color: THEME.colors.primary,
        fontSize: 14,
        fontWeight: '800',
        letterSpacing: 0.5,
    },
    accountDescription: {
        color: THEME.colors.textMuted,
        fontSize: 12,
        lineHeight: 18,
        marginTop: -10,
    },

    cardDivider: {
        height: THEME.borderWidth.default,
        backgroundColor: THEME.colors.border,
        marginVertical: 4,
    },

    actionContainer: {
        flexDirection: 'row',
        gap: 12,
    },

    // Button
    defaultButton: {
        flex: 1,
        minHeight: 46,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 8,
        backgroundColor: THEME.colors.primary,
        borderRadius: THEME.borderRadius.rounded,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },

    buttonExit: {
        backgroundColor: THEME.colors.danger,
    },

    buttonSettings: {
        backgroundColor: THEME.colors.surfaceAlt,
        borderBottomWidth: THEME.borderWidth.default,
        borderRightWidth: THEME.borderWidth.default,
        borderColor: THEME.colors.border,
    },

    buttonTextExit: {
        color: THEME.colors.onPrimary,
        fontWeight: 'bold',
        fontSize: 12,
    },
    buttonTextSettings: {
        color: THEME.colors.text,
        fontWeight: 'bold',
        fontSize: 12,
    },
});