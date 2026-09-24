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
import { THEME } from '../constants/theme';

/* Defines the possible statuses for each step in the trail. */
type TrailStatus = 'completo' | 'atual' | 'trancado';

/* Defines the props for each trail item component. */
type TrailItemProps = {
    title: string;
    status: TrailStatus;
    last?: boolean;
};

/* Component responsible for the top bar of the course progress screen. */
function CourseProgressTopBar() {
    return (
        <View style={styles.topBar}>
            {/* Button to navigate back to the courses screen. */}
            <TouchableOpacity
                onPress={() => router.push('/(tabs)/courses')}
                activeOpacity={0.8}
            >
                <Text style={styles.topAction}>← VOLTAR</Text>
            </TouchableOpacity>

            {/* Button to share the course. */}
            <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.topAction}>COMPARTILHAR</Text>
            </TouchableOpacity>
        </View>
    );
}

/* Component responsible for the title and divider of the screen. */
function CourseProgressHeading() {
    return (
        <View style={styles.headingBlock}>
            {/* Main title of the course. */}
            <Text style={styles.pageTitle}>VOTO NULO E VOTO BRANCO</Text>

            {/* Visual divider following the pattern of the rest of the application. */}
            <View style={styles.headingDivider} />
        </View>
    );
}

/* Component responsible for the summary and progress of the course. */
function CourseProgressSummary() {
    return (
        <View style={styles.summaryCard}>
            {/* Short description of the content. */}
            <Text style={styles.description}>
                Conceitos, Diferenças e Efeitos no{`\n`}Processo Eleitoral Brasileiro
            </Text>

            {/* Line showing the current progress. */}
            <View style={styles.progressHeader}>
                <Text style={styles.progressLabel}>PROGRESSO</Text>
                <Text style={styles.progressValue}>60%</Text>
            </View>

            {/* Bar showing the current progress. */}
            <View style={styles.progressTrack}>
                <View style={styles.progressFill} />
            </View>
        </View>
    );
}

/* Component responsible for the title of the trail section. */
function TrailSectionHeader() {
    return (
        <View style={styles.sectionHeader}>
            {/* Title of the section. */}
            <Text style={styles.sectionTitle}>TRILHAS</Text>

            {/* Divider of the section. */}
            <View style={styles.sectionDivider} />
        </View>
    );
}

