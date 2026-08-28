import Ionicons from '@react-native-vector-icons/ionicons';

import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { THEME } from '../constants/theme';

// Category type for notification settings.
type NotificationCategory = {
    id: string;
    title: string;
    description: string;
    icon: 'newspaper-outline' | 'school-outline';
};

// Options for font size.
type FontSizeOption = 'small' | 'medium' | 'large';

const NEWS_CATEGORIES: NotificationCategory[] = [
    {
        id: 'news-general',
        title: 'Notícias gerais',
        description: 'Atualizações gerais do Polikt',
        icon: 'newspaper-outline',
    },
    {
        id: 'news-politics',
        title: 'Política',
        description: 'Notícias relacionadas à política',
        icon: 'newspaper-outline',
    },
    {
        id: 'news-education',
        title: 'Educação',
        description: 'Notícias relacionadas à educação',
        icon: 'newspaper-outline',
    },
];

const COURSE_CATEGORIES: NotificationCategory[] = [
    {
        id: 'courses-new',
        title: 'Novos cursos',
        description: 'Avisos sobre novos cursos disponíveis',
        icon: 'school-outline',
    },
    {
        id: 'courses-updates',
        title: 'Atualizações de cursos',
        description: 'Avisos quando conteúdos forem atualizados',
        icon: 'school-outline',
    },
    {
        id: 'courses-progress',
        title: 'Progresso dos cursos',
        description: 'Avisos relacionados ao seu progresso',
        icon: 'school-outline',
    },
];

// Header for the settings screen.
function SettingsHeader() {
    return (
        <View style={styles.header}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => router.push('../profile')}
            >
                <Text style={styles.backText}>← VOLTAR</Text>
            </TouchableOpacity>

            <Text style={styles.title}>CONFIGURAÇÕES</Text>
            <View style={styles.divider} />
        </View>
    );
}

// Row component for each setting.
type SettingRowProps = {
    title: string;
    description: string;
    icon: 'notifications-outline' | 'accessibility-outline';
    onPress?: () => void;
    trailing: React.ReactNode;
};

function SettingRow({ title, description, icon, onPress, trailing }: SettingRowProps) {
    return (
        <TouchableOpacity
            style={styles.settingRow}
            activeOpacity={0.8}
            onPress={onPress}
            disabled={!onPress}
        >
            <View style={styles.settingIcon}>
                <Ionicons name={icon} size={22} color={THEME.colors.primary} />
            </View>

            <View style={styles.settingText}>
                <Text style={styles.settingTitle}>{title}</Text>
                <Text style={styles.settingDescription}>{description}</Text>
            </View>

            {trailing}
        </TouchableOpacity>
    );
}

// Visual indicator for the toggle switch.
function ToggleIndicator({ enabled }: { enabled: boolean }) {
    return (
        <View style={[styles.toggle, enabled && styles.toggleEnabled]}>
            <View style={[styles.toggleDot, enabled && styles.toggleDotEnabled]} />
        </View>
    );
}

// Row component for each notification category. Each category has its own state.
type NotificationCategoryRowProps = {
    category: NotificationCategory;
    enabled: boolean;
    onPress: () => void;
};

function NotificationCategoryRow({
    category,
    enabled,
    onPress,
}: NotificationCategoryRowProps) {
    return (
        <TouchableOpacity
            style={styles.categoryRow}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <Ionicons name={category.icon} size={18} color={THEME.colors.primary} />

            <View style={styles.categoryText}>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <Text style={styles.categoryDescription}>{category.description}</Text>
            </View>

            <ToggleIndicator enabled={enabled} />
        </TouchableOpacity>
    );
}

// Component for the notifications section content that appears only when expanded.
type NotificationsSectionProps = {
    expanded: boolean;
    onToggleExpanded: () => void;
    enabledCategories: Record<string, boolean>;
    onToggleCategory: (id: string) => void;
};

