import Ionicons from '@react-native-vector-icons/ionicons';

import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { THEME } from '../../constants/theme';
import { Guide, GuideStep } from '../../models/guide';
import { getGuideById, getGuideSteps } from '../../services/guides';

import Markdown from 'react-native-markdown-display';

import { markdownStyles } from '@/styles/markdownStyles';
import { guidesStyles as styles } from '../../styles/guideStyles';

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
            <SafeAreaView style={[styles.detailContainer, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color={THEME.colors.primary} />
            </SafeAreaView>
        );
    }

    if (!guide) {
        return (
            <SafeAreaView style={[styles.detailContainer, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text>Guia não encontrado.</Text>
            </SafeAreaView>
        );
    }

    const progressRatio = steps.length > 0 ? (currentStepIndex + 1) / steps.length : 0; // Calculate the progress ratio

    const currentStep = steps[currentStepIndex];

    const isFirstStep = currentStepIndex === 0;
    const isLastStep = currentStepIndex === steps.length - 1;

    return (
        <SafeAreaView style={styles.detailContainer}>

            {/* Top bar */}
            <View style={styles.topBar}>
                <TouchableOpacity style={styles.actionButton} onPress={handleBack} activeOpacity={0.7}>
                    <Ionicons name="chevron-back" size={20} color={THEME.colors.primary} />
                    <Text style={styles.topBarText}>VOLTAR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton} activeOpacity={0.7}>
                    <Ionicons name="share-social" size={18} color={THEME.colors.primary} />
                    <Text style={styles.topBarText}>COMPARTILHAR</Text>
                </TouchableOpacity>
            </View>

            {/* Main content */}
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <View style={styles.mainCard}>

                    {/* Tag row */}
                    <View style={styles.tagRow}>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>{guide.agency.name}</Text>
                        </View>
                    </View>

                    {/* Title */}
                    <Text style={styles.mainTitle}>{guide.title}</Text>

                    {/* Progress header */}
                    <View style={styles.progressHeader}>
                        <Text style={styles.progressHeaderText}>ETAPA {currentStepIndex + 1}</Text>
                        <Text style={styles.progressHeaderText}>{steps.length} ETAPAS</Text>
                    </View>

                    {/* Progress track */}
                    <View style={styles.progressTrack}>
                        <View style={[styles.progressFill, { width: `${progressRatio * 100}%` }]} />
                    </View>

                    {/* Cover image */}
                    {guide.coverImage && (
                        <Image source={{ uri: guide.coverImage }} style={styles.detailImage} />
                    )}

                    {/* Description */}
                    <Text style={styles.leadText}>{guide.description}</Text>
                </View>

                {/* Agency */}
                <View style={styles.cardSection}>
                    <Text style={styles.sectionTitle}>Órgão responsável</Text>

                    <View style={styles.sectionDivider} />

                    <Text style={styles.leadText}>{guide.agency.name}</Text>
                    <Text style={styles.linkText}>{guide.agency.contact}</Text>
                </View>

                {/* Steps */}
                <View style={styles.cardSection}>
                    <Text style={styles.sectionTitle}>ETAPAS DO PROCESSO</Text>
                    <View style={styles.sectionDivider} />

                    {currentStep && (
                        <View>
                            <Text style={styles.stepText}>
                                <View>
                                    {(currentStep.content ?? '').split('---').map((section, index) => (
                                        <View key={index} style={[styles.stepCard, index > 0 && { marginTop: THEME.spacing.gap },]} >
                                            <Markdown style={markdownStyles}>
                                                {section.trim()}
                                            </Markdown>
                                        </View>
                                    ))}
                                </View>
                            </Text>
                        </View>
                    )}

                    {/* Navigation buttons */}
                    <View style={styles.buttonsRow}>

                        {/* Previous button */}
                        <TouchableOpacity
                            style={[styles.nextButton, isFirstStep && { opacity: 0.4 }]}
                            activeOpacity={0.8}
                            onPress={handlePreviousStep}
                            disabled={isFirstStep} >

                            <Ionicons name="arrow-back" size={16} color={THEME.colors.black} style={{ marginLeft: 4 }} />
                            <Text style={styles.nextButtonText}>ANTERIOR</Text>
                        </TouchableOpacity>

                        {/* Next button */}
                        <TouchableOpacity
                            style={[styles.nextButton, isLastStep && { opacity: 0.4 }]}
                            activeOpacity={0.8}
                            onPress={handleNextStep}
                            disabled={isLastStep}>

                            <Text style={styles.nextButtonText}>PRÓXIMO</Text>
                            <Ionicons name="arrow-forward" size={16} color={THEME.colors.black} style={{ marginLeft: 4 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}