/* Component responsible for each step in the trail. */
function TrailItem({ title, status, last = false }: TrailItemProps) {
    /* Identifies the state of the step visually. */
    const isCompleted = status === 'completo';
    const isCurrent = status === 'atual';
    const isLocked = status === 'trancado';

    /* Selects the appropriate icon based on the step's state. */
    const iconName = isCompleted
        ? 'checkmark'
        : isCurrent
            ? 'play'
            : 'lock-closed';

    /* Defines the color of the icon based on the step's state. */
    const iconColor = isCompleted
        ? THEME.colors.primary
        : isCurrent
            ? THEME.colors.textPrimary
            : THEME.colors.border;

    return (
        <View style={styles.trailItem}>
            {/* Vertical line connecting this step to the next. */}
            {!last && <View style={styles.timelineLine} />}

            {/* Visual area of the step. Steps continue without creating new routes. */}
            <TouchableOpacity
                style={styles.trailNodeArea}
                activeOpacity={isCurrent || isCompleted ? 0.8 : 1}
                disabled={isLocked}
            >
                {/* Circle representing the state of the step. */}
                <View
                    style={[
                        styles.trailCircle,
                        isCompleted && styles.completedCircle,
                        isCurrent && styles.currentCircle,
                        isLocked && styles.lockedCircle,
                    ]}
                >
                    {/* Icon corresponding to the current state. */}
                    <Ionicons
                        name={iconName}
                        size={isCurrent ? 16 : 15}
                        color={iconColor}
                    />
                </View>

                {/* Text box for the step. */}
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

/* Component responsible for the list of steps in the course. */
function CourseTrail() {
    /* Static data already presented by the progress screen. */
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
            {/* Each item in the list is rendered in a separate call to the component. */}
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

/* Component responsible for the main progress screen of the course. */
export default function CourseProgressScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Maintains the StatusBar pattern used in other screens. */}
            <StatusBar
                barStyle="light-content"
                backgroundColor={THEME.colors.background}
            />

            {/* Allows scrolling on smaller screens. */}
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Each block of the screen is separated into its own component. */}
                <CourseProgressTopBar />
                <CourseProgressHeading />
                <CourseProgressSummary />
                <TrailSectionHeader />
                <CourseTrail />
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: THEME.colors.background,
    },
    scrollContent: {
        padding: THEME.spacing.default,
        gap: THEME.spacing.default,
        paddingBottom: 100,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topAction: {
        color: THEME.colors.primary,
        fontSize: THEME.fontSizes.xs,
        fontWeight: 'bold',
    },
    headingBlock: {
        gap: THEME.spacing.xs,
    },
    pageTitle: {
        color: THEME.colors.primary,
        fontSize: THEME.fontSizes.md,
        fontWeight: 'bold',
    },
    headingDivider: {
        height: THEME.borderSizes.thick,
        backgroundColor: THEME.colors.primary,
    },
    summaryCard: {
        backgroundColor: THEME.colors.containerBackground,
        borderRadius: THEME.borderRadius.default,
        borderColor: THEME.colors.border,
        borderWidth: THEME.borderSizes.thin,
        padding: THEME.spacing.default,
        gap: THEME.spacing.sm,
    },
    description: {
        color: THEME.colors.textPrimary,
        fontSize: THEME.fontSizes.xs,
        lineHeight: THEME.fontSizes.sm,
    },
    progressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: THEME.spacing.xs,
    },
    progressLabel: {
        color: THEME.colors.primary,
        fontSize: THEME.fontSizes.xs,
        fontWeight: 'bold',
    },
    progressValue: {
        color: THEME.colors.primary,
        fontSize: THEME.fontSizes.xs,
        fontWeight: 'bold',
    },
    progressTrack: {
        height: 8,
        backgroundColor: THEME.colors.textPrimary,
        borderRadius: THEME.borderRadius.max,
        overflow: 'hidden',
    },
    progressFill: {
        width: '60%',
        height: '100%',
        backgroundColor: THEME.colors.primary,
        borderRadius: THEME.borderRadius.max,
    },
    sectionHeader: {
        gap: THEME.spacing.xs,
    },
    sectionTitle: {
        color: THEME.colors.primary,
        fontSize: THEME.fontSizes.sm,
        fontWeight: 'bold',
    },
    sectionDivider: {
        height: THEME.borderSizes.thick,
        backgroundColor: THEME.colors.primary,
    },
    timeline: {
        paddingVertical: THEME.spacing.sm,
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
        borderRadius: THEME.borderRadius.max,
        backgroundColor: THEME.colors.secondary,
    },
    trailNodeArea: {
        minHeight: 48,
        flexDirection: 'row',
        alignItems: 'center',
    },
    trailCircle: {
        width: 32,
        height: 32,
        borderRadius: THEME.borderRadius.max,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: THEME.spacing.sm,
        flexShrink: 0,
    },
    completedCircle: {
        backgroundColor: THEME.colors.background,
        borderWidth: THEME.borderSizes.thin,
        borderColor: THEME.colors.primary,
    },
    currentCircle: {
        backgroundColor: THEME.colors.primary,
        borderWidth: THEME.borderSizes.thin,
        borderColor: THEME.colors.primary,
    },
    lockedCircle: {
        backgroundColor: THEME.colors.containerBackground,
        borderWidth: THEME.borderSizes.thin,
        borderColor: THEME.colors.border,
    },
    trailLabelBox: {
        flex: 1,
        minHeight: 28,
        justifyContent: 'center',
        marginLeft: THEME.spacing.sm,
        paddingHorizontal: THEME.spacing.sm,
        paddingVertical: THEME.spacing.xs,
        backgroundColor: THEME.colors.containerBackground,
        borderRadius: THEME.borderRadius.default,
        borderWidth: THEME.borderSizes.thin,
        borderColor: THEME.colors.border,
    },
    trailTitle: {
        color: THEME.colors.textPrimary,
        fontSize: THEME.fontSizes.xs,
        fontWeight: 'bold',
    },
    lockedTitle: {
        color: THEME.colors.secondary,
        fontSize: THEME.fontSizes.xs,
        fontWeight: 'bold',
    },
});