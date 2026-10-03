import { Check, ChevronLeft, ChevronRight, Share2 } from 'lucide-react-native';

import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { THEME } from '../../constants/theme';
import { Guide, GuideStep } from '../../models/guide';
import { getGuideById, getGuideSteps } from '../../services/guides';

import Markdown from 'react-native-markdown-display';

import { markdownStyles } from '@/styles/markdownStyles';
import { guidesStyles } from '../../styles/guideStyles';

export default function GuideScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    const [guide, setGuide] = useState<Guide | null>(null);
    const [steps, setSteps] = useState<GuideStep[]>([]);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    // Update the guide when the id changes (attention to the end of the line)
    useEffect(() => {
        if (id) {
            loadGuide();
        }
    }, [id]);

    async function loadGuide() {
        try {
            const guideData = await getGuideById(id as string);
            const stepsData = await getGuideSteps(id as string);

            setGuide(guideData);
            setSteps(stepsData);
        } catch (e) {
            // TODO: Error handling
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
            <SafeAreaView style={[guidesStyles.detailContainer, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color={THEME.colors.primary} />
            </SafeAreaView>
        );
    }

    if (!guide) {
        return (
            <SafeAreaView style={[guidesStyles.detailContainer, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text>Guia não encontrado.</Text>
            </SafeAreaView>
        );
    }

    const progressRatio = steps.length > 0 ? (currentStepIndex + 1) / steps.length : 0; // Calculate the progress ratio

    const currentStep = steps[currentStepIndex];

    const isFirstStep = currentStepIndex === 0;
    const isLastStep = currentStepIndex === steps.length - 1;

    return (
        <SafeAreaView style={guidesStyles.detailContainer}>

            {/* Top bar */}
            <View style={guidesStyles.topBar}>
                <TouchableOpacity style={guidesStyles.actionButton} onPress={handleBack} activeOpacity={0.7}>
                    <ChevronLeft size={20} color={THEME.colors.primary} />
                    <Text style={guidesStyles.topBarText}>VOLTAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={guidesStyles.actionButton} activeOpacity={0.7}>
                    <Share2 size={18} color={THEME.colors.primary} />
                    <Text style={guidesStyles.topBarText}>COMPARTILHAR</Text>
                </TouchableOpacity>
            </View>

            {/* Main content */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={guidesStyles.scrollContent}>
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
                <View style={guidesStyles.cardSection}>
                    <Text style={guidesStyles.sectionTitle}>Órgão responsável</Text>

                    <View style={guidesStyles.sectionDivider} />

                    <Text style={guidesStyles.leadText}>{guide.agency.name}</Text>
                    <Text style={guidesStyles.linkText}>{guide.agency.contact}</Text>
                </View>

                {/* Steps */}
                <View style={guidesStyles.cardSection}>
                    <Text style={guidesStyles.sectionTitle}>ETAPAS DO PROCESSO ({currentStepIndex + 1} / {steps.length + 1})</Text>
                    <View style={guidesStyles.sectionDivider} />

                    {currentStep && (
                        <View>
                            <Text style={guidesStyles.stepText}>
                                <View>
                                    {(currentStep.content ?? '').split('---').map((section, index) => (
                                        <View key={index} style={[guidesStyles.stepCard, index > 0 && { marginTop: THEME.spacing.gap },]} >
                                            <Markdown style={markdownStyles}>
                                                {section.trim()}
                                            </Markdown>
                                        </View>
                                    ))}
                                </View>
                            </Text>
                        </View>
                    )}

                    {/* Progress header */}
                    <View style={guidesStyles.progressHeader}>
                        <Text style={guidesStyles.progressHeaderText}>ETAPA {currentStepIndex + 1}</Text>
                        <Text style={guidesStyles.progressHeaderText}>{steps.length} ETAPAS</Text>
                    </View>

                    {/* Progress track */}
                    <View style={guidesStyles.progressTrack}>
                        <View style={[guidesStyles.progressFill, { width: `${progressRatio * 100}%` }]} />
                    </View>

                    {/* Navigation buttons */}
                    <View style={guidesStyles.buttonsRow}>

                        {/* Previous button */}
                        <TouchableOpacity
                            style={[
                                guidesStyles.nextButton,
                                isFirstStep && { opacity: 0.25 }
                            ]}
                            activeOpacity={0.8}
                            onPress={handlePreviousStep}
                            disabled={isFirstStep} >

                            <ChevronLeft size={16} color={THEME.colors.onPrimary} style={{ marginLeft: 4 }} />

                            <Text style={guidesStyles.nextButtonText}>ANTERIOR</Text>
                        </TouchableOpacity>

                        {/* Next button (disabled if last step) */}
                        <TouchableOpacity
                            style={[
                                guidesStyles.nextButton,
                                isLastStep && { display: 'none' }
                            ]}
                            activeOpacity={0.8}
                            onPress={handleNextStep}
                            disabled={isLastStep} >

                            <Text style={guidesStyles.nextButtonText}>PRÓXIMO</Text>

                            <ChevronRight size={16} color={THEME.colors.onPrimary} style={{ marginLeft: 4 }} />
                        </TouchableOpacity>

                        {/* Finish button (disabled if not last step) */}
                        <TouchableOpacity
                            style={[
                                guidesStyles.nextButton,
                                { backgroundColor: THEME.colors.success },
                                !isLastStep && { display: 'none' }
                            ]}
                            activeOpacity={0.8}
                            onPress={handleBack}
                            disabled={!isLastStep} >

                            <Text style={guidesStyles.nextButtonText}>FECHAR</Text>

                            <Check size={16} color={THEME.colors.onPrimary} style={{ marginLeft: 4 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}