function NotificationsSection({
    expanded,
    onToggleExpanded,
    enabledCategories,
    onToggleCategory,
}: NotificationsSectionProps) {
    return (
        <View>
            <SettingRow
                title="Notificações"
                description="Escolha quais notícias e cursos deseja acompanhar"
                icon="notifications-outline"
                onPress={onToggleExpanded}
                trailing={(
                    <Ionicons
                        name={expanded ? 'chevron-up-outline' : 'chevron-down-outline'}
                        size={20}
                        color={THEME.colors.contrast}
                    />
                )}
            />

            {expanded && (
                <View style={styles.notificationPanel}>
                    <Text style={styles.groupTitle}>NOTÍCIAS</Text>
                    {NEWS_CATEGORIES.map((category) => (
                        <NotificationCategoryRow
                            key={category.id}
                            category={category}
                            enabled={enabledCategories[category.id]}
                            onPress={() => onToggleCategory(category.id)}
                        />
                    ))}

                    <Text style={styles.groupTitle}>CURSOS</Text>
                    {COURSE_CATEGORIES.map((category) => (
                        <NotificationCategoryRow
                            key={category.id}
                            category={category}
                            enabled={enabledCategories[category.id]}
                            onPress={() => onToggleCategory(category.id)}
                        />
                    ))}
                </View>
            )}
        </View>
    );
}

// Font size selector component.
type FontSizeSelectorProps = {
    selected: FontSizeOption;
    onSelect: (value: FontSizeOption) => void;
};

