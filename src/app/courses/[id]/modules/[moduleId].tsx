import { useLocalSearchParams, useRouter } from 'expo-router';
import { Check, ChevronLeft, ChevronRight, Share2 } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Markdown from 'react-native-markdown-display';
import { SafeAreaView } from 'react-native-safe-area-context';

import { THEME } from '../../../../constants/theme';
import { CourseModule, ModuleContent } from '../../../../models/course';
import { getCourseModule, getModuleContents } from '../../../../services/courses';

import { markdownStyles } from '@/styles/markdownStyles';
import { coursesStyles } from '../../../../styles/courseStyles';
import { responsiveStyles, WIDE_LAYOUT_BREAKPOINT } from '../../../../styles/responsiveStyles';

export default function ModuleContentScreen() {
    const router = useRouter();
    const { id, moduleId } = useLocalSearchParams();

    const { width } = useWindowDimensions();
    const useWideLayout = width >= WIDE_LAYOUT_BREAKPOINT;

    const [module, setModule] = useState<CourseModule | null>(null);
    const [contents, setContents] = useState<ModuleContent[]>([]);
    const [currentContentIndex, setCurrentContentIndex] = useState(0);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const courseId = Array.isArray(id) ? id[0] : id;
    const moduleIdParam = Array.isArray(moduleId) ? moduleId[0] : moduleId;

    useEffect(() => {
        if (courseId && moduleIdParam) {
            loadModule();
        }
    }, [courseId, moduleIdParam]);

    async function loadModule() {
        try {
            setLoading(true);
            setError(null);

            setCurrentContentIndex(0);

            const moduleData = await getCourseModule(courseId, moduleIdParam);
            const contentsData = await getModuleContents(courseId, moduleIdParam);

            setModule(moduleData);
            setContents(contentsData);
        } catch {
            setModule(null);
            setContents([]);
            setError('Não foi possível carregar este módulo.');
        } finally {
            setLoading(false);
        }
    }

    const handleBack = () => {
        if (router.canGoBack()) {
            router.back();
        } else if (courseId) {
            router.replace(`/courses/${courseId}`);
        }
    };

    function handleNextContent() {
        if (currentContentIndex < contents.length - 1) {
            setCurrentContentIndex(currentContentIndex + 1);
        }
    }

    function handlePreviousContent() {
        if (currentContentIndex > 0) {
            setCurrentContentIndex(currentContentIndex - 1);
        }
    }

    if (loading) {
        return (
            <SafeAreaView style={[coursesStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color={THEME.colors.primary} />
            </SafeAreaView>
        );
    }

    if (!module) {
        return (
            <SafeAreaView style={[coursesStyles.detailContainer, { justifyContent: 'center', alignItems: 'center', padding: THEME.spacing.paddingStandard }]}>
                <Text style={coursesStyles.stepEmpty}>{error ?? 'Módulo não encontrado.'}</Text>
                {courseId && (
                    <TouchableOpacity onPress={() => handleBack()} activeOpacity={0.7}>
                        <Text style={coursesStyles.linkText}>Voltar para o curso</Text>
                    </TouchableOpacity>
                )}
            </SafeAreaView>
        );
    }

    const currentContent = contents[currentContentIndex];
    const progressRatio = contents.length > 1 ? currentContentIndex / (contents.length - 1) : 1;
    const isFirstContent = currentContentIndex === 0;
    const isLastContent = contents.length > 0 && currentContentIndex === contents.length - 1;

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

                {/* Module overview */}
                <View style={[coursesStyles.detailOverview, useWideLayout && responsiveStyles.guideOverviewDesktop]}>
                    <View style={coursesStyles.mainCard}>

                        <View style={coursesStyles.tagRow}>
                            <View style={coursesStyles.tag}>
                                <Text style={coursesStyles.tagText}>MÓDULO</Text>
                            </View>
                        </View>

                        <Text style={coursesStyles.mainTitle}>{module.title}</Text>

                        {module.coverImage ? (
                            <Image source={{ uri: module.coverImage }} style={coursesStyles.detailImage} />
                        ) : null}

                        <Text style={coursesStyles.leadText}>{module.description}</Text>
                    </View>
                </View>

                {/* Module content */}
                <View style={[
                    coursesStyles.cardSection,
                    coursesStyles.guideStepsPanel,
                    useWideLayout && responsiveStyles.guideStepsDesktop,
                ]}>
                    <Text style={coursesStyles.sectionTitle}>
                        CONTEÚDO DO MÓDULO{contents.length > 0 ? ` (${currentContentIndex + 1} / ${contents.length})` : ''}
                    </Text>
                    <View style={coursesStyles.sectionDivider} />

                    {currentContent ? (
                        useWideLayout ? (
                            <ScrollView
                                style={responsiveStyles.guideStepContentDesktop}
                                showsVerticalScrollIndicator={false}>
                                <View style={coursesStyles.stepCards}>
                                    {(currentContent.content ?? '').split('---').map((section, index) => (
                                        <View key={`${currentContent.id}-${index}`} style={coursesStyles.stepCard}>
                                            {currentContent.coverImage && index === 0 ? (
                                                <Image
                                                    source={{ uri: currentContent.coverImage }}
                                                    style={{ width: '100%', height: 160, borderRadius: 8, marginBottom: 12 }}
                                                />
                                            ) : null}
                                            <Markdown style={markdownStyles}>
                                                {section.trim()}
                                            </Markdown>
                                        </View>
                                    ))}
                                </View>
                            </ScrollView>
                        ) : (
                            <View style={coursesStyles.stepCards}>
                                {(currentContent.content ?? '').split('---').map((section, index) => (
                                    <View key={`${currentContent.id}-${index}`} style={coursesStyles.stepCard}>
                                        {currentContent.coverImage && index === 0 ? (
                                            <Image
                                                source={{ uri: currentContent.coverImage }}
                                                style={{ width: '100%', height: 160, borderRadius: 8, marginBottom: 12 }}
                                            />
                                        ) : null}
                                        <Markdown style={markdownStyles}>
                                            {section.trim()}
                                        </Markdown>
                                    </View>
                                ))}
                            </View>
                        )
                    ) : (
                        <Text style={coursesStyles.stepEmpty}>Este módulo ainda não possui conteúdo.</Text>
                    )}

                    {contents.length > 0 && (
                        <>
                            <View style={coursesStyles.progressHeader}>
                                <Text style={coursesStyles.progressHeaderText}>CONTEÚDO {currentContentIndex + 1}</Text>
                                <Text style={coursesStyles.progressHeaderText}>{contents.length} CONTEÚDOS</Text>
                            </View>

                            <View style={coursesStyles.progressTrack}>
                                <View style={[coursesStyles.progressFill, { width: `${progressRatio * 100}%` }]} />
                            </View>

                            <View style={coursesStyles.buttonsRow}>
                                <TouchableOpacity
                                    style={[
                                        coursesStyles.nextButton,
                                        isFirstContent && { opacity: 0.25 },
                                    ]}
                                    activeOpacity={0.8}
                                    onPress={handlePreviousContent}
                                    disabled={isFirstContent}>
                                    <ChevronLeft size={16} color={THEME.colors.onPrimary} />
                                    <Text style={coursesStyles.nextButtonText}>ANTERIOR</Text>
                                </TouchableOpacity>

                                {!isLastContent ? (
                                    <TouchableOpacity
                                        style={coursesStyles.nextButton}
                                        activeOpacity={0.8}
                                        onPress={handleNextContent}>
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
