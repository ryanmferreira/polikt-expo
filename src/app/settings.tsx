import Ionicons from '@react-native-vector-icons/ionicons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {
    BORDER_RADIUS,
    BORDER_WIDTH,
    COLORS,
    FONT_SIZE,
    SPACING,
} from '../constants/theme';

/*
 * Representa uma categoria de notificação.
 * O tipo mantém os nomes das categorias centralizados e evita strings soltas.
 */
type NotificationCategory = {
    id: string;
    title: string;
    description: string;
    icon: 'newspaper-outline' | 'book-outline';
};

/*
 * Opções disponíveis para o tamanho de fonte.
 * São três valores fixos, conforme solicitado para a acessibilidade.
 */
type FontSizeOption = 'small' | 'medium' | 'large';

/*
 * Categorias de notícias disponíveis para o usuário controlar individualmente.
 */
const NEWS_CATEGORIES: NotificationCategory[] = [
    {
        id: 'news-general',
        title: 'Notícias gerais',
        description: 'Receber as principais notícias publicadas',
        icon: 'newspaper-outline',
    },
    {
        id: 'news-politics',
        title: 'Política',
        description: 'Receber notícias e atualizações sobre política',
        icon: 'newspaper-outline',
    },
    {
        id: 'news-education',
        title: 'Educação',
        description: 'Receber notícias relacionadas à educação',
        icon: 'newspaper-outline',
    },
];

/*
 * Categorias de cursos disponíveis para o usuário controlar individualmente.
 */
const COURSE_CATEGORIES: NotificationCategory[] = [
    {
        id: 'courses-new',
        title: 'Novos cursos',
        description: 'Avisar quando novos cursos forem disponibilizados',
        icon: 'book-outline',
    },
    {
        id: 'courses-updates',
        title: 'Atualizações de cursos',
        description: 'Avisar quando um curso receber novos conteúdos',
        icon: 'book-outline',
    },
    {
        id: 'courses-progress',
        title: 'Progresso dos cursos',
        description: 'Receber avisos relacionados ao seu progresso',
        icon: 'book-outline',
    },
];

/* Cabeçalho da tela de configurações. */
function SettingsHeader() {
    return (
        <View style={styles.header}>
            {/* Retorna para a tela de perfil que abriu as configurações. */}
            <TouchableOpacity
                onPress={() => router.push('/(tabs)/profile')}
                activeOpacity={0.8}
            >
                <Text style={styles.backText}>← VOLTAR</Text>
            </TouchableOpacity>

            {/* Título principal da tela. */}
            <Text style={styles.headerTitle}>CONFIGURAÇÕES</Text>

            {/* Divisor seguindo o padrão visual existente na aplicação. */}
            <View style={styles.headerDivider} />
        </View>
    );
}

/*
 * Componente visual para o cabeçalho de uma configuração.
 * Ele permite manter o mesmo padrão de linha, ícone, título e descrição.
 */
type SettingRowProps = {
    title: string;
    description: string;
    icon: 'notifications-outline' | 'accessibility-outline' | 'contrast-outline';
    onPress?: () => void;
    trailing?: React.ReactNode;
};

function SettingRow({
    title,
    description,
    icon,
    onPress,
    trailing,
}: SettingRowProps) {
    return (
        <TouchableOpacity
            style={styles.option}
            onPress={onPress}
            activeOpacity={0.8}
            disabled={!onPress}
        >
            {/* Ícone da configuração. */}
            <View style={styles.iconContainer}>
                <Ionicons
                    name={icon}
                    size={22}
                    color={COLORS.primary}
                />
            </View>

            {/* Título e descrição da configuração. */}
            <View style={styles.optionTextContainer}>
                <Text style={styles.optionTitle}>{title}</Text>
                <Text style={styles.optionDescription}>{description}</Text>
            </View>

            {/* Área reservada para seta, estado ou outro controle. */}
            {trailing}
        </TouchableOpacity>
    );
}

