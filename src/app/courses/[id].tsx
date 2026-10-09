import { Check, ChevronLeft, ChevronRight, Share2 } from 'lucide-react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Markdown from 'react-native-markdown-display';

import { THEME } from '../../constants/theme';
import { Course, CourseModule, ModuleContent } from '../../models/course';
import { getCourseById, getCourseModules, getModuleContents } from '../../services/courses';

import { markdownStyles } from '@/styles/markdownStyles';
import { coursesStyles } from '../../styles/courseStyles';
import { responsiveStyles, WIDE_LAYOUT_BREAKPOINT } from '../../styles/responsiveStyles';

export default function CourseDetailScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    const { width } = useWindowDimensions();
    const useWideLayout = width >= WIDE_LAYOUT_BREAKPOINT;

    const [course, setCourse] = useState<Course | null>(null);
    const [steps, setSteps] = useState<CourseModule[]>([]);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const [contents, setContents] = useState<ModuleContent[]>([]);
    const [loadingContents, setLoadingContents] = useState(false);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const courseId = Array.isArray(id) ? id[0] : id;

    // 1. Carrega as informações do curso e lista de módulos
    useEffect(() => {
        if (courseId) {
            loadCourse();
        }
    }, [courseId]);

    async function loadCourse() {
        try {
            setLoading(true);
            setError(null);

            setCurrentStepIndex(0);

            const courseData = await getCourseById(courseId);
            const stepsData = await getCourseModules(courseId);

            setCourse(courseData);
            setSteps(stepsData);
        } catch {
            setCourse(null);
            setSteps([]);
            setError('Não foi possível carregar este curso.');
        } finally {
            setLoading(false);
        }
    }

    // 2. Procura os conteúdos da aula atual quando o módulo muda
    const currentStep = steps[currentStepIndex];

    useEffect(() => {
        if (courseId && currentStep?.id) {
            setLoadingContents(true);
            getModuleContents(courseId, currentStep.id)
                .then(setContents)
                .catch(() => setContents([]))
                .finally(() => setLoadingContents(false));
        } else {
            setContents([]);
        }
    }, [courseId, currentStepIndex, currentStep?.id]);

    const handleBack = () => {
        if (router.canGoBack()) {
            router.back();
        } else {
            router.replace('/(tabs)/courses');
        }
    };

    function handleNextStep() {
        if (currentStepIndex < steps.length - 1) {
            setCurrentStepIndex(currentStepIndex + 1);
        }
    }

    function handlePreviousStep() {
        if (currentStepIndex > 0) {
            setCurrentStepIndex(currentStepIndex - 1);
        }
    }

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

    const progressRatio = steps.length > 1 ? currentStepIndex / (steps.length - 1) : 1;
    const isFirstStep = currentStepIndex === 0;
    const isLastStep = steps.length > 0 && currentStepIndex === steps.length - 1;

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
                <View style={coursesStyles.mainCard}>

                        <View style={coursesStyles.tagRow}>
                            <View style={coursesStyles.tag}>
                                <Text style={coursesStyles.tagText}>CURSO</Text>
                            </View>
                        </View>

                        <Text style={coursesStyles.mainTitle}>{course.title}</Text>

                        {course.coverImage && (
                            <Image source={{ uri: course.coverImage }} style={coursesStyles.detailImage} />
                        )}

                        <Text style={coursesStyles.leadText}>{course.description}</Text>
                    </View>
                </View>

                {/* Steps / Lessons */}
                <View style={[
                    coursesStyles.cardSection,
                    coursesStyles.guideStepsPanel,
                    useWideLayout && responsiveStyles.guideStepsDesktop,
                ]}>
                    <Text style={coursesStyles.sectionTitle}>
                        AULAS DO CURSO{steps.length > 0 ? ` (${currentStepIndex + 1} / ${steps.length})` : ''}
                    </Text>
                    <View style={coursesStyles.sectionDivider} />

                    {loadingContents ? (
                        <ActivityIndicator size="small" color={THEME.colors.primary} style={{ paddingVertical: 20 }} />
                    ) : currentStep ? (
                        contents.length > 0 ? (
                            <View style={coursesStyles.stepCards}>
                                {contents.map((item) => (
                                    <View key={item.id} style={coursesStyles.stepCard}>
                                        {item.coverImage && (
                                            <Image source={{ uri: item.coverImage }} style={{ width: '100%', height: 160, borderRadius: 8, marginBottom: 12 }} />
                                        )}
                                        <Markdown style={markdownStyles}>
                                            {item.content ? item.content.trim() : ''}
                                        </Markdown>
                                    </View>
                                ))}
                            </View>
                        ) : (
                            <View style={coursesStyles.stepCard}>
                                <Text style={{ color: THEME.colors.text }}>{currentStep.description || 'Sem conteúdo disponível para esta aula.'}</Text>
                            </View>
                        )
                    ) : (
                        <Text style={coursesStyles.stepEmpty}>Este curso ainda não possui aulas cadastradas.</Text>
                    )}

                    {steps.length > 0 && (
                        <>
                            <View style={coursesStyles.progressHeader}>
                                <Text style={coursesStyles.progressHeaderText}>AULA {currentStepIndex + 1}</Text>
                                <Text style={coursesStyles.progressHeaderText}>{steps.length} AULAS</Text>
                            </View>

                            <View style={coursesStyles.progressTrack}>
                                <View style={[coursesStyles.progressFill, { width: `${progressRatio * 100}%` }]} />
                            </View>

                            <View style={coursesStyles.buttonsRow}>
                                <TouchableOpacity
                                    style={[
                                        coursesStyles.nextButton,
                                        isFirstStep && { opacity: 0.25 },
                                    ]}
                                    activeOpacity={0.8}
                                    onPress={handlePreviousStep}
                                    disabled={isFirstStep}>
                                    <ChevronLeft size={16} color={THEME.colors.onPrimary} />
                                    <Text style={coursesStyles.nextButtonText}>ANTERIOR</Text>
                                </TouchableOpacity>

                                {!isLastStep ? (
                                    <TouchableOpacity
                                        style={coursesStyles.nextButton}
                                        activeOpacity={0.8}
                                        onPress={handleNextStep}>
                                        <Text style={coursesStyles.nextButtonText}>PRÓXIMO</Text>
                                        <ChevronRight size={16} color={THEME.colors.onPrimary} />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity
                                        style={[coursesStyles.nextButton, { backgroundColor: THEME.colors.success }]}
                                        activeOpacity={0.8}
                                        onPress={handleBack}>
                                        <Text style={coursesStyles.nextButtonText}>CONCLUIR</Text>
                                        <Check size={16} color={THEME.colors.onPrimary} />
                                    </TouchableOpacity>
                                )}
                            </View>
                        </>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}