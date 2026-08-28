import Ionicons from '@react-native-vector-icons/ionicons';

import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { THEME } from '../../constants/theme';
import { News } from '../../models/news';
import { getNewsById } from '../../services/news';

import { articleStyles as styles } from '../../styles/articleStyles';

export default function ArticleScreen() {
    const router = useRouter();

    const { id } = useLocalSearchParams();

    const [news, setNews] = useState<News | null>(null);
    const [loading, setLoading] = useState(true);
    const [showSummary, setShowSummary] = useState(false);

    // Update the news when the id changes (attention to the end of the line)
    useEffect(() => {
        if (id) loadNews();
    }, [id]);

    async function loadNews() {
        try {
            const data = await getNewsById(id as string);
            setNews(data);
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
            router.replace('/(tabs)/home');
        }
    };

    if (loading) {
        return (
            <SafeAreaView style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color={THEME.colors.primary} />
            </SafeAreaView>
        );
    }

    if (!news) {
        return (
            <SafeAreaView style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <Text>Notícia não encontrada.</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>

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
                <View style={styles.cardSection}>
                    {/* Title */}
                    <Text style={styles.mainTitle}>{news.title}</Text>

                    {/* Cover image */}
                    {news.coverImage && (
                        <Image source={{ uri: news.coverImage }} style={styles.cardImage} />
                    )}

                    {/* Description */}
                    <Text style={styles.leadText}>{news.description}</Text>

                    {/* Show summary */}
                    <TouchableOpacity
                        style={styles.summaryButton}
                        activeOpacity={0.8}
                        onPress={() => setShowSummary(!showSummary)}>

                        <Ionicons name="document-text" size={16} color={THEME.colors.black} style={{ marginRight: 6 }} />

                        <Text style={styles.summaryButtonText}>
                            {showSummary ? 'OCULTAR RESUMO' : 'VER RESUMO'}
                        </Text>
                    </TouchableOpacity>

                    {/* TODO: Do a modal to show the summary */}
                    {showSummary && (
                        <Text style={[styles.leadText, { marginTop: 12 }]}>{news.summary}</Text>
                    )}
                </View>

                {/* News metadata */}
                <View style={[styles.cardSection, styles.metaCard]}>
                    <Text style={styles.metaText}>
                        {new Date(news.createdAt).toLocaleDateString('pt-BR')}
                    </Text>

                    <Text style={styles.metaText}>
                        <Text style={{ fontWeight: '700' }}>5 min</Text> de leitura
                    </Text>

                    <Text style={styles.metaText}>
                        Por <Text style={{ fontWeight: '700' }}>{news.user.name}</Text>
                    </Text>
                </View>

                <View style={styles.cardSection}>
                    <Text style={styles.paragraph}>{news.content}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}