/*
 * Controle visual de estado.
 * A aplicação já utiliza TouchableOpacity e View, então o estado é representado
 * sem introduzir um componente ou biblioteca externa.
 */
type ToggleIndicatorProps = {
    enabled: boolean;
};

function ToggleIndicator({ enabled }: ToggleIndicatorProps) {
    return (
        <View
            style={[
                styles.statusIndicator,
                enabled && styles.statusIndicatorEnabled,
            ]}
        >
            <View
                style={[
                    styles.statusDot,
                    enabled && styles.statusDotEnabled,
                ]}
            />
        </View>
    );
}

/*
 * Linha individual de categoria de notificação.
 * Cada categoria possui seu próprio estado e pode ser ativada/desativada.
 */
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
            onPress={onPress}
            activeOpacity={0.8}
        >
            {/* Ícone que diferencia visualmente notícias e cursos. */}
            <Ionicons
                name={category.icon}
                size={18}
                color={COLORS.secondary}
            />

            {/* Conteúdo textual da categoria. */}
            <View style={styles.categoryTextContainer}>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <Text style={styles.categoryDescription}>
                    {category.description}
                </Text>
            </View>

            {/* Estado individual da categoria. */}
            <ToggleIndicator enabled={enabled} />
        </TouchableOpacity>
    );
}

