import { Book, ChevronLeft, Clock, FileText, MessageSquare, Share2, ThumbsUp, User } from 'lucide-react-native';

import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Markdown from 'react-native-markdown-display';

import { THEME } from '../../constants/theme';
import { News } from '../../models/news';
import { getNewsById } from '../../services/news';

import { markdownStyles } from '../../styles/markdownStyles';
import { newsStyles as styles } from '../../styles/newsStyles';
import { responsiveStyles } from '../../styles/responsiveStyles';

export default function ArticleScreen() {
    const router = useRouter();

    const { id } = useLocalSearchParams();

    const [news, setNews] = useState<News | null>(null);
    const [showSummary, setShowSummary] = useState(false);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [reloadKey, setReloadKey] = useState(0);

    // Update the news when the id changes (attention to the end of the line)
    useEffect(() => {
        if (id) {
            loadNews();
        }
    }, [id, reloadKey]);

    async function loadNews() {
        try {
            setLoading(true);
            setError(null);

            const data = await getNewsById(id as string);

            setNews(data);
        } catch (e) {
            // TODO: Error handling
            setNews(null);
            setError('Não foi possível carregar esta notícia.');
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
            <SafeAreaView style={[styles.container, { justifyContent: 'center', alignItems: 'center', padding: THEME.spacing.paddingStandard }]}>
                <Text style={styles.newsEmpty}>{error ?? 'Notícia não encontrada.'}</Text>
                {id && (
                    <TouchableOpacity onPress={() => handleBack()} activeOpacity={0.7}>
                        <Text style={styles.linkText}>Voltar para o catálogo</Text>
                    </TouchableOpacity>
                )}
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>

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
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[styles.scrollContent, responsiveStyles.readingContent]}>
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
                        accessibilityRole="button"
                        accessibilityState={{ expanded: showSummary }}
                        onPress={() => setShowSummary(!showSummary)}>

                        <FileText size={16} color={THEME.colors.onPrimary} style={{ marginRight: 6 }} />

                        <Text style={styles.summaryButtonText}>
                            {showSummary ? 'OCULTAR RESUMO' : 'VER RESUMO'}
                        </Text>
                    </TouchableOpacity>

                    {/* // TODO: Do a modal to show the summary */}
                    {showSummary && (
                        <View style={styles.summaryPanel}>
                            <Text style={styles.summaryText}>{news.summary}</Text>
                        </View>
                    )}
                </View>

                {/* News metadata */}
                <View style={styles.metaCard}>
                    <View style={styles.metaRow}>
                        <View style={[styles.metaItem, styles.metaAuthor]}>
                            <User size={16} color={THEME.colors.textMuted} />
                            <Text style={styles.metaText} numberOfLines={1}>
                                Por <Text style={styles.metaEmphasis}>{news.user.name}</Text>
                            </Text>
                        </View>

                        <View style={styles.metaItem}>
                            <Book size={16} color={THEME.colors.textMuted} />
                            <Text style={styles.metaText}>
                                <Text style={styles.metaEmphasis}>5 min</Text> de leitura
                            </Text>
                        </View>
                    </View>

                    <View style={styles.metaDivider} />

                    <View style={styles.metaRow}>
                        <View style={styles.metaItem}>
                            <Clock size={16} color={THEME.colors.textMuted} />
                            <Text style={styles.metaText}>
                                {new Date(news.createdAt).toLocaleDateString('pt-BR')}
                            </Text>
                        </View>

                        <View style={styles.metaActions}>
                            {/* // TODO: Implement upvotes */}
                            <TouchableOpacity
                                style={styles.metaAction}
                                activeOpacity={0.7}
                                accessibilityRole="button"
                                accessibilityLabel={`Curtir notícia, ${news.upvotes} curtidas`}>
                                <ThumbsUp size={17} color={THEME.colors.textMuted} />
                                <Text style={styles.metaText}>{news.upvotes}</Text>
                            </TouchableOpacity>

                            {/* // TODO: Implement comments */}
                            <TouchableOpacity
                                style={styles.metaAction}
                                activeOpacity={0.7}
                                accessibilityRole="button"
                                accessibilityLabel="Comentários, 0 comentários">
                                <MessageSquare size={17} color={THEME.colors.textMuted} />
                                <Text style={styles.metaText}>0</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* News introduction */}
                <View style={styles.cardSection}>
                    <Text style={styles.paragraph}>{news.content}</Text>
                </View>

                {/* News body */}
                <View>
                    {(news.body ?? '').split('---').map((section, index) => (
                        <View key={index} style={[styles.cardSection, index > 0 && { marginTop: THEME.spacing.gap },]} >
                            <Markdown style={markdownStyles}>
                                {section.trim()}
                            </Markdown>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}