function FontSizeSelector({ selected, onSelect }: FontSizeSelectorProps) {
    const options: Array<{ value: FontSizeOption; label: string }> = [
        { value: 'small', label: 'PEQUENO' },
        { value: 'medium', label: 'MÉDIO' },
        { value: 'large', label: 'GRANDE' },
    ];

    return (
        <View style={styles.fontSelector}>
            {options.map((option) => {
                const selectedOption = option.value === selected;

                return (
                    <TouchableOpacity
                        key={option.value}
                        style={[
                            styles.fontOption,
                            selectedOption && styles.fontOptionSelected,
                        ]}
                        activeOpacity={0.8}
                        onPress={() => onSelect(option.value)}
                    >
                        <Text
                            style={[
                                styles.fontOptionText,
                                selectedOption && styles.fontOptionTextSelected,
                            ]}
                        >
                            {option.label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

// High contrast option component.
function HighContrastOption({ enabled, onPress }: { enabled: boolean; onPress: () => void }) {
    return (
        <TouchableOpacity
            style={styles.accessibilityRow}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <View style={styles.settingIcon}>
                <Ionicons name="contrast-outline" size={22} color={THEME.colors.primary} />
            </View>

            <View style={styles.settingText}>
                <Text style={styles.settingTitle}>Texto em alto contraste</Text>
                <Text style={styles.settingDescription}>
                    Aumenta a diferença visual entre texto e fundo
                </Text>
            </View>

            <ToggleIndicator enabled={enabled} />
        </TouchableOpacity>
    );
}

// Settings screen component.
export default function SettingsScreen() {
    const [notificationsExpanded, setNotificationsExpanded] = useState(false);

    const [enabledCategories, setEnabledCategories] = useState<Record<string, boolean>>({
        'news-general': true,
        'news-politics': true,
        'news-education': true,
        'courses-new': true,
        'courses-updates': true,
        'courses-progress': true,
    });

    const [fontSize, setFontSize] = useState<FontSizeOption>('medium');
    const [highContrast, setHighContrast] = useState(false);

    // Alterna somente a categoria tocada.
    const handleToggleCategory = (id: string) => {
        setEnabledCategories((current) => ({
            ...current,
            [id]: !current[id],
        }));
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                <SettingsHeader />

                {/* Notifications section. */}
                <View style={styles.card}>
                    <NotificationsSection
                        expanded={notificationsExpanded}
                        onToggleExpanded={() => setNotificationsExpanded((value) => !value)}
                        enabledCategories={enabledCategories}
                        onToggleCategory={handleToggleCategory}
                    />
                </View>

                {/* Accessibility group replaces Study Reminders. */}
                <View style={styles.card}>
                    <View style={styles.accessibilityHeading}>
                        <Ionicons
                            name="accessibility-outline"
                            size={22}
                            color={THEME.colors.primary}
                        />
                        <View style={styles.settingText}>
                            <Text style={styles.settingTitle}>Acessibilidade</Text>
                            <Text style={styles.settingDescription}>
                                Ajustes para melhorar a leitura e a compreensão
                            </Text>
                        </View>
                    </View>

                    {/* Font size option. */}
                    <View style={styles.accessibilityBlock}>
                        <Text style={styles.subTitle}>TAMANHO DA FONTE</Text>
                        <FontSizeSelector selected={fontSize} onSelect={setFontSize} />
                    </View>

                    {/* High contrast option. */}
                    <HighContrastOption
                        enabled={highContrast}
                        onPress={() => setHighContrast((value) => !value)}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = {
    container: {
        flex: 1,
        backgroundColor: THEME.colors.background,
        paddingTop: THEME.spacing.paddingPageTop,
        paddingHorizontal: THEME.spacing.paddingStandard,
    },
    content: {
        paddingBottom: 100,
        gap: THEME.spacing.gap,
    },
    header: {
        gap: 10,
    },
    backText: {
        color: THEME.colors.primary,
        fontSize: 10,
        fontWeight: '800' as const,
    },
    title: {
        color: THEME.colors.primary,
        fontSize: 22,
        fontWeight: '800' as const,
    },
    divider: {
        height: THEME.borderWidth.default,
        backgroundColor: THEME.colors.primary,
        width: '100%' as const,
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
        gap: 18,
    },
    settingRow: {
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
        gap: 12,
    },
    settingIcon: {
        width: 38,
        height: 38,
        borderRadius: THEME.borderRadius.default,
        backgroundColor: THEME.colors.background,
        alignItems: 'center' as const,
        justifyContent: 'center' as const,
    },
    settingText: {
        flex: 1,
        gap: 3,
    },
    settingTitle: {
        color: THEME.colors.primary,
        fontSize: 15,
        fontWeight: '800' as const,
    },
    settingDescription: {
        color: THEME.colors.contrast,
        fontSize: 12,
        lineHeight: 17,
    },
    toggle: {
        width: 38,
        height: 22,
        borderRadius: 20,
        borderWidth: THEME.borderWidth.default,
        borderColor: THEME.colors.border,
        justifyContent: 'center' as const,
        paddingHorizontal: 3,
    },
    toggleEnabled: {
        borderColor: THEME.colors.primary,
        backgroundColor: THEME.colors.primary,
    },
    toggleDot: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: THEME.colors.contrast,
    },
    toggleDotEnabled: {
        backgroundColor: THEME.colors.black,
        alignSelf: 'flex-end' as const,
    },
    notificationPanel: {
        marginTop: 16,
        marginLeft: 50,
        gap: 10,
    },
    groupTitle: {
        color: THEME.colors.primary,
        fontSize: 11,
        fontWeight: '800' as const,
        marginTop: 4,
    },
    categoryRow: {
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
        gap: 10,
        paddingVertical: 7,
    },
    categoryText: {
        flex: 1,
        gap: 2,
    },
    categoryTitle: {
        color: THEME.colors.white,
        fontSize: 13,
        fontWeight: '700' as const,
    },
    categoryDescription: {
        color: THEME.colors.contrast,
        fontSize: 11,
        lineHeight: 15,
    },
    accessibilityHeading: {
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
        gap: 12,
    },
    accessibilityBlock: {
        gap: 10,
    },
    subTitle: {
        color: THEME.colors.primary,
        fontSize: 11,
        fontWeight: '800' as const,
    },
    fontSelector: {
        flexDirection: 'row' as const,
        gap: 8,
    },
    fontOption: {
        flex: 1,
        borderWidth: THEME.borderWidth.default,
        borderColor: THEME.colors.primary,
        borderRadius: THEME.borderRadius.default,
        paddingVertical: THEME.spacing.buttonVertical,
        alignItems: 'center' as const,
        justifyContent: 'center' as const,
    },
    fontOptionSelected: {
        backgroundColor: THEME.colors.primary,
    },
    fontOptionText: {
        color: THEME.colors.primary,
        fontSize: 11,
        fontWeight: '800' as const,
    },
    fontOptionTextSelected: {
        color: THEME.colors.black,
    },
    accessibilityRow: {
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
        gap: 12,
    },
} as const;
