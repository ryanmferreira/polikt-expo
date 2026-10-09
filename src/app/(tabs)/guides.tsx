import { ArrowRight, Bell, BookOpen, RefreshCw, Settings2, ShieldCheck } from 'lucide-react-native';

import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, Platform, ScrollView, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getAllGuides } from '../../services/guides';

import { THEME } from '../../constants/theme';
import { Guide } from '../../models/guide';

import { guidesStyles } from '../../styles/guideStyles';
import { RESPONSIVE_BREAKPOINT, responsiveStyles } from '../../styles/responsiveStyles';

export default function GuidesScreen() {
    const router = useRouter();
    const { width } = useWindowDimensions();
    const useGrid = Platform.OS === 'web' && width >= RESPONSIVE_BREAKPOINT;
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

    if (error) {
        return (
            <SafeAreaView style={[guidesStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text style={{ color: THEME.colors.text, marginBottom: 12 }}>{error}</Text>
                <TouchableOpacity onPress={loadGuides}>
                    <Text style={{ color: THEME.colors.primary }}>Tentar novamente</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={guidesStyles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[{ paddingBottom: 100 }, responsiveStyles.pageContent]} >

                {/* Header */}
                <View style={guidesStyles.headerRow}>
                    <Text style={guidesStyles.headerTitle}>GUIA DE DENÚNCIAS</Text>

                    {/* Notifications icon */}
                    <TouchableOpacity activeOpacity={0.7}>
                        <Bell size={26} color={THEME.colors.primary} />
                    </TouchableOpacity>
                </View>

                <View style={guidesStyles.mainDivider} />

                <View style={guidesStyles.infoBox}>
                    <View style={guidesStyles.infoHeading}>
                        <ShieldCheck size={18} color={THEME.colors.primary} />
                        <Text style={guidesStyles.infoTitle}>GUIAS DE DENÚNCIA</Text>
                    </View>
                    <Text style={guidesStyles.infoText}>
                        Orientações práticas para identificar irregularidades e saber onde denunciá-las.
                    </Text>
                </View>

                {/* Explore section */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={guidesStyles.headerTitle}>EXPLORAR</Text>
                    <Settings2 size={22} color={THEME.colors.primary} style={{ marginBottom: 8 }} />
                </View>

                <View style={guidesStyles.mainDivider} />

                {/* Filters */}
                <View style={guidesStyles.tagsContainer}>
                    <TouchableOpacity style={guidesStyles.tag} activeOpacity={0.8}>
                        <Text style={guidesStyles.tagText}>VER TODOS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={guidesStyles.tag} activeOpacity={0.8}>
                        <Text style={guidesStyles.tagText}>GOVERNANÇA</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={guidesStyles.tag} activeOpacity={0.8}>
                        <Text style={guidesStyles.tagText}>ELEITORAL</Text>
                    </TouchableOpacity>
                </View>


                {/* Refresh button */}
                {!loading && (
                    <TouchableOpacity style={guidesStyles.refreshButton}activeOpacity={0.7}onPress={loadGuides} >
                        <RefreshCw size={16} color={THEME.colors.primary} />

                        <Text style={guidesStyles.refreshButtonText}>Atualizar</Text>
                    </TouchableOpacity>
                )}

                {loading &&
                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 25, }}>
                        {loading && (<ActivityIndicator size="large" color={THEME.colors.primary} style={{ marginTop: 20 }} />)}
                        <Text style={{ color: THEME.colors.text, marginTop: 8, fontSize: 12, }}>Carregando guias...</Text>
                    </View>
                }

                {/* // ! For each guide, show a card */}
                <View style={useGrid && responsiveStyles.grid}>
                    {guides.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={[
                                guidesStyles.card,
                                useGrid && responsiveStyles.guideGridCard,
                            ]}
                            activeOpacity={0.8}
                            accessibilityRole="button"
                            accessibilityLabel={`Abrir guia: ${item.title}`}
                            onPress={() => router.push(`/guides/${item.id}`)} >

                            <View style={[guidesStyles.cardImageWrap, useGrid && responsiveStyles.guideGridImage,]}>
                                {item.coverImage ? (
                                    <Image
                                        source={{ uri: item.coverImage }}
                                        style={guidesStyles.cardImage}
                                        resizeMode="cover"
                                    />
                                ) : (
                                    <View style={guidesStyles.cardImagePlaceholder}>
                                        <BookOpen size={38} color={THEME.colors.primary} />
                                    </View>
                                )}
                            </View>

                            <View style={guidesStyles.cardContent}>
                                <Text style={guidesStyles.cardTitle} numberOfLines={2}>
                                    {item.title}
                                </Text>

                                <Text style={guidesStyles.cardDesc} numberOfLines={2}>
                                    {item.description}
                                </Text>

                                <View style={guidesStyles.cardFooter}>
                                    <Text style={guidesStyles.cardActionText}>VER GUIA</Text>
                                    <ArrowRight size={16} color={THEME.colors.primary} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}