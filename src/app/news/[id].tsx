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
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) loadNews();
    }, [id]);

    async function loadNews() {
        try {
            const data = await getNewsById(id as string);
            setNews(data);
        } catch (e) {
            setError('Não foi possível buscar a notícia. Por favor, tente novamente mais tarde.');
        } finally {
            setLoading(false);
        }
    }

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

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.cardSection}>
                    <Text style={styles.mainTitle}>{news.title}</Text>
                    {news.coverImage && (
                        <Image source={{ uri: news.coverImage }} style={styles.cardImage} />
                    )}
                    <Text style={styles.leadText}>{news.description}</Text>
                </View>

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