/*
 * Grupo expandível das notificações.
 * A linha principal controla apenas a expansão; as categorias possuem estados
 * independentes para que o usuário possa escolher exatamente o que deseja receber.
 */
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
            {/* Linha principal clicável para abrir ou fechar as categorias. */}
            <SettingRow
                title="Notificações"
                description="Escolha quais notícias e cursos deseja acompanhar"
                icon="notifications-outline"
                onPress={onToggleExpanded}
                trailing={
                    <Ionicons
                        name={expanded ? 'chevron-up-outline' : 'chevron-down-outline'}
                        size={20}
                        color={COLORS.textSecondary}
                    />
                }
            />

            {/* Conteúdo expandido da configuração. */}
            {expanded && (
                <View style={styles.notificationPanel}>
                    {/* Subtítulo do grupo de notícias. */}
                    <Text style={styles.categoryGroupTitle}>NOTÍCIAS</Text>

                    {/* Categorias de notícias com estado independente. */}
                    {NEWS_CATEGORIES.map((category) => (
                        <NotificationCategoryRow
                            key={category.id}
                            category={category}
                            enabled={enabledCategories[category.id]}
                            onPress={() => onToggleCategory(category.id)}
                        />
                    ))}

                    {/* Subtítulo do grupo de cursos. */}
                    <Text style={styles.categoryGroupTitle}>CURSOS</Text>

                    {/* Categorias de cursos com estado independente. */}
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

/*
 * Opção de tamanho de fonte.
 * Funciona como um seletor de três estados, permitindo apenas uma opção ativa.
 */
type FontSizeSelectorProps = {
    selected: FontSizeOption;
    onSelect: (value: FontSizeOption) => void;
};

function FontSizeSelector({ selected, onSelect }: FontSizeSelectorProps) {
    const options: Array<{ value: FontSizeOption; label: string }> = [
        { value: 'small', label: 'Pequeno' },
        { value: 'medium', label: 'Médio' },
        { value: 'large', label: 'Grande' },
    ];

    return (
        <View style={styles.fontSizeSelector}>
            {/* Cada botão representa exatamente um dos três tamanhos permitidos. */}
            {options.map((option) => {
                const isSelected = selected === option.value;

                return (
                    <TouchableOpacity
                        key={option.value}
                        style={[
                            styles.fontSizeOption,
                            isSelected && styles.fontSizeOptionSelected,
                        ]}
                        onPress={() => onSelect(option.value)}
                        activeOpacity={0.8}
                    >
                        <Text
                            style={[
                                styles.fontSizeOptionText,
                                isSelected && styles.fontSizeOptionTextSelected,
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

/* Tela de configurações. */
export default function SettingsScreen() {
    /* Controla somente a abertura visual do grupo de notificações. */
    const [notificationsExpanded, setNotificationsExpanded] = useState(false);

    /*
     * Mantém o estado individual de cada categoria de notificação.
     * Todas começam habilitadas para preservar o comportamento padrão da tela anterior.
     */
    const [enabledCategories, setEnabledCategories] = useState<Record<string, boolean>>({
        'news-general': true,
        'news-politics': true,
        'news-education': true,
        'courses-new': true,
        'courses-updates': true,
        'courses-progress': true,
    });

    /* Estado do tamanho de fonte selecionado. */
    const [fontSize, setFontSize] = useState<FontSizeOption>('medium');

    /* Estado da opção de texto em alto contraste. */
    const [highContrast, setHighContrast] = useState(false);

    /* Alterna somente a categoria de notificação selecionada. */
    const toggleNotificationCategory = (id: string) => {
        setEnabledCategories((current) => ({
            ...current,
            [id]: !current[id],
        }));
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Mantém o padrão de StatusBar utilizado no restante da aplicação. */}
            <StatusBar
                barStyle="light-content"
                backgroundColor={COLORS.background}
            />

            {/* Permite que a tela continue utilizável em telas menores. */}
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Cabeçalho. */}
                <SettingsHeader />

                {/* Grupo de notificações e acessibilidade. */}
                <View style={styles.card}>
                    {/* Título do primeiro grupo. */}
                    <Text style={styles.cardTitle}>PREFERÊNCIAS</Text>

                    {/* Notificações: clicando na linha, as categorias são expandidas. */}
                    <NotificationsSection
                        expanded={notificationsExpanded}
                        onToggleExpanded={() =>
                            setNotificationsExpanded((value) => !value)
                        }
                        enabledCategories={enabledCategories}
                        onToggleCategory={toggleNotificationCategory}
                    />

                    {/* Divisor entre notificações e acessibilidade. */}
                    <View style={styles.optionDivider} />

                    {/* Título do grupo de acessibilidade. */}
                    <Text style={styles.cardTitle}>ACESSIBILIDADE</Text>

                    {/* Ajuste de tamanho de fonte. */}
                    <SettingRow
                        title="Tamanho da fonte"
                        description="Escolha o tamanho dos textos exibidos no aplicativo"
                        icon="accessibility-outline"
                    />

                    {/* Seletor com pequeno, médio e grande. */}
                    <FontSizeSelector
                        selected={fontSize}
                        onSelect={setFontSize}
                    />

                    {/* Divisor entre tamanho da fonte e alto contraste. */}
                    <View style={styles.optionDivider} />

                    {/* Texto em alto contraste. */}
                    <SettingRow
                        title="Texto em alto contraste"
                        description="Aumentar o contraste dos textos para facilitar a leitura"
                        icon="contrast-outline"
                        onPress={() => setHighContrast((value) => !value)}
                        trailing={<ToggleIndicator enabled={highContrast} />}
                    />
                </View>

                {/* Explicação curta sobre o comportamento das configurações. */}
                <View style={styles.infoCard}>
                    <Ionicons
                        name="information-circle-outline"
                        size={20}
                        color={COLORS.secondary}
                    />
                    <Text style={styles.infoText}>
                        As preferências selecionadas ficam disponíveis nesta tela durante a sessão atual do aplicativo.
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

/* Estilos construídos somente com as constantes já existentes no projeto. */
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        padding: SPACING.default,
        gap: SPACING.default,
        paddingBottom: 100,
    },
    header: {
        gap: SPACING.xs,
    },
    backText: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.xs,
        fontWeight: 'bold',
        marginBottom: SPACING.sm,
    },
    headerTitle: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.lg,
        fontWeight: 'bold',
    },
    headerDivider: {
        height: BORDER_WIDTH.thick,
        backgroundColor: COLORS.primary,
    },
    card: {
        backgroundColor: COLORS.containerBackground,
        borderRadius: BORDER_RADIUS.default,
        borderColor: COLORS.border,
        borderWidth: BORDER_WIDTH.thin,
        padding: SPACING.default,
        gap: SPACING.sm,
    },
    cardTitle: {
        color: COLORS.textPrimary,
        fontSize: FONT_SIZE.md,
        fontWeight: 'bold',
        marginBottom: SPACING.sm,
    },
    option: {
        minHeight: 64,
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.sm,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: BORDER_RADIUS.default,
        backgroundColor: COLORS.background,
        borderWidth: BORDER_WIDTH.thin,
        borderColor: COLORS.border,
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionTextContainer: {
        flex: 1,
        gap: SPACING.xs,
    },
    optionTitle: {
        color: COLORS.textPrimary,
        fontSize: FONT_SIZE.sm,
        fontWeight: 'bold',
    },
    optionDescription: {
        color: COLORS.textSecondary,
        fontSize: FONT_SIZE.xs,
        lineHeight: FONT_SIZE.sm,
    },
    statusIndicator: {
        width: 42,
        height: 24,
        borderRadius: BORDER_RADIUS.max,
        backgroundColor: COLORS.background,
        borderWidth: BORDER_WIDTH.thin,
        borderColor: COLORS.border,
        justifyContent: 'center',
        paddingHorizontal: 3,
    },
    statusIndicatorEnabled: {
        borderColor: COLORS.primary,
    },
    statusDot: {
        width: 16,
        height: 16,
        borderRadius: BORDER_RADIUS.max,
        backgroundColor: COLORS.border,
    },
    statusDotEnabled: {
        backgroundColor: COLORS.primary,
        alignSelf: 'flex-end',
    },
    optionDivider: {
        height: BORDER_WIDTH.thin,
        backgroundColor: COLORS.border,
    },
    notificationPanel: {
        marginTop: SPACING.xs,
        paddingLeft: 48,
        gap: SPACING.xs,
    },
    categoryGroupTitle: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.xs,
        fontWeight: 'bold',
        marginTop: SPACING.sm,
        marginBottom: SPACING.xs,
    },
    categoryRow: {
        minHeight: 56,
        flexDirection: 'row',
        alignItems: 'center',
        gap: SPACING.sm,
        paddingVertical: SPACING.xs,
    },
    categoryTextContainer: {
        flex: 1,
        gap: SPACING.xs,
    },
    categoryTitle: {
        color: COLORS.textPrimary,
        fontSize: FONT_SIZE.sm,
        fontWeight: 'bold',
    },
    categoryDescription: {
        color: COLORS.textSecondary,
        fontSize: FONT_SIZE.xs,
        lineHeight: FONT_SIZE.sm,
    },
    fontSizeSelector: {
        flexDirection: 'row',
        gap: SPACING.xs,
        marginTop: SPACING.xs,
    },
    fontSizeOption: {
        flex: 1,
        minHeight: 42,
        borderRadius: BORDER_RADIUS.default,
        borderWidth: BORDER_WIDTH.thin,
        borderColor: COLORS.border,
        backgroundColor: COLORS.background,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SPACING.sm,
    },
    fontSizeOptionSelected: {
        borderColor: COLORS.primary,
        backgroundColor: COLORS.primary,
    },
    fontSizeOptionText: {
        color: COLORS.textSecondary,
        fontSize: FONT_SIZE.xs,
        fontWeight: 'bold',
    },
    fontSizeOptionTextSelected: {
        color: COLORS.textPrimary,
    },
    infoCard: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: SPACING.sm,
        backgroundColor: COLORS.containerBackground,
        borderRadius: BORDER_RADIUS.default,
        borderWidth: BORDER_WIDTH.thin,
        borderColor: COLORS.border,
        padding: SPACING.default,
    },
    infoText: {
        flex: 1,
        color: COLORS.textSecondary,
        fontSize: FONT_SIZE.xs,
        lineHeight: FONT_SIZE.sm,
    },
});
