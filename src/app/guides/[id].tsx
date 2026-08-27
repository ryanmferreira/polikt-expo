import Ionicons from '@react-native-vector-icons/ionicons';

import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { THEME } from '../../constants/theme';
import { Guide, GuideStep } from '../../models/guide';
import { getGuideById, getGuideSteps } from '../../services/guides';

import { guidesStyles as styles } from '../../styles/guideStyles';

export default function GuideScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    const [guide, setGuide] = useState<Guide | null>(null);
    const [steps, setSteps] = useState<GuideStep[]>([]);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [loading, setLoading] = useState(true);

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
            // preguiçaaaaaaaaaaaaaaaaaaaaa
        } finally {
            setLoading(false);
        }
    }

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

    const progressRatio = steps.length > 0 ? (currentStepIndex + 1) / steps.length : 0;
    const currentStep = steps[currentStepIndex];
    const isFirstStep = currentStepIndex === 0;
    const isLastStep = currentStepIndex === steps.length - 1;

    return (
        <SafeAreaView style={styles.detailContainer}>
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

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <View style={styles.mainCard}>
                    <View style={styles.tagRow}>
                        <View style={styles.tag}>
                            <Text style={styles.tagText}>{guide.agency.name}</Text>
                        </View>

                        <View style={styles.tag}>
                            <Text style={styles.tagText}>GUIA DE DENÚNCIA</Text>
                        </View>
                    </View>

                    <Text style={styles.mainTitle}>{guide.title}</Text>

                    <View style={styles.progressHeader}>
                        <Text style={styles.progressHeaderText}>ETAPA {currentStepIndex + 1}</Text>
                        <Text style={styles.progressHeaderText}>{steps.length} ETAPAS</Text>
                    </View>

                    <View style={styles.progressTrack}>
                        <View style={[styles.progressFill, { width: `${progressRatio * 100}%` }]} />
                    </View>

                    {guide.coverImage && (
                        <Image source={{ uri: guide.coverImage }} style={styles.detailImage} />
                    )}
                    <Text style={styles.leadText}>{guide.description}</Text>
                </View>

                <View style={styles.cardSection}>
                    <Text style={styles.sectionTitle}>ETAPAS DO PROCESSO</Text>
                    <View style={styles.sectionDivider} />

                    {currentStep && (
                        <View style={styles.stepCard}>
                            <Text style={styles.stepText}>
                                <Text style={{ fontWeight: '800', color: THEME.colors.white }}>
                                    Passo {currentStepIndex + 1}:{' '}
                                </Text>
                                {currentStep.content}
                            </Text>
                        </View>
                    )}

                    <View style={styles.buttonsRow}>
                        <TouchableOpacity
                            style={[styles.nextButton, isFirstStep && { opacity: 0.4 }]}
                            activeOpacity={0.8}
                            onPress={handlePreviousStep}
                            disabled={isFirstStep} >

                            <Ionicons name="caret-back" size={16} color={THEME.colors.black} style={{ marginLeft: 4 }} />
                            <Text style={styles.nextButtonText}>ANTERIOR</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.nextButton, isLastStep && { opacity: 0.4 }]}
                            activeOpacity={0.8}
                            onPress={handleNextStep}
                            disabled={isLastStep}>

                            <Text style={styles.nextButtonText}>PRÓXIMO</Text>
                            <Ionicons name="caret-forward" size={16} color={THEME.colors.black} style={{ marginLeft: 4 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}