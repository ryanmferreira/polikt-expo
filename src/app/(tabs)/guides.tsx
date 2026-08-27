import Ionicons from '@react-native-vector-icons/ionicons';

import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { THEME } from '../../constants/theme';
import { Guide } from '../../models/guide';
import { getAllGuides } from '../../services/guides';

import { guidesStyles } from '../../styles/guideStyles';

export default function GuidesScreen() {
    const router = useRouter();
    const [guides, setGuides] = useState<Guide[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        loadGuides();
    }, []);

    async function loadGuides() {
        try {
            setLoading(true);
            setError(null);
            const data = await getAllGuides();
            setGuides(data);
        } catch (e) {
            setError('Não foi possível carregar os guias.');
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <SafeAreaView style={[guidesStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color={THEME.colors.primary} />
            </SafeAreaView>
        );
    }

    if (error) {
        return (
            <SafeAreaView style={[guidesStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text style={{ color: THEME.colors.white, marginBottom: 12 }}>{error}</Text>
                <TouchableOpacity onPress={loadGuides}>
                    <Text style={{ color: THEME.colors.primary }}>Tentar novamente</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={guidesStyles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }} >

                <View style={guidesStyles.headerRow}>
                    <Text style={guidesStyles.headerTitle}>GUIA DE DENÚNCIAS</Text>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Ionicons name="notifications" size={26} color={THEME.colors.primary} />
                    </TouchableOpacity>
                </View>

                <View style={guidesStyles.mainDivider} />

                <View style={guidesStyles.infoBox}>
                    <Text style={guidesStyles.infoText}>
                        Saiba como e onde agir contra irregularidades.
                    </Text>
                </View>

                {guides.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={guidesStyles.card}
                        activeOpacity={0.8}
                        onPress={() => router.push(`/guides/${item.id}`)} >

                        <Image
                            source={{ uri: item.coverImage ?? undefined }}
                            style={guidesStyles.cardImage} />

                        <View style={guidesStyles.cardContent}>
                            <Text style={guidesStyles.cardTitle}>{item.title}</Text>

                            <View style={guidesStyles.cardDivider} />

                            <Text style={guidesStyles.cardDesc}>{item.description}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}