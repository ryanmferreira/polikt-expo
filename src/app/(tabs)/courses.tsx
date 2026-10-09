import { useRouter } from 'expo-router';
import { Bell, BookOpen, RefreshCw, Settings2 } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Platform, ScrollView, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { THEME } from '../../constants/theme';
import { Course } from '../../models/course';
import { getCourseModules, getCourses } from '../../services/courses';

import { coursesStyles } from '../../styles/courseStyles';
import { RESPONSIVE_BREAKPOINT, responsiveStyles } from '../../styles/responsiveStyles';

export default function CoursesScreen() {
    const router = useRouter();
    const { width } = useWindowDimensions();
    const useGrid = Platform.OS === 'web' && width >= RESPONSIVE_BREAKPOINT;
    const [courses, setCourses] = useState<Course[]>([]);
    const [modulesCount, setModulesCount] = useState<Record<number, number>>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadCourses();
    }, []);

    async function loadCourses() {
        try {
            setLoading(true);
            setError(null);
            const data = await getCourses();
            setCourses(data);

            const counts: Record<number, number> = {};
            await Promise.all(
                data.map(async (course) => {
                    try {
                        const modules = await getCourseModules(course.id);
                        counts[course.id] = modules.length;
                    } catch {
                        counts[course.id] = 0;
                    }
                }),
            );
            setModulesCount(counts);
        } catch (e) {
            setError('Não foi possível carregar os cursos.');
        } finally {
            setLoading(false);
        }
    }

    if (error) {
        return (
            <SafeAreaView style={[coursesStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text style={{ color: THEME.colors.text, marginBottom: 12 }}>{error}</Text>
                <TouchableOpacity onPress={loadCourses}>
                    <Text style={{ color: THEME.colors.primary }}>Tentar novamente</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={coursesStyles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{ paddingBottom: 100 }, responsiveStyles.pageContent]}>

                {/* Header - Courses in progress */}
                <View style={coursesStyles.headerRow}>
                    <Text style={coursesStyles.headerTitle}>CURSOS EM ANDAMENTO</Text>

                    {/* Notifications icon */}
                    <TouchableOpacity activeOpacity={0.7}>
                        <Bell size={26} color={THEME.colors.primary} />
                    </TouchableOpacity>
                </View>

                <View style={coursesStyles.mainDivider} />

                {/* Progress card */}
                <View style={coursesStyles.progressCard}>

                    {/* // TODO: Implement tags */}
                    <View style={coursesStyles.tag}>
                        <Text style={coursesStyles.tagText}>ELEITORAL</Text>
                    </View>

                    {/* Title */}
                    <Text style={coursesStyles.courseTitle}>VOTO NULO E VOTO BRANCO</Text>

                    <Text style={coursesStyles.courseDesc}>
                        Conceitos, Diferenças e Efeitos no Processo Eleitoral Brasileiro
                    </Text>

                    {/* Progress bar */}
                    <View>
                        <View style={coursesStyles.progressRow}>
                            <Text style={coursesStyles.progressLabel}>PROGRESSO</Text>
                            <Text style={coursesStyles.progressValue}>60%</Text>
                        </View>

                        <View style={coursesStyles.progressTrack}>
                            <View style={[coursesStyles.progressFill, { width: '60%' }]} />
                        </View>
                    </View>

                    {/* Action button */}
                    <TouchableOpacity style={coursesStyles.actionButton} activeOpacity={0.8}>
                        <Text style={coursesStyles.actionButtonText}>RETOMAR CURSO</Text>
                    </TouchableOpacity>
                </View>

                {/* Explore section */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={coursesStyles.headerTitle}>EXPLORAR</Text>
                    <Settings2 size={22} color={THEME.colors.primary} style={{ marginBottom: 8 }} />
                </View>

                <View style={coursesStyles.mainDivider} />

                {/* Filters */}
                <View style={coursesStyles.tagsContainer}>
                    <TouchableOpacity style={coursesStyles.tag} activeOpacity={0.8}>
                        <Text style={coursesStyles.tagText}>VER TODOS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={coursesStyles.tag} activeOpacity={0.8}>
                        <Text style={coursesStyles.tagText}>GOVERNANÇA</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={coursesStyles.tag} activeOpacity={0.8}>
                        <Text style={coursesStyles.tagText}>ELEITORAL</Text>
                    </TouchableOpacity>
                </View>

                {/* Refresh button */}
                {!loading && (
                    <TouchableOpacity activeOpacity={0.7} onPress={loadCourses} style={coursesStyles.refreshButton}>
                        <RefreshCw color={THEME.colors.primary} size={16} />
                        <Text style={coursesStyles.refreshButtonText}>Atualizar</Text>
                    </TouchableOpacity>
                )}

                {loading && (
                    <View style={{ paddingVertical: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator size="large" color={THEME.colors.primary} style={{ marginTop: 20 }} />
                        <Text style={{ marginTop: 8, fontSize: 12, color: THEME.colors.text }}>Carregando cursos...</Text>
                    </View>
                )}

                {/* Courses list */}
                <View style={useGrid && responsiveStyles.grid}>
                    {courses.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            activeOpacity={0.8}
                            accessibilityRole="button"
                            accessibilityLabel={`Abrir curso: ${item.title}`}
                            onPress={() => router.push(`/courses/${item.id}`)}
                            style={[
                                coursesStyles.exploreCard,
                                useGrid && responsiveStyles.gridCard,
                            ]}>

                            {item.coverImage ? (
                                <Image
                                    source={{ uri: item.coverImage }}
                                    style={coursesStyles.exploreCardImage}
                                    resizeMode="cover"
                                />
                            ) : (
                                <View style={coursesStyles.exploreCardImagePlaceholder}>
                                    <BookOpen size={38} color={THEME.colors.primary} />
                                </View>
                            )}

                            <View style={coursesStyles.exploreCardContent}>
                                <Text style={coursesStyles.exploreCourseTitle} numberOfLines={2}>
                                    {item.title}
                                </Text>

                                <Text style={coursesStyles.courseDesc} numberOfLines={2}>
                                    {item.description}
                                </Text>

                                <View style={coursesStyles.cardDivider} />

                                <View style={coursesStyles.exploreFooter}>
                                    <Text style={coursesStyles.exploreFooterInfo}>
                                        {modulesCount[item.id] ?? 0} Módulos
                                    </Text>

                                    {/* Visual button only: the whole card handles the navigation */}
                                    <View style={coursesStyles.actionButton}>
                                        <Text style={coursesStyles.actionButtonText}>INICIAR CURSO</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
