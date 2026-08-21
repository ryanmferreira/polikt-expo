import Ionicons from '@react-native-vector-icons/ionicons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
    Image,
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
    BUTTON_PADDING,
    COLORS,
    FONT_SIZE,
    SPACING,
} from '../../constants/theme';

export default function CoursesScreen() {
    const [selectedCategory, setSelectedCategory] = useState('VER TODOS');

    const categories = ['VER TODOS', 'GOVERNANÇA', 'ELEITORAL'];

    return (
        /* Safe Area View */
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.background} />

            {/* Scroll Container */}
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                {/* Header Container */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>CURSOS EM ANDAMENTO</Text>
                    <Ionicons name="notifications" size={26} color={COLORS.primary} />
                </View>

                {/* Header Divider */}
                <View style={styles.headerDivider} />

                {/* In Progress Course Card */}
                <View style={styles.card}>
                    {/* Category Tag */}
                    <View style={styles.tag}>
                        <Text style={styles.tagText}>ELEITORAL</Text>
                    </View>

                    {/* Course Title */}
                    <Text style={styles.cardTitle}>VOTO NULO E VOTO BRANCO</Text>

                    {/* Course Description */}
                    <Text style={styles.cardDescription}>
                        Conceitos, Diferenças e Efeitos no Processo Eleitoral Brasileiro
                    </Text>

                    {/* Progress Header */}
                    <View style={styles.progressHeader}>
                        <Text style={styles.progressLabel}>PROGRESSO</Text>
                        <Text style={styles.progressValue}>60%</Text>
                    </View>

                    {/* Progress Bar Track */}
                    <View style={styles.progressBarTrack}>
                        {/* Progress Bar Fill */}
                        <View style={styles.progressBarFill} />
                    </View>

                    {/* Action Button Container */}
                    <View style={styles.actionContainer}>
                        {/* Resume Button */}
                        <TouchableOpacity
                            style={styles.resumeButton}
                            activeOpacity={0.8}
                            // O botão de retomada abre a tela de progresso do curso.
                            // A rota /courseprogress corresponde ao arquivo src/app/courseprogress.tsx.
                            onPress={() => router.push('/courseprogress')}
                            accessibilityRole="button"
                            accessibilityLabel="Retomar curso Voto Nulo e Voto Branco"
                        >
                            <Text style={styles.buttonText}>RETOMAR CURSO</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Section Header */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>EXPLORAR</Text>
                    <View style={styles.sectionDivider} />
                </View>

                {/* Filter Categories Row */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.categoriesRow}
                >
                    {categories.map((category) => (
                        /* Category Filter Button */
                        <TouchableOpacity
                            key={category}
                            style={[
                                styles.chipButton,
                                selectedCategory === category ? styles.activeChip : styles.inactiveChip,
                            ]}
                            onPress={() => setSelectedCategory(category)}
                            activeOpacity={0.8}
                        >
                            <Text
                                style={[
                                    styles.chipText,
                                    selectedCategory === category
                                        ? styles.activeChipText
                                        : styles.inactiveChipText,
                                ]}
                            >
                                {category}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Course Item Card */}
                <View style={styles.card}>
                    {/* Course Image */}
                    <Image
                        source={{
                            uri: 'https://www.camara.leg.br/midias/image/2022/08/ilustra-eleicao-voto-branco.jpg',
                        }}
                        style={styles.cardImage}
                    />

                    {/* Course Title */}
                    <Text style={styles.cardTitle}>VOTO NULO E VOTO BRANCO</Text>

                    {/* Course Description */}
                    <Text style={styles.cardDescription}>
                        Conceitos, Diferenças e Efeitos no Processo Eleitoral Brasileiro
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContainer: {
        padding: SPACING.default,
        gap: SPACING.default,
        paddingBottom: 100,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: FONT_SIZE.lg,
        fontWeight: 'bold',
        color: COLORS.primary,
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
    tag: {
        alignSelf: 'flex-start',
        backgroundColor: COLORS.secondary,
        paddingHorizontal: BUTTON_PADDING.horizontal,
        paddingVertical: BUTTON_PADDING.vertical,
        borderRadius: BORDER_RADIUS.max,
    },
    tagText: {
        color: '#000000',
        fontSize: FONT_SIZE.xs,
        fontWeight: 'bold',
    },
    cardTitle: {
        fontSize: FONT_SIZE.md,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
    },
    cardDescription: {
        fontSize: FONT_SIZE.sm,
        color: COLORS.textSecondary,
    },
    progressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: SPACING.xs,
    },
    progressLabel: {
        fontSize: FONT_SIZE.xs,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
    },
    progressValue: {
        fontSize: FONT_SIZE.xs,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
    },
    progressBarTrack: {
        height: 12,
        backgroundColor: '#FFFFFF',
        borderRadius: BORDER_RADIUS.default,
        overflow: 'hidden',
    },
    progressBarFill: {
        width: '60%',
        height: '100%',
        backgroundColor: COLORS.secondary,
        borderRadius: BORDER_RADIUS.default,
    },
    actionContainer: {
        alignItems: 'flex-end',
        marginTop: SPACING.xs,
    },
    resumeButton: {
        backgroundColor: COLORS.primary,
        borderRadius: BORDER_RADIUS.default,
        paddingHorizontal: BUTTON_PADDING.horizontal,
        paddingVertical: BUTTON_PADDING.vertical,
    },
    buttonText: {
        color: '#000000',
        fontSize: FONT_SIZE.xs,
        fontWeight: 'bold',
    },
    sectionHeader: {
        gap: SPACING.xs,
    },
    sectionTitle: {
        fontSize: FONT_SIZE.md,
        fontWeight: 'bold',
        color: COLORS.primary,
    },
    sectionDivider: {
        height: BORDER_WIDTH.thick,
        backgroundColor: COLORS.primary,
    },
    categoriesRow: {
        gap: SPACING.sm,
    },
    chipButton: {
        borderRadius: BORDER_RADIUS.max,
        paddingHorizontal: BUTTON_PADDING.horizontal,
        paddingVertical: BUTTON_PADDING.vertical,
    },
    activeChip: {
        backgroundColor: COLORS.secondary,
    },
    inactiveChip: {
        backgroundColor: COLORS.containerBackground,
        borderWidth: BORDER_WIDTH.thin,
        borderColor: COLORS.border,
    },
    chipText: {
        fontSize: FONT_SIZE.xs,
        fontWeight: 'bold',
    },
    activeChipText: {
        color: '#000000',
    },
    inactiveChipText: {
        color: COLORS.secondary,
    },
    cardImage: {
        width: '100%',
        height: 160,
        borderRadius: BORDER_RADIUS.default,
    },
});