import Ionicons from '@react-native-vector-icons/ionicons';
import { router } from 'expo-router';
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

/* Define os estados possíveis de cada etapa da trilha. */
type TrailStatus = 'completo' | 'atual' | 'trancado';

/* Define os dados recebidos por cada componente de etapa. */
type TrailItemProps = {
    title: string;
    status: TrailStatus;
    last?: boolean;
};

/* Componente responsável somente pelo cabeçalho superior da tela. */
function CourseProgressTopBar() {
    return (
        <View style={styles.topBar}>
            {/* Botão que retorna para a tela de cursos. */}
            <TouchableOpacity
                onPress={() => router.push('/(tabs)/courses')}
                activeOpacity={0.8}
            >
                <Text style={styles.topAction}>← VOLTAR</Text>
            </TouchableOpacity>

            {/* Mantém a ação de compartilhamento como elemento visual da tela. */}
            <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.topAction}>COMPARTILHAR</Text>
            </TouchableOpacity>
        </View>
    );
}

/* Componente responsável pelo título e divisor da tela. */
function CourseProgressHeading() {
    return (
        <View style={styles.headingBlock}>
            {/* Título principal do curso. */}
            <Text style={styles.pageTitle}>VOTO NULO E VOTO BRANCO</Text>

            {/* Divisor visual seguindo o padrão do restante da aplicação. */}
            <View style={styles.headingDivider} />
        </View>
    );
}

/* Componente responsável pelo resumo e pelo progresso do curso. */
function CourseProgressSummary() {
    return (
        <View style={styles.summaryCard}>
            {/* Descrição curta do conteúdo. */}
            <Text style={styles.description}>
                Conceitos, Diferenças e Efeitos no{`\n`}Processo Eleitoral Brasileiro
            </Text>

            {/* Linha que identifica o percentual atual do curso. */}
            <View style={styles.progressHeader}>
                <Text style={styles.progressLabel}>PROGRESSO</Text>
                <Text style={styles.progressValue}>60%</Text>
            </View>

            {/* Barra que representa visualmente os 60% concluídos. */}
            <View style={styles.progressTrack}>
                <View style={styles.progressFill} />
            </View>
        </View>
    );
}

/* Componente responsável pelo título da seção de trilhas. */
function TrailSectionHeader() {
    return (
        <View style={styles.sectionHeader}>
            {/* Título da seção. */}
            <Text style={styles.sectionTitle}>TRILHAS</Text>

            {/* Divisor da seção. */}
            <View style={styles.sectionDivider} />
        </View>
    );
}

/* Componente individual de cada etapa da trilha. */
function TrailItem({ title, status, last = false }: TrailItemProps) {
    /* Identifica visualmente o estado da etapa. */
    const isCompleted = status === 'completo';
    const isCurrent = status === 'atual';
    const isLocked = status === 'trancado';

    /* Seleciona o ícone já utilizado pelo projeto. */
    const iconName = isCompleted
        ? 'checkmark'
        : isCurrent
            ? 'play'
            : 'lock-closed';

    /* Define a cor do ícone de acordo com o estado. */
    const iconColor = isCompleted
        ? COLORS.primary
        : isCurrent
            ? COLORS.textPrimary
            : COLORS.border;

    return (
        <View style={styles.trailItem}>
            {/* Linha vertical que conecta esta etapa à próxima. */}
            {!last && <View style={styles.timelineLine} />}

            {/* Área visual da etapa. As etapas continuam sem criar novas rotas. */}
            <TouchableOpacity
                style={styles.trailNodeArea}
                activeOpacity={isCurrent || isCompleted ? 0.8 : 1}
                disabled={isLocked}
            >
                {/* Círculo que representa o estado da etapa. */}
                <View
                    style={[
                        styles.trailCircle,
                        isCompleted && styles.completedCircle,
                        isCurrent && styles.currentCircle,
                        isLocked && styles.lockedCircle,
                    ]}
                >
                    {/* Ícone correspondente ao estado atual. */}
                    <Ionicons
                        name={iconName}
                        size={isCurrent ? 16 : 15}
                        color={iconColor}
                    />
                </View>

                {/* Caixa de texto da etapa. */}
                <View style={styles.trailLabelBox}>
                    <Text
                        style={[
                            styles.trailTitle,
                            isLocked && styles.lockedTitle,
                        ]}
                        numberOfLines={2}
                    >
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

/* Componente que concentra a lista de etapas do curso. */
function CourseTrail() {
    /* Dados estáticos já apresentados pela tela de progresso. */
    const trail: TrailItemProps[] = [
        {
            title: 'O que é voto branco?',
            status: 'completo',
        },
        {
            title: 'O que é voto nulo?',
            status: 'completo',
        },
        {
            title: 'Influência nos resultados',
            status: 'atual',
        },
        {
            title: 'O mito da anulação da eleição pelo voto nulo',
            status: 'trancado',
        },
        {
            title: 'Como funciona na prática?',
            status: 'trancado',
        },
        {
            title: 'Considerações finais',
            status: 'trancado',
            last: true,
        },
    ];

    return (
        <View style={styles.timeline}>
            {/* Cada item da lista é renderizado em uma chamada separada do componente. */}
            {trail.map((item) => (
                <TrailItem
                    key={item.title}
                    title={item.title}
                    status={item.status}
                    last={item.last}
                />
            ))}
        </View>
    );
}

/* Tela principal de progresso do curso. */
export default function CourseProgressScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Mantém o padrão de StatusBar usado nas demais telas. */}
            <StatusBar
                barStyle="light-content"
                backgroundColor={COLORS.background}
            />

            {/* Permite rolagem em telas menores. */}
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Cada bloco da tela fica separado em seu próprio componente. */}
                <CourseProgressTopBar />
                <CourseProgressHeading />
                <CourseProgressSummary />
                <TrailSectionHeader />
                <CourseTrail />
            </ScrollView>
        </SafeAreaView>
    );
}

/* Estilos reutilizados pelos componentes desta tela. */
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
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topAction: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.xs,
        fontWeight: 'bold',
    },
    headingBlock: {
        gap: SPACING.xs,
    },
    pageTitle: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.md,
        fontWeight: 'bold',
    },
    headingDivider: {
        height: BORDER_WIDTH.thick,
        backgroundColor: COLORS.primary,
    },
    summaryCard: {
        backgroundColor: COLORS.containerBackground,
        borderRadius: BORDER_RADIUS.default,
        borderColor: COLORS.border,
        borderWidth: BORDER_WIDTH.thin,
        padding: SPACING.default,
        gap: SPACING.sm,
    },
    description: {
        color: COLORS.textPrimary,
        fontSize: FONT_SIZE.xs,
        lineHeight: FONT_SIZE.sm,
    },
    progressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: SPACING.xs,
    },
    progressLabel: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.xs,
        fontWeight: 'bold',
    },
    progressValue: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.xs,
        fontWeight: 'bold',
    },
    progressTrack: {
        height: 8,
        backgroundColor: COLORS.textPrimary,
        borderRadius: BORDER_RADIUS.max,
        overflow: 'hidden',
    },
    progressFill: {
        width: '60%',
        height: '100%',
        backgroundColor: COLORS.primary,
        borderRadius: BORDER_RADIUS.max,
    },
    sectionHeader: {
        gap: SPACING.xs,
    },
    sectionTitle: {
        color: COLORS.primary,
        fontSize: FONT_SIZE.sm,
        fontWeight: 'bold',
    },
    sectionDivider: {
        height: BORDER_WIDTH.thick,
        backgroundColor: COLORS.primary,
    },
    timeline: {
        paddingVertical: SPACING.sm,
    },
    trailItem: {
        minHeight: 58,
        position: 'relative',
    },
    timelineLine: {
        position: 'absolute',
        left: 31,
        top: 32,
        bottom: 0,
        width: 4,
        borderRadius: BORDER_RADIUS.max,
        backgroundColor: COLORS.secondary,
    },
    trailNodeArea: {
        minHeight: 48,
        flexDirection: 'row',
        alignItems: 'center',
    },
    trailCircle: {
        width: 32,
        height: 32,
        borderRadius: BORDER_RADIUS.max,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: SPACING.sm,
        flexShrink: 0,
    },
    completedCircle: {
        backgroundColor: COLORS.background,
        borderWidth: BORDER_WIDTH.thin,
        borderColor: COLORS.primary,
    },
    currentCircle: {
        backgroundColor: COLORS.primary,
        borderWidth: BORDER_WIDTH.thin,
        borderColor: COLORS.primary,
    },
    lockedCircle: {
        backgroundColor: COLORS.containerBackground,
        borderWidth: BORDER_WIDTH.thin,
        borderColor: COLORS.border,
    },
    trailLabelBox: {
        flex: 1,
        minHeight: 28,
        justifyContent: 'center',
        marginLeft: SPACING.sm,
        paddingHorizontal: SPACING.sm,
        paddingVertical: SPACING.xs,
        backgroundColor: COLORS.containerBackground,
        borderRadius: BORDER_RADIUS.default,
        borderWidth: BORDER_WIDTH.thin,
        borderColor: COLORS.border,
    },
    trailTitle: {
        color: COLORS.textPrimary,
        fontSize: FONT_SIZE.xs,
        fontWeight: 'bold',
    },
    lockedTitle: {
        color: COLORS.textSecondary,
        fontSize: FONT_SIZE.xs,
        fontWeight: 'bold',
    },
});
