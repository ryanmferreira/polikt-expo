import { Check, ChevronLeft, ChevronRight, Share2 } from 'lucide-react-native';

import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { THEME } from '../../constants/theme';
import { Guide, GuideStep } from '../../models/guide';
import { getGuideById, getGuideSteps } from '../../services/guides';

import Markdown from 'react-native-markdown-display';

import { markdownStyles } from '@/styles/markdownStyles';
import { guidesStyles } from '../../styles/guideStyles';
import { responsiveStyles, WIDE_LAYOUT_BREAKPOINT } from '../../styles/responsiveStyles';

export default function GuideScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    const { width } = useWindowDimensions();
    const useWideLayout = width >= WIDE_LAYOUT_BREAKPOINT;

    const [guide, setGuide] = useState<Guide | null>(null);
    const [steps, setSteps] = useState<GuideStep[]>([]);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    const [reloadKey, setReloadKey] = useState(0);

    const guideId = Array.isArray(id) ? id[0] : id;

    // Update the guide when the id changes (attention to the end of the line)
    useEffect(() => {
        if (guideId) {
            loadGuide();
        }
    }, [guideId, reloadKey]);

    async function loadGuide() {
        try {
            setLoading(true);
            setError(null);

            setCurrentStepIndex(0);

            const guideData = await getGuideById(guideId);
            const stepsData = await getGuideSteps(guideId);

            setGuide(guideData);
            setSteps(stepsData);
        } catch {
            // TODO: Error handling
            setGuide(null);
            setSteps([]);
            setError('Não foi possível carregar este guia.');
        } finally {
            setLoading(false);
        }
    }

    // If can't go back, go direct to the home route
    const handleBack = () => {
        if (router.canGoBack()) {
            router.back();
        } else {
            router.replace('/(tabs)/guides');
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
            <SafeAreaView style={[guidesStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color={THEME.colors.primary} />
            </SafeAreaView>
        );
    }

    if (!guide) {
        return (
            <SafeAreaView style={[guidesStyles.detailContainer, { justifyContent: 'center', alignItems: 'center', padding: THEME.spacing.paddingStandard }]}>
                <Text style={guidesStyles.stepEmpty}>{error ?? 'Guia não encontrado.'}</Text>
                {guideId && (
                    <TouchableOpacity onPress={() => handleBack()} activeOpacity={0.7}>
                        <Text style={guidesStyles.linkText}>Voltar para o catálogo</Text>
                    </TouchableOpacity>
                )}
            </SafeAreaView>
        );
    }

    const progressRatio = steps.length > 0 ? currentStepIndex / (steps.length - 1) : 0;

    const currentStep = steps[currentStepIndex];

    const isFirstStep = currentStepIndex === 0;
    const isLastStep = steps.length > 0 && currentStepIndex === steps.length - 1;

    return (
        <SafeAreaView style={guidesStyles.detailContainer}>

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
                    guidesStyles.scrollContent,
                    responsiveStyles.guideDetailContent,
                    { flexGrow: 1 },
                    useWideLayout && responsiveStyles.guideDetailColumns,
                ]}>

                {/* Guide overview */}
                <View style={[guidesStyles.detailOverview, useWideLayout && responsiveStyles.guideOverviewDesktop,]}>
                    {/* Main card */}
                    <View style={guidesStyles.mainCard}>

                        {/* Tag row */}
                        <View style={guidesStyles.tagRow}>
                            <View style={guidesStyles.tag}>
                                <Text style={guidesStyles.tagText}>{guide.agency.name}</Text>
                            </View>
                        </View>

                        {/* Title */}
                        <Text style={guidesStyles.mainTitle}>{guide.title}</Text>

                        {/* Cover image */}
                        {guide.coverImage && (
                            <Image source={{ uri: guide.coverImage }} style={guidesStyles.detailImage} />
                        )}

                        {/* Description */}
                        <Text style={guidesStyles.leadText}>{guide.description}</Text>
                    </View>

                    {/* Agency */}
                    <View style={[guidesStyles.cardSection, { flexGrow: 1 }]}>
                        <Text style={guidesStyles.sectionTitle}>Órgão responsável</Text>

                        <View style={guidesStyles.sectionDivider} />

                        <Text style={guidesStyles.leadText}>{guide.agency.name}</Text>
                        <Text style={guidesStyles.linkText}>{guide.agency.contact}</Text>
                    </View>
                </View>

                {/* Steps */}
                <View style={[
                    guidesStyles.cardSection,
                    guidesStyles.guideStepsPanel,
                    useWideLayout && responsiveStyles.guideStepsDesktop,
                ]}>
                    <Text style={guidesStyles.sectionTitle}>
                        ETAPAS DO PROCESSO{steps.length > 0 ? ` (${currentStepIndex + 1} / ${steps.length})` : ''}
                    </Text>
                    <View style={guidesStyles.sectionDivider} />

                    {currentStep ? (
                        useWideLayout ? (
                            <ScrollView
                                style={responsiveStyles.guideStepContentDesktop}
                                showsVerticalScrollIndicator={false}>
                                <View style={guidesStyles.stepCards}>
                                    {(currentStep.content ?? '').split('---').map((section, index) => (
                                        <View key={`${currentStep.id}-${index}`} style={guidesStyles.stepCard}>
                                            <Markdown style={markdownStyles}>
                                                {section.trim()}
                                            </Markdown>
                                        </View>
                                    ))}
                                </View>
                            </ScrollView>
                        ) : (
                            <View style={guidesStyles.stepCards}>
                                {(currentStep.content ?? '').split('---').map((section, index) => (
                                    <View key={`${currentStep.id}-${index}`} style={guidesStyles.stepCard}>
                                        <Markdown style={markdownStyles}>
                                            {section.trim()}
                                        </Markdown>
                                    </View>
                                ))}
                            </View>
                        )
                    ) : (
                        <Text style={guidesStyles.stepEmpty}>Este guia ainda não possui etapas cadastradas.</Text>
                    )}

                    {steps.length > 0 && (
                        <>
                            <View style={guidesStyles.progressHeader}>
                                <Text style={guidesStyles.progressHeaderText}>ETAPA {currentStepIndex + 1}</Text>
                                <Text style={guidesStyles.progressHeaderText}>{steps.length} ETAPAS</Text>
                            </View>

                            <View style={guidesStyles.progressTrack}>
                                <View style={[guidesStyles.progressFill, { width: `${progressRatio * 100}%` }]} />
                            </View>

                            <View style={guidesStyles.buttonsRow}>
                                <TouchableOpacity
                                    style={[
                                        guidesStyles.nextButton,
                                        isFirstStep && { opacity: 0.25 },
                                    ]}
                                    activeOpacity={0.8}
                                    onPress={handlePreviousStep}
                                    disabled={isFirstStep}>
                                    <ChevronLeft size={16} color={THEME.colors.onPrimary} />
                                    <Text style={guidesStyles.nextButtonText}>ANTERIOR</Text>
                                </TouchableOpacity>

                                {!isLastStep ? (
                                    <TouchableOpacity
                                        style={guidesStyles.nextButton}
                                        activeOpacity={0.8}
                                        onPress={handleNextStep}>
                                        <Text style={guidesStyles.nextButtonText}>PRÓXIMO</Text>
                                        <ChevronRight size={16} color={THEME.colors.onPrimary} />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity
                                        style={[guidesStyles.nextButton, { backgroundColor: THEME.colors.success }]}
                                        activeOpacity={0.8}
                                        onPress={handleBack}>
                                        <Text style={guidesStyles.nextButtonText}>FECHAR</Text>
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