import { useLocalSearchParams, useRouter } from 'expo-router';

import { ChevronLeft, Play, Share2 } from 'lucide-react-native';

import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { THEME } from '../../constants/theme';
import { Course, CourseModule } from '../../models/course';
import { getCourseById, getCourseModules } from '../../services/courses';

import { coursesStyles } from '../../styles/courseStyles';
import { responsiveStyles, WIDE_LAYOUT_BREAKPOINT } from '../../styles/responsiveStyles';

export default function CourseDetailScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    const { width } = useWindowDimensions();
    const useWideLayout = width >= WIDE_LAYOUT_BREAKPOINT;

    const [course, setCourse] = useState<Course | null>(null);
    const [modules, setModules] = useState<CourseModule[]>([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const courseId = Array.isArray(id) ? id[0] : id;

    useEffect(() => {
        if (courseId) {
            loadCourse();
        }
    }, [courseId]);

    async function loadCourse() {
        try {
            setLoading(true);
            setError(null);

            const courseData = await getCourseById(courseId);
            const modulesData = await getCourseModules(courseId);

            setCourse(courseData);
            setModules(modulesData);
        } catch {
            setCourse(null);
            setModules([]);
            setError('Não foi possível carregar este curso.');
        } finally {
            setLoading(false);
        }
    }

    const handleBack = () => {
        if (router.canGoBack()) {
            router.back();
        } else {
            router.replace('/(tabs)/courses');
        }
    };

    if (loading) {
        return (
            <SafeAreaView style={[coursesStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color={THEME.colors.primary} />
            </SafeAreaView>
        );
    }

    if (!course) {
        return (
            <SafeAreaView style={[coursesStyles.detailContainer, { justifyContent: 'center', alignItems: 'center', padding: THEME.spacing.paddingStandard }]}>
                <Text style={coursesStyles.stepEmpty}>{error ?? 'Curso não encontrado.'}</Text>
                {courseId && (
                    <TouchableOpacity onPress={() => handleBack()} activeOpacity={0.7}>
                        <Text style={coursesStyles.linkText}>Voltar para o catálogo</Text>
                    </TouchableOpacity>
                )}
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={coursesStyles.detailContainer}>

            {/* Top bar */}
            <View style={responsiveStyles.detailTopBar}>
                <View style={responsiveStyles.topBarContent}>
                    <TouchableOpacity style={responsiveStyles.detailTopBarAction} onPress={handleBack} activeOpacity={0.7}>
                        <ChevronLeft size={20} color={THEME.colors.primary} />
                        <Text style={responsiveStyles.detailTopBarText}>VOLTAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={responsiveStyles.detailTopBarAction} activeOpacity={0.7}>
                        <Share2 size={18} color={THEME.colors.primary} />
                        <Text style={responsiveStyles.detailTopBarText}>COMPARTILHAR</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Main content */}
            <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    coursesStyles.scrollContent,
                    responsiveStyles.guideDetailContent,
                    { flexGrow: 1 },
                    useWideLayout && responsiveStyles.guideDetailColumns,
                ]}>

                {/* Course overview */}
                <View style={[coursesStyles.detailOverview, useWideLayout && responsiveStyles.guideOverviewDesktop]}>

                    {/* Course info card */}
                    <View style={coursesStyles.mainCard}>

                        <View style={coursesStyles.tagRow}>
                            <View style={coursesStyles.tag}>
                                <Text style={coursesStyles.tagText}>CURSO</Text>
                            </View>
                        </View>

                        <Text style={coursesStyles.mainTitle}>{course.title}</Text>

                        {course.coverImage ? (
                            <Image source={{ uri: course.coverImage }} style={coursesStyles.detailImage} />
                        ) : null}

                        <Text style={coursesStyles.leadText}>{course.description}</Text>

                        {/* Progress bar */}
                        <View>
                            <View style={coursesStyles.progressRow}>
                                <Text style={coursesStyles.progressLabel}>PROGRESSO</Text>
                                {/* // TODO: Load real progress */}
                                <Text style={coursesStyles.progressValue}>0%</Text>
                            </View>

                            <View style={coursesStyles.progressTrack}>
                                <View style={[coursesStyles.progressFill, { width: '0%' }]} />
                            </View>
                        </View>
                    </View>
                </View>

                {/* Tracks */}
                <View style={[coursesStyles.guideStepsPanel, useWideLayout && responsiveStyles.guideStepsDesktop]}>
                    <Text style={coursesStyles.headerTitle}>TRILHAS</Text>
                    <View style={coursesStyles.mainDivider} />

                    {modules.length > 0 ? (
                        <View style={coursesStyles.timeline}>

                            {/* Vertical line */}
                            <View style={coursesStyles.timelineLine} />

                            {modules.map((module) => (
                                <View key={module.id} style={coursesStyles.timelineItem}>

                                    {/* Play button */}
                                    <TouchableOpacity
                                        style={coursesStyles.playButton}
                                        activeOpacity={0.8}
                                        accessibilityRole="button"
                                        accessibilityLabel={`Abrir módulo: ${module.title}`}
                                        onPress={() => router.push(`/courses/${courseId}/modules/${module.id}`)}>
                                        <Play size={24} color={THEME.colors.onPrimary} />
                                    </TouchableOpacity>

                                    {/* Module title */}
                                    <Text style={coursesStyles.timelineTitle} numberOfLines={2}>
                                        {module.title}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    ) : (
                        <Text style={coursesStyles.stepEmpty}>Este curso ainda não possui módulos cadastrados.</